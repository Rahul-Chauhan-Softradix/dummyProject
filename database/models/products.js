
module.exports = (sequelize,DataTypes)=>{
    const products = sequelize.define('products',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        product_name:{
            type:DataTypes.STRING(255),
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        deleted_at:{
            type:DataTypes.INTEGER,
            allowNull:true
        }
    },{timeStamps:true})
    return products;
}