
module.exports = (sequelize,DataTypes)=>{
const order_products = sequelize.define('order_products',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        aautoIncrement:true
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    order_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    deleted_at:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{timeStamps:true})
return order_products
}