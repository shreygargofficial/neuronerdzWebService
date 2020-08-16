const comment=class Comment{
    constructor(obj){
        this.emailId=obj.emailId;
        this.userMessage=obj.userMessage;
        this.commentStatus='na',
        this.commentDate=new Date().toUTCString();
        this.commentReply=[];
    }
}

module.exports=comment;