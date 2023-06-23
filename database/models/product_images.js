module.exports = (sequelize,DataTypes)=>{
const product_images = sequelize.define('product_images',{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    image:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    deleted_at:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{timeStamps:true})
return product_images
}