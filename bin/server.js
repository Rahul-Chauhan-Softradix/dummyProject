
const express = require('express');
const  bodyParser =  require('body-parser');
const DB =  require('../src/helpers/db.js');
const Routes =  require("../src/index.js")
const swaggerUi = require('swagger-ui-express')
import multer from 'multer'
import cors from 'cors';


import swaggerSpec  from '../config/swagger'

class Server {
    constructor(){
        this.app = null;
        this.db = null;
    }
    
    async initServer (){
        try{
            
            this.app = await express();
            this.app.use(bodyParser.json());
            this.app.use(
                bodyParser.urlencoded({
                    extended:true
                }),
            );
            this.app.use(
                cors({
                    exposedHeaders:[
                        'date',
                        'content-type',
                        'content-length',
                        'connection',
                        'server',
                        'x-powered-by',
                        'access-content-allow-origin',
                        'authorization',
                        'x-final-url',
                    ],
                    allowedHeaders:['content-type', 'accept', 'authorization',' Content-Type'],
                })
            )
            this.app.use(multer().any())
            this.db = new DB();
            await this.db.init();
            await this.healthCheckRoute();
            await this.healthyDB();
            await this.configureRoutes(this.db);

            this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


                return this.app
        }catch (err){
            throw err;
        }
    }
    
    async healthCheckRoute(){
        try{
            this.app.get("/",(req,res)=>{
                res.json({ 
                    status:"Healthy",
                    msg:"This works perfectly fine",
                });
            });
        }catch (err){
            throw err;
        }
    }
 
    async healthyDB(){
        try{
            if(await this.db.checkConnection()){
                this.app.get('/health',(req,res)=>{
                    res.json({
                        msg:"DB Connection Successfull",
                    });
                });
                return;
            }
            throw new Error('Error connecting to DB')
        }catch(err){
            throw err;
        }
    }

    async configureRoutes(db){
        this.router = express.Router();
        const routes =  new Routes(this.router,db);
        await routes.routesRegistration();
      //  this.app.use(this.router);
      this.app.use("/", cors(), this.router);
     }
}

module.exports = Server