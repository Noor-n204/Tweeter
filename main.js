
const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

//add tweet
const post=function(){
    const newPost=$("#input").val()
    tweeter.addPost(newPost)
    renderer.renderPosts(tweeter.getPosts())
}


//remove tweet
$("#posts").on("click" ,".delete-post",function(){
        const postID=$(this).closest(".post").attr("id")
        tweeter.removePost(postID)
        renderer.renderPosts(tweeter.getPosts())
})


//add comment
$("#posts").on("click",".comment-button", function(){
    const newComment= $(this).closest(".post").find(".comment-input").val()
    const postID=$(this).closest(".post").attr("id")
    tweeter.addComment(newComment,postID)
    renderer.renderPosts(tweeter.getPosts())
})



//remove comment
$("#posts").on("click",".delete-comment",function(){
    const postID=$(this).closest(".post").attr("id")
    const commentID=$(this).closest(".comment").attr("id")
    tweeter.removeComment(postID,commentID)
    renderer.renderPosts(tweeter.getPosts())
})





