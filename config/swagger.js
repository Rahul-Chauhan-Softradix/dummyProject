const swaggerJsdoc = require('swagger-jsdoc')


const options = {
    definition:{
        opneapi:'3.0.0',
        info:{
          description: "Dummy_Project Api's.",
            title:"Dummy Project",
            version:'1.0.0'
        },
        "schemes": [
          "http",
          "https"
      ],
      host:`localhost:${process.env.PORT}`,
    },
    apis:[]
    
}

// '../src/user/index'


const swaggerSpec = swaggerJsdoc(options)
swaggerSpec.tags = ["admin"]

swaggerSpec.paths = {
    "/auth/signup": {
        "post": {
          "tags": ["auth"],
          "summary": "APi for user registration",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "first_name": {
                    "type": "string"
                  },
                  "last_name": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "phone_number": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          },
          "security": [
            {
              "authorization": []
            }
          ]
        }
      },
      "/auth/login": {
        "post": {
          "tags": ["auth"],
          "summary": "APi for login",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "email": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      },
      "/auth/user/forgot-password": {
        "put": {
          "tags": ["auth"],
          "summary": "APi for forgot password",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "email": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      },
      "/auth/reset-password/{id}/{token}": {
        "post": {
          "tags": ["auth"],
          "summary": "APi for reset password",
          "parameters": [
            {
                "name": "id",
                "in": "path",
                "type": "string",
                "required": true
            },
            {
                "name": "token",
                "in": "path",
                "type": "string",
                "required": true
            },
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      },
      "/users/list": {
        "post": {
          "tags": ["user"],
          "summary": "APi for get user list/pag",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "length": {
                    "type": "string"
                  },
                  "limit": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      },
      "/add/product": {
        "post": {
          "tags": ["Product"],
          "summary": "APi for create a product",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "product_name": {
                    "type": "string",
                    "default":'shoe'
                  },
                  "price":{
                    "type":"number",
                    "default":100
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      },
      "/upload/product-images": {
        "post": {
          "tags": ["Product"],
          "summary": "Upload product images",
          "parameters": [
            {
              name: "product_id",
              in: "formData",
              description: "The file to upload",
              required: false,
              type: "number",
            },
            {
              name: "files",
              in: "formData",
              description: "The file to upload",
              required: false,
              type: "file",
            },
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      },
      "/copy/product/{product_id}":{
      "get":{
        "tags":["Product"],
        "summary":"Copy product by id",
        "description":"send product id.",
        "parameters":[
        {  
          name:'product_id',
          in:"path",
          type:"number",
          required:true
        }
        ],
        "responses": {
          "200": {
            "description": "ok"
          }
        }
      }
      },
      "/order/place": {
        "post": {
          "tags": ["order"],
          "summary": "APi for create an order",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "type": "object",
              "schema": {
                "properties": {
                  "user_id": {
                    "type": "integer",
                    "default":1
                  },
                  "product_id": {
                    "type": "number",
                    "default":1
                  },
                  "quantity": {
                    "type": "integer",
                    "default":1
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "ok"
            }
          }
        }
      }
}

swaggerSpec.securityDefinitions = {
  "authorization": {
    "type": "apiKey",
    "name": "authorization",
    "in": "header"
  }
}


module.exports = swaggerSpec