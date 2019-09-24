const fs=require('fs');

const errorLogger=(err,req,res,next)=>{
    fs.appendFile('ErrorLogger.txt',err.stack+new Date().toTimeString(),error=>{
        if(error)
        console.log("Cannot write file"+error)
    })
    if(err.status)
    res.status(err.status);
    else
    res.status(500);
    res.json({"message":err.message})
    next();
}
module.exports=errorLogger;