const orderController = require('./order.controller');
import schemaValidator from '../helpers/schemaValidator'
import { addOrder } from './order.validator';


class Order{
    constructor(router,db){
        this.router = router;
        this.db = db;
        this.orderInstance = new orderController();
    }
    async routes(){
     await this.orderInstance.init(this.db)

        /** create order */
        this.router.post('/order/place', schemaValidator(addOrder), (req,res)=>{
            this.orderInstance.orderPlaced(req,res)
        })

        /** order list with pagination */
        this.router.get('/orderList/:userId',(req,res)=>{
            this.orderInstance.getAllOrder(req,res)
        })
    }
}

module.exports = Order