import { Sequelize } from "sequelize";
const Op = Sequelize.Op;;

class User {
  async init(db) {
    this.Models = db.models;
  }

  countUser = async () => {
    const query = { role_id: 2, deleted_at: null };
    return this.Models.Users.count({ where: query });
  };

  getUserList = async (data) => {
    const query = { role_id: 2 };
    let havingCondition = {}
    if (data.search && data.search != "") {
      havingCondition = {
        userFulllName: { [Op.like]: `%${data.search}%` }
      }
    }

    return this.Models.Users.findAll({
      attributes: {include:[
        "id", "first_name","last_name",
        [
          Sequelize.literal("(SELECT concat(u.first_name,' ', u.last_name) FROM users u WHERE u.id = users.id)"),"userFulllName"
        ]
      ]},
      where: query,
      having:havingCondition,
      limit: data.limit,
      offset: data.length,
      // order:[['id','desc']]
    });
  };
}

module.exports = User;
