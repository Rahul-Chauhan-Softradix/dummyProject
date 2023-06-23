module.exports = (sequelize,Datatypes)=>{
    const orders = sequelize.define('orders',{
        id:{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        user_id:{
            type:Datatypes.INTEGER,
            allowNull:true
        },
        product_id:{
            type:Datatypes.STRING(50),
            allowNull:true
        },
        quantity:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        deleted_at:{
            type:Datatypes.INTEGER,
            allowNull:true
        }
    },{timeStamps:true})
    return orders;
}