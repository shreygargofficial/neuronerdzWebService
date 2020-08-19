const user=class userclass{
   

constructor(obj){
    this.userName=obj.userName,
    this.name=obj.name,
    this.userPhoneNumbers=obj.userPhoneNumbers,
    this.emailId=obj.emailId,
    this.userPassword=obj.userPassword,
    obj.userPermission?this.userPermission=obj.userPermission: this.userPermission="editor"
}
    
}

module.exports=user;