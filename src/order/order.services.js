const sequelize = require("sequelize");

class Order {
  async init(db) {
    this.Models = db.models; 
  }

  getUserDetail = async(userId)=>{
    return await this.Models.Users.findOne({
      where:{
        id:userId,
        deleted_at:null
      }
    })
  }

  getProductById= async(productId)=>{
    return await this.Models.Products.findOne({
      where:{
        id:productId,
        deleted_at:null
      }
    })
  }
  createOrder = async (data) => {
    return this.Models.Orders.create(data);
  };

  getAll = async (userId) => {
    let data = this.Models.Users.findAll({attributes:['first_name','phone_number'],
      include: [{model:this.Models.Orders,attributes:['ProductName',"Price"],as:'orderInfo'}],
      where: { id: userId },
    });

    return data;
  };
}

module.exports = Order;
