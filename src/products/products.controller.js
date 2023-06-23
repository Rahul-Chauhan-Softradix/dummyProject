import Services from './products.services'
import {successResponse,errorResponse} from '../../config/responseHelper'
import {ProductMessages} from '../../constant/messages/product' 
import {RESPONSE_CODES} from '../../config/constants'
import {CUSTOM_MESSAGES} from '../../config/customMessages'
import {uploadToAws} from '../helpers/commonFunction'



 class Product {
    async init(db) {
        this.services = new Services();
        this.Models = db.models;
        await this.services.init(db);
      }

      addProduct = async(req,res)=>{
        try{
            let {body} = req;

            let createProduct = await this.services.addProduct(body)
            return res.status(RESPONSE_CODES.POST).send(successResponse(ProductMessages.PRODUCT_CREATED,createProduct,RESPONSE_CODES.POST))
         }catch(error){
          console.log(error)
            return res.status(500).send(errorResponse(CUSTOM_MESSAGES.ERROR),{},RESPONSE_CODES.SERVER_ERROR)
        }
      }

      uploadImages = async(req,res)=>{
        try{
         let {files,body} = req;

        let getStoreProductById = await this.services.getStoreProductById(body.product_id)
        if(!getStoreProductById){
          return res.status(404).send(errorResponse(ProductMessages.PRODUCT_NOT_FOUND),{},RESPONSE_CODES.NOT_FOUND)
        }
        let sendData = {
          file:files,
          id: body.product_id,
        folder: "Product",
        }
        let uploadImage =   await uploadToAws(sendData)
         return res.status(RESPONSE_CODES.POST).send(successResponse(ProductMessages.IMAGE_UPLOADED,uploadImage,RESPONSE_CODES.POST))
        }catch(error){
          console.log(error)
          return res.status(500).send(errorResponse(CUSTOM_MESSAGES.ERROR),{},RESPONSE_CODES.SERVER_ERROR)
        }
      }

      copyProduct = async(req,res)=>{
        try{
          let {params} = req
          let copyProduct = this.services.copyProduct(params.product_id)

          console.log(copyProduct)

        }catch(error){
          return res.status(RESPONSE_CODES.SERVER_ERROR),send(errorResponse(CUSTOM_MESSAGES.ERROR),{},RESPONSE_CODES.SERVER_ERROR)
        }
      }
}

module.exports = Product