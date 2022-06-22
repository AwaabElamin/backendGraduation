# backendGraduation
backend for final project of Maharishi (Book and Author MIS)
## Technology
   * node js
   * express
   * jwt
   * bycrypt
## requests and response
* url:- post /users
* body: {
    "username": String,
    "password": "String",
    "email": "String",
    "phone": "String",
    "role": "String",
    "address": "String"
        }
* response: {success: ok , data: userData}
        or  {succes:fail, message:"String"}

