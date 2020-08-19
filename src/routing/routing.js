const express = require('express');
const route = express.Router();
const setup = require('../model/dbSetup')
const serviceNeuronerdz = require('../service/serviceNeuronerdz');
const blogClass = require('../utilities/blogClass');
const CommentClass = require('../utilities/CommentClass')
const CommentReply = require('../utilities//CommentReply')
const userClass = require('../utilities/userClass')

route.get('/', (req, res, next) => {
    res.json({ "message": "Hello Shrey it is working " });
    next()
})

route.get('/setupBlog', (req, res, next) => {
    setup.setupBlogDb().then(data => {
        if (data)
            res.json({ "message": data });
        else {
            res.json({ "message": "There is a problem" });
        }
    }).catch(error => {
        next(error)
    })
})

route.get('/setupUser', (req, res, next) => {
    setup.setupUserDb().then(data => {
        if (data)
            res.json({ "message": data });
        else {
            res.json({ "message": "There is a problem" });
        }
    }).catch(error => {
        next(error)
    })
})

route.get('/getAllBlogs', (req, res, next) => {
    serviceNeuronerdz.getAllBlogs().then(bdata => {
        res.json({ data: bdata })
    }).catch(error => {
        next(error)
    })

})
route.get('/getAllUsers', (req, res, next) => {
    serviceNeuronerdz.getAllUsers().then(udata => {
        res.json({ data: udata })
    }).catch(error => {
        next(error)
    })

})
route.get('/getAllBlogsByLimit/:limit', (req, res, next) => {
    serviceNeuronerdz.getAllBlogsByLimit(req.params.limit).then(bdata => {
        res.json({ data: bdata })
    }).catch(error => {
        next(error)
    })

})

route.get('/getBlogById/:blogId', (req, res, next) => {
    serviceNeuronerdz.getBlogById(req.params.blogId).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})
route.get('/getBlogByTitle/:blogTitle', (req, res, next) => {
    console.log(req.params+"dss","dfd"+req.query);
    
    serviceNeuronerdz.getBlogByTitle(req.params.blogTitle).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})
route.get('/getBlogByUrl/:blogUrl', (req, res, next) => {
    serviceNeuronerdz.getBlogByUrl(req.params.blogUrl).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})

route.get('/getBlogsByLimit/:categoryMain/:limit', (req, res, next) => {
    serviceNeuronerdz.getBlogsByLimit(req.params.categoryMain, req.params.limit).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})

route.get('/getBlogsByMainCategory/:categoryMain', (req, res, next) => {
    serviceNeuronerdz.getBlogsByMainCategory(req.params.categoryMain).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})

route.get('/getBlogsBySubCategory/:categorySub', (req, res, next) => {
    serviceNeuronerdz.getBlogsBySubCategory(req.params.categorySub).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})


route.get('/getBlogsByTagName/:TagName', (req, res, next) => {
    serviceNeuronerdz.getBlogsByTagName(req.params.TagName).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})

route.get('/getBlogsByUserName/:userName', (req, res, next) => {
    serviceNeuronerdz.getBlogsByUserName(req.params.userName).then(blog => {
        res.json({ data: blog })
    }).catch(error => {
        next(error)
    })
})


route.get('/getUserByUserName/:userName', (req, res, next) => {
    serviceNeuronerdz.getUserByUserName(req.params.userName).then(user => {
        res.json({ data: user })
    }).catch(error => {
        next(error)
    })
})

route.post('/addBlog', (req, res, next) => {
    let bc = new blogClass(req.body);
    serviceNeuronerdz.addBlog(bc).then(blogId => {
        res.json({ "message": "Your Blog is added with blogId " + blogId })
    }).catch(error => {
        next(error)
    })
})
route.put('/updateBlog/:blogId', (req, res, next) => {
    let bc = new blogClass(req.body);
    serviceNeuronerdz.updateBlog(req.params.blogId, bc).then(blogId => {
        res.json({ "message": "Your Blog is updated with blogId " + blogId })
    }).catch(error => {
        next(error)
    })
})

route.delete('/deleteBlog/:blogId', (req, res, next) => {

    serviceNeuronerdz.deleteBlog(req.params.blogId).then(blogId => {
        res.json({ "message": "Your Blog is deleted with blogId " + blogId })
    }).catch(error => {
        next(error)
    })
})
route.delete('/deleteCategory/:category', (req, res, next) => {

    serviceNeuronerdz.deleteCategory(req.params.category).then(category => {
        res.json({ "message": "Your category is deleted " + category })
    }).catch(error => {
        next(error)
    })
})

route.delete('/deleteUser/:userName', (req, res, next) => {
    serviceNeuronerdz.deleteUser(req.params.userName).then(userName => {
        res.json({ "message": "User is deleted with userName " + userName })
    }).catch(error => {
        next(error)
    })
})

route.put('/updateUser/:userName', (req, res, next) => {
    serviceNeuronerdz.updateUser(req.params.userName,req.body).then(udata => {
        res.json({data:udata })
    }).catch(error => {
        next(error)
    })
})

route.get('/getAllCategory', (req, res, next) => {

    serviceNeuronerdz.getAllCategory().then(categories => {
        res.json({ "data": categories })
    }).catch(error => {
        next(error)
    })
})



route.get('/getAllCategories', (req, res, next) => {

    serviceNeuronerdz.getAllCategories().then(categories => {
        res.json({ "data": categories })
    }).catch(error => {
        next(error)
    })
})
route.get('/getAllTitles', (req, res, next) => {

    serviceNeuronerdz.getAllTitles().then(titles => {
        res.json({ "data": titles })
    }).catch(error => {
        next(error)
    })
})

route.get('/search/:searchTag', (req, res, next) => {

    serviceNeuronerdz.search(req.params.searchTag).then(searchResult => {
        res.json({ "data": searchResult })
    }).catch(error => {
        next(error)
    })
})

route.put('/addComment/:blogId', (req, res, next) => {
    let cc = new CommentClass(req.body)
    serviceNeuronerdz.addComment(cc, req.params.blogId).then(cdata => {
        res.json({ "data": "Comment added with blogid " + cdata })
    }).catch(error => {
        next(error)
    })
})

route.put('/replyComment/:commentId', (req, res, next) => {
    let rc = new CommentReply(req.body)
    console.log(rc);

    serviceNeuronerdz.replyComment(rc, req.params.commentId).then(cdata => {
        res.json({ "data": "Reply added with commentId " + cdata })
    }).catch(error => {
        next(error)
    })
})
route.get('/getAllComments/:blogId', (req, res, next) => {
    serviceNeuronerdz.getAllComments(req.params.blogId).then(cdata => {
        res.json({ "data": cdata })
    }).catch(error => {
        next(error)
    })
})
route.get('/getAllTheComments' ,(req, res, next) => {
    serviceNeuronerdz.getAllTheComments().then(cdata => {
        res.json({ "data": cdata })
    }).catch(error => {
        next(error)
    })
})
route.put('/changeCommentStatus/:commentId/:commentStatus', (req, res, next) => {
    serviceNeuronerdz.changeCommentStatus(req.params.commentId, req.params.commentStatus).then(cdata => {
        res.json({ "data": "Comment Status has changed to " + req.params.commentStatus })
    }).catch(error => {
        next(error)
    })
})
route.post('/loginUser', (req, res, next) => {
    serviceNeuronerdz.loginUser(req.body).then(cdata => {

        res.json({ "data": "Successfully login" })
    }).catch(error => {
        next(error)
    })
})

route.put('/changeUserPermission/:userName/:userPermission', (req, res, next) => {
    serviceNeuronerdz.changeUserPermission(req.params.userName, req.params.userPermission).then(userData => {
        res.json({ "data": "User " + userData + " is granted with permission " + req.params.userPermission })
    }).catch(error => {
        next(error)
    })
})

route.put('/changeBlogStatus/:blogId/:blogStatus', (req, res, next) => {
    serviceNeuronerdz.changeBlogStatus(req.params.blogId, req.params.blogStatus).then(blogId => {
        res.json({ "data": "Blog " + blogId + " is now " + req.params.blogStatus })
    }).catch(error => {
        next(error)
    })
})

route.post('/addUser', (req, res, next) => {
    let user = new userClass(req.body)
    serviceNeuronerdz.addUser(user).then(userData => {
        res.json({ "data": "Successfully added with userName " + userData })
    }).catch(error => {
        next(error)
    })
})


route.post('/addCategory', (req, res, next) => {

    serviceNeuronerdz.addCategory(req.body).then(category => {
        res.json({ "data": "Successfully added category " + category })
    }).catch(error => {
        next(error)
    })
})



module.exports = route;