const comment=class Comment{
    constructor(obj){
        this.emailId=obj.emailId;
        this.userMessage=obj.userMessage;
        this.commentStatus='NA'
        this.commentReply=[];
    }
}

module.exports=comment;