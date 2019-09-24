const schema = require('./schema');

const setup = {};

const blogSample = [
    {
        blogId: 1,
        blogBody: "this is the blog body",
        blogCategory: {
            main: "main",
            sub: "sub"
        },
        blogTagNames: ["tag1,tag2"],
        blogTitle: "I am title2",
        blogAuthor: "beingyourself",
        blogComments: [
            {
                commentId: 1,
                userID: 1,
                userName: "commetator1",
                userMessage: "acchaa hai",
                commentReply: [
                    {
                        userID: 2,
                        userName: "replyer",
                        userReply: "nahi yaar acha toh hai"
                    }
                ]
            }
        ],
        blogDate:new Date().toUTCString()
    }
]

const userSample = [{
    userId: 1,
    userName: "beingyourself",
    name: "goyal saab",
    userPhoneNumbers: [8871009875, 7305898410],
    emailId: "shrey@gmail.com",
    userPassword: "shreygarg",
    userPermission:"editor"
}]

setup.setupUserDb = () => {
    return schema.getUserSchema().then(model => {
        return model.create(userSample).then(data => {
            if (data)
                return data;
            else
                return null;
        })
    })
}

setup.setupBlogDb = () => {
    return schema.getBlogSchema().then(model => {
        return model.create(blogSample).then(data => {

            if (data)
                return data;
            else
                return null;
        })
    })

}
module.exports = setup;