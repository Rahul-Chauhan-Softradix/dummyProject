const productController = require('./products.controller')
const schemaValidator = require('../helpers/schemaValidator')
import {addProduct} from './products.validator'
 class Product{
    constructor(router,db){
        this.router = router
        this.db = db
        this.productInstance = new productController()
    }

    async routes(){
        await this.productInstance.init(this.db)


        /** create product */
        this.router.post('/add/product',schemaValidator(addProduct),(req,res)=>{
            this.productInstance.addProduct(req,res)
        })

        /** upload product images */
        this.router.post('/upload/product-images',(req,res)=>{
            this.productInstance.uploadImages(req,res)
        })

        /** copy product */
        this.router.get('/copy/product/:product_id',(req,res)=>{
            this.productInstance.copyProduct(req,res)
        })
    }
}

module.exports = Product