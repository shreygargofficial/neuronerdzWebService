
const blog=class blogClass {

    constructor(obj){
        
        this.blogBody = obj.blogBody;
        this.blogCategory=obj.blogCategory;
        this.blogTagNames=obj.blogTagNames;
        this.blogTitle= obj.blogTitle;
        this.blogAuthor= obj.blogAuthor;
        this.blogDate=new Date().toUTCString();
        this.blogImage=obj.blogImage;
        this.blogStatus="draft"
    }

}
module.exports=blog;