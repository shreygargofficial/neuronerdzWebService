const modelNeuronerdz=require('../model/modelNeuronerdz')
const validation=require('../utilities/validator')
const serviceNeuronerdz={};

serviceNeuronerdz.getAllBlogs=()=>{
    return modelNeuronerdz.getAllBlogs().then(bdata=>{
        if(bdata)
        return bdata;
        else{
            let err=new Error();
            err.message="No data found";
            err.status=404;
            throw err;
        }
    })
}

serviceNeuronerdz.getAllUsers=()=>{
    return modelNeuronerdz.getAllUsers().then(udata=>{
        if(udata)
        return udata;
        else{
            let err=new Error();
            err.message="No data found";
            err.status=404;
            throw err;
        }
    })
}



serviceNeuronerdz.getAllBlogsByLimit=(limit)=>{
    return modelNeuronerdz.getAllBlogsByLimit(limit).then(bdata=>{
        if(bdata)
        return bdata;
        else{
            let err=new Error();
            err.message="No data found";
            err.status=404;
            throw err;
        }
    })
}

serviceNeuronerdz.getBlogById=(blogId)=>{
    return modelNeuronerdz.getBlogById(blogId).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with Id "+blogId;
            err.status=404;
            throw err;
        }
    })
}

serviceNeuronerdz.getBlogByTitle=(blogTitle)=>{
    return modelNeuronerdz.getBlogByTitle(blogTitle).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with Title "+blogTitle;
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.getBlogsByLimit=(categoryMain,limit)=>{
    return modelNeuronerdz.getBlogsByLimit(categoryMain,limit).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with category "+categoryMain+" in limit "+limit;
            err.status=404;
            throw err;
        }
    })
}

serviceNeuronerdz.getBlogsByMainCategory=(categoryMain)=>{
    return modelNeuronerdz.getBlogsByMainCategory(categoryMain).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with category "+categoryMain;
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.getBlogsBySubCategory=(categorySub)=>{
    return modelNeuronerdz.getBlogsBySubCategory(categorySub).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with category "+categorySub;
            err.status=404;
            throw err;
        }
    })
}

serviceNeuronerdz.getBlogsByTagName=(TagName)=>{
    return modelNeuronerdz.getBlogsByTagName(TagName).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with tagName "+TagName;
            err.status=404;
            throw err;
        }
    })
}


serviceNeuronerdz.getBlogsByUserName=(userName)=>{
    return modelNeuronerdz.getBlogsByUserName(userName).then(blog=>{
        if(blog)
        return blog;
        else{
            let err=new Error();
            err.message="No blog found with username "+userName;
            err.status=404;
            throw err;
        }
    })

}
serviceNeuronerdz.getUserByUserName=(userName)=>{
    return modelNeuronerdz.getUserByUserName(userName).then(user=>{
        if(user)
        return user;
        else{
            let err=new Error();
            err.message="No user found with username "+userName;
            err.status=404;
            throw err;
        }
    })

}
serviceNeuronerdz.addBlog=(blog)=>{
    validation.addBlog(blog);
        return modelNeuronerdz.addBlog(blog).then(blogId=>{
            if(blogId)
            return blogId;
            else {
                let err=new Error();
                err.message="Can't add the blog";
                err.status=404;
                throw err;
            }
        })
}
serviceNeuronerdz.updateBlog=(blogId,blog)=>{
    validation.addBlog(blog);
        return modelNeuronerdz.updateBlog(blogId,blog).then(blogId=>{
            if(blogId)
            return blogId;
            else {
                let err=new Error();
                err.message="Can't update the blog";
                err.status=404;
                throw err;
            }
        })
}


serviceNeuronerdz.deleteBlog=(blogId)=>{
        return modelNeuronerdz.deleteBlog(blogId).then(blogId=>{
            if(blogId)
            return blogId;
            else {
                let err=new Error();
                err.message="Can't delete the blog";
                err.status=404;
                throw err;
            }
        })
}
serviceNeuronerdz.getAllCategories=()=>{
    return modelNeuronerdz.getAllCategories().then(categories=>{
        if(categories)
        return categories;
        else{
            let err=new Error();
            err.message="No categories found";
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.getAllTitles=()=>{
    return modelNeuronerdz.getAllTitles().then(titlesList=>{
        if(titlesList)
        return titlesList;
        else{
            let err=new Error();
            err.message="No titles found";
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.search=(searchTag)=>{
    return modelNeuronerdz.search(searchTag).then(searchResult=>{
        if(searchResult)
        return searchResult;
        else
        {
            let err=new Error();
            err.message="No blogs found with the tag "+searchTag;
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.addComment=(comment,blogId)=>{
    validation.validateComment(comment)
     return modelNeuronerdz.addComment(comment,blogId).then(cdata=>{
         if(cdata){
             return cdata;
         }
         else{
            let err=new Error();
            err.message="Cannot add comment with blog id "+blogId;
            err.status=404;
            throw err;
         }
     })
}

serviceNeuronerdz.replyComment=(reply,commentId)=>{
    validation.validateCommentReply(reply)
     return modelNeuronerdz.replyComment(reply,commentId).then(cdata=>{
         if(cdata){
             return cdata;
         }
         else{
            let err=new Error();
            err.message="Cannot reply to comment with comment id "+commentId;
            err.status=404;
            throw err;
         }
     })
}
serviceNeuronerdz.getAllComments=(blogId)=>{
    return modelNeuronerdz.getAllComments(blogId).then(cdata=>{
        if(cdata)
        return cdata;
        else
        {
            let err=new Error();
            err.message="No comment for this blog write a comment now";
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.changeCommentStatus=(commentId,commentStatus)=>{
    return modelNeuronerdz.changeCommentStatus(commentId,commentStatus).then(cdata=>{
        if(cdata)
        return cdata;
        else{
            let err=new Error();
            err.message="Can't change the status of comment";
            err.status=404;
            throw err;
        }
    })
}
serviceNeuronerdz.loginUser=(userBody)=>{
    return modelNeuronerdz.loginUser(userBody).then(userSuccess=>{
        if(userSuccess){
            return userSuccess;
        }
        else{
            let err=new Error()
            err.message="Invalid Credentials";
            err.status=200;
            throw err;
        }
    })
}
serviceNeuronerdz.changeUserPermission=(userName,userPermission)=>{
    return modelNeuronerdz.changeUserPermission(userName,userPermission).then(userData=>{
        if(userData){
            return userData;
        }
        else{
            let err=new Error()
            err.message="Can't change the permission";
            err.status=400;
            throw err;
        }
    })
}

serviceNeuronerdz.addUser=(user)=>{
    validation.addUser(user)
    return modelNeuronerdz.addUser(user).then(userData=>{
        if(userData){
            return userData;
        }
        else{
            let err=new Error()
            err.message="Can't Add User";
            err.status=400;
            throw err;  
        }
    })
}
module.exports=serviceNeuronerdz;