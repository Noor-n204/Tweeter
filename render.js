const Renderer = function(){
    let htmlElement =""
    const renderPosts = function(posts){
       
        $("#posts").empty()
        for(let post of posts){
            htmlElement+=`<div data-id="${post.id}">${post.text}`
            for(let comment of post.comments){
                htmlElement+=`<div data-id="${comment.id}">${comment.text}</div>`
            }
        }
        htmlElement+=`</div>`
        $("#posts").append($(htmlElement))
    }


    return {
        renderPosts:renderPosts
    }
}

// $("#post").on("click",function(){
//     const renderer = Renderer()
//     renderer.renderPosts()
// })