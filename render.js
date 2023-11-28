const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){

            const postDiv = $(`<div class="post" id="${post.id}"></div>`)
            const postText = $(`<p class="post-text">${post.text}</p>`)
            const commentDIV=$(`<input type="text" placeholder="What's on your mind?" class="comment-input"><button class="comment-button">Comment</button>`)

            postDiv.append(postText);
            postDiv.append(commentDIV)

            const commentsList = $('<ul class="comments-list"></ul>')
            for(let comment of post.comments){
                const commentItem = $(`<li class="comment" id="${comment.id}">${comment.text}<div class="delete-comment">X</div></li>`);
                commentsList.append(commentItem);
            }
            postDiv.append(commentsList);
            postDiv.append($(`<button class="delete-post">Delete Post</button>`))
            $('#posts').append(postDiv);
            
        }
    }
    return {
        renderPosts:renderPosts
    }
}





