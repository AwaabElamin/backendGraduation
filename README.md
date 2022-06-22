# backendGraduation
backend for final project of Maharishi (Book and Author MIS)
## Technology
   * node js
   * express
   * jwt
   * bycrypt
## specification
### busniess rules
##### Admin user
* Create/Read/Delete/Update books.
* Create/Read/Delete/Update author.
##### Regular user
* List books
* Borrow books
* Return books
* Search a book(by author or by book details)
* Add book to cart
##### Special functions
* Penalty for late return
### collection 
* users: 
        <br>username: {type: String },
        <br>password: {type: String},
        <br>email:{type:String,unique:true},
        <br>phone:{type:String},
        <br>role: {type: String},
        <br>address: {type:String} 
* books:
        <br>title: {type: String},
        <br>quantity: {type: number},
        <br>author_name:{type:String},
        <br>price:{type:number}
* borrows:
        <br>book:{
            <br>id:{type:String},
            <br>name:{type:String},
            <br>price:{type:String}
        <br>},
        <br>user:{
                <br>id:{type:String},
                <br>name:{type:String},
                <br>email:{type:String}
        <br>},
        <br>borrowDate:{type:String},
        <br>borrowReturn:{type:String},
        <br>actualReturnDate:{type:String},
        <br>penalty:{type:String} //$10 for each day late

## requests and response
### create new user
* url:- post /users
* header:{
      <br>authorization: Bearer token-value  
  }
* body: {
    "username": String,
    "password": "String",
    "email": "String",
    "phone": "String",
    "role": "String",
    "address": "String"
        }
* response: {success: true , data: userData}
        or  {success: false, message:"String"}
### login
* url:- post /login
* body: {
    <br>"username": String,
    <br>"password": "String"
     <br>}
* response: {
        <br>success: true , 
        <br>token: userToken, 
        <br>role: userRole
        <br>}
        <br>or  
        {success: false, message:"String"}

