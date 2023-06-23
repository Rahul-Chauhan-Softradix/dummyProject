const auth = require('./auth/index.js')
const user = require('./user/index')
const order = require('./order/index.js')
const chatGpt = require('./chatGpt/index')
const product  = require('./products/index.js')
 class Routes{
    constructor(router,db){
        this.router = router;
        this.DatabaseConnect = db;
    }

    async routesRegistration(){
        this.db = await this.DatabaseConnect.getDB();

        
        this.auth = new auth(this.router,this.db);
        await this.auth.routes()


        this.order = new order(this.router,this.db)
        await this.order.routes()
        
        this.user = new user(this.router,this.db);
        await  this.user.routes()

        this.user = new chatGpt(this.router,this.db);
        await this.user.routes()

        this.product = new product(this.router,this.db);
        await this.product.routes()

    }
}

module.exports = Routes