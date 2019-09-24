
const validatation = {};

validatation.addBlog = (blog) => {
    if (!blog.blogBody) {
        let err = new Error();
        err.message = "blog field is required";
        err.status = 300;
        throw err;
    }
    else if(!blog.blogCategory){
        let err = new Error();
        err.message = "Please add category";
        err.status = 300;
        throw err;

    }
    else if(!blog.blogTitle){
        let err = new Error();
        err.message = "Title is required";
        err.status = 300;
        throw err;
    }
    else if(!blog.blogTagNames){
        let err = new Error();
        err.message = "Tag Name is required";
        err.status = 300;
        throw err;
    }
    
    else if(blog.blogBody.length<10)
    {
        let err = new Error();
        err.message = "blog description should be more than 9 characters";
        err.status = 300;
        throw err;
    }
    else if(blog.blogTitle.length<10)
    {
        let err = new Error();
        err.message = "blog title should be more than 9 characters";
        err.status = 300;
        throw err;
    }
    else if(!blog.blogTitle.match(/^[a-zA-Z]+([\s][a-zA-Z]+)*$/)){
        let err = new Error();
        err.message = "blog title should not contain special character or numbers";
        err.status = 300;
        throw err;
    }

}

validatation.validateComment=(comment)=>{

    if(!comment.emailId)
    {
        let err = new Error();
        err.message = "Email field should not be empty";
        err.status = 300;
        throw err;
    }
    if(!comment.emailId.match(/[a-zA-Z._0-9]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}/))
    {
        let err = new Error();
        err.message = "Email field should be correct";
        err.status = 300;
        throw err;
    }
    if(!comment.userMessage)
    {
        let err = new Error();
        err.message = "Comment field should not be empty";
        err.status = 300;
        throw err;
    }
    
}

validatation.validateCommentReply=(comment)=>{


    if(!comment.emailId)
    {
        let err = new Error();
        err.message = "Email field should not be empty";
        err.status = 300;
        throw err;
    }
    if(!comment.emailId.match(/[a-zA-Z._]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}/))
    {
        let err = new Error();
        err.message = "Comment field should be correct";
        err.status = 300;
        throw err;
    }
    if(!comment.userReply)
    {
        let err = new Error();
        err.message = "Reply field should not be empty";
        err.status = 300;
        throw err;
    }
    
}
validatation.addUser=(user)=>{
    if(!user.emailId){
        let err = new Error();
        err.message = "Email Id should not be empty";
        err.status = 300;
        throw err;
    }
    else if(!user.userName){
        let err = new Error();
        err.message = "UserName field should not be empty";
        err.status = 300;
        throw err;
    }
    else if(!user.userPhoneNumbers)
    {
        let err = new Error();
        err.message = "Phone number field should not be empty";
        err.status = 300;
        throw err;
    }
    else if(!user.name){
        let err = new Error();
        err.message = "Name field should not be empty";
        err.status = 300;
        throw err;
    }
    else if(!(user.userPassword.match(/[A-Z]/)&&user.userPassword.match(/[a-z]/)&&user.userPassword.match(/[0-9]/)&&user.userPassword.match(/[@!#$%^&*()]/)&&user.userPassword.length>7))
    {
        let err = new Error();
        err.message = "Password field should have uppercase, lower case, digit and a special charater and it should be of length 8 or more";
        err.status = 300;
        throw err;
    }
    else if(!user.emailId.match(/[a-zA-Z._0-9]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}/))
    {
        let err = new Error();
        err.message = "Email field should be correct";
        err.status = 300;
        throw err;
    }
}
module.exports=validatation;