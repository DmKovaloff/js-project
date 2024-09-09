let post = JSON.parse(localStorage.getItem('post'));
let postDetails = post;
console.log(postDetails)


let postContainer = document.getElementById('postDetails');

const postId = document.createElement('h3')
postId.innerText = `Post id: ${postDetails.id}`
const titlePost = document.createElement('p')
titlePost.innerText = `Title: ${postDetails.title}`
const bodyPost = document.createElement('p')
bodyPost.innerText = `Body: ${postDetails.body}`
const userId = document.createElement('h4')
userId.innerText = `User ID: ${postDetails.userId}`
postContainer.append(postId, titlePost, bodyPost, userId)

let commentsDiv = document.getElementById('comments');
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postDetails.id}`)
    .then(response => response.json())
    .then(value => {
        let comments = value;
        for (const comment of comments) {
            console.log(comment)
            let commentDiv = document.createElement('div')
            let nameComment = document.createElement('h2')
            nameComment.innerText = `${comment.name}`
            let commentBody = document.createElement('p')
            commentBody.innerText =`Comment: ${comment.body}`
            let commentDetails = document.createElement('p');
            commentDetails.innerText = `E-mail: ${comment.email}`
            let idInfo = document.createElement('p')
            idInfo.innerText = `post ID: ${comment.postId}; comment ID: ${comment.id}`
            commentDiv.append(nameComment, commentBody, commentDetails, idInfo)
            commentsDiv.appendChild(commentDiv);
        }
    })
