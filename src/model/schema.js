const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

    blogId: {type:Number,unique:true},
    blogBody: String,
    blogCategory: {
        main: [String],
        sub:[String]
    },
    blogTagNames: [String],
    blogUrl:String,
    blogTitle:{type:String,unique:true},
    blogAuthor: String,
    blogStatus:String,
    blogComments: [
        {
            commentId: Number,
            emailId: String,
            commentDate:String,
            userMessage: String,
            commentStatus:String,
            commentReply: [
                {
                    emailId: String,
                    userReply: String
                }
            ]
        }
    ],
    blogDate:String,
    blogImage:String
    
});

const userSchema=new mongoose.Schema({
    userId:{type:Number,unique:true},
    userName:{type:String,unique:true},
    name:String,
    userPhoneNumbers:[Number],
    emailId:{type:String,unique:true},
    userPassword:String,
    userPermission:String
})
const categorySchema=new mongoose.Schema({
    category:{type:String,unique:true}
})
const schema={};

schema.getBlogSchema=()=>{
   return mongoose.connect('mongodb://localhost:27017/neuronerdz', {useNewUrlParser: true}).then(mongoose=>{
        return mongoose.model("blogging",blogSchema,"blog");
    });
}
schema.getUserSchema=()=>{
    return mongoose.connect('mongodb://localhost:27017/neuronerdz', {useNewUrlParser: true}).then(mongoose=>{
         return mongoose.model("user",userSchema,"user");
     });
 }
 schema.getCategorySchema=()=>{
    return mongoose.connect('mongodb://localhost:27017/neuronerdz', {useNewUrlParser: true}).then(mongoose=>{
         return mongoose.model("category",categorySchema,"category");
     });
 }
 module.exports=schema;