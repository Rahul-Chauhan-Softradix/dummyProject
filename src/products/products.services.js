const { where } = require("sequelize")

class Product{
    async init(db){
        this.Models = db.models
        this.sql = db.sqlClient
    }

    addProduct = async(data)=>{
        return await this.Models.Products.create(data)
    }
    getStoreProductById = async(productId)=>{
        return await this.Models.Products.findOne({where:{
            id:productId,
            deleted_at:null
        },raw:true})
    }
    copyProduct = async(productId)=>{
        let oldProduct =  await this.Models.Products.findOne({where:{
            id:productId,
            deleted_at:null
        },raw:true})

        if(!oldProduct){
            return false
        }else{
            delete   oldProduct.id
            delete    oldProduct.createdAt
            delete    oldProduct.updatedAt

            let newProductName = oldProduct.product_name.split('Copy')
        


        }
    }
}
module.exports = Product