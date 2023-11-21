const Services = require('./order.services.js')
import {successResponse,errorResponse} from '../../config/responseHelper'
import {OrderMessage} from '../../constant/messages/order' 
import {RESPONSE_CODES} from '../../config/constants'
import cron from 'node-cron'

// cron.schedule('1 * * * * *', async() => {
//     console.log('cron job running every minute');
//   });
class Order{
    async init(db){
        this.services = new Services()
        this.Models = db.models;
        await this.services.init(db)
    }

    orderPlaced = async (req,res)=>{
        try{
          
        const body = req.body;

        let getUserById = await this.services.getUserDetail(body.user_id)
            if(!getUserById){
                return res.status(RESPONSE_CODES.NOT_FOUND).send(errorResponse(OrderMessage.USER_NOT_FOUND,{},RESPONSE_CODES.NOT_FOUND ))
            }
        let productDetail = await this.services.getProductById(body.product_id)
        if(!productDetail){
            return res.status(RESPONSE_CODES.NOT_FOUND).send(errorResponse(OrderMessage.PRODUCT_NOT_FOUND,{},RESPONSE_CODES.NOT_FOUND )) 
            
        }
      
        let orderDetails = await this.services.createOrder(body)

        return res.status(RESPONSE_CODES.GET).send(successResponse(OrderMessage.ORDER_PLACED,orderDetails,RESPONSE_CODES.GET))

        }catch(err){
            console.log(err)
           return res.send(err.errors[0].message)
        }
    }
    getAllOrder = async (req,res)=>{
    
        const userId = req.params.userId
      let data = await this.services.getAll(userId)

      return res.send(data)
    }
}

module.exports = Order;