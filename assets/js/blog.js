// const blogPostUnstring = JSON.parse(localStorage.getItem('blogPostString'));
document.addEventListener('DOMContentLoaded', function(){
    const blogPostString = localStorage.getItem('blogPost');
    if (blogPostString) {
        const blogPost = JSON.parse(blogPostString);
        console.log('inputs: ', blogPost);
        createBlogPost(blogPost);
    }


function createBlogPost(blogPost) {
    const blogContainer = document.querySelector('.blog-container');
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    blogCard.innerHTML = `
    <h3>${blogPost.title}</h3>
    <p>${blogPost.content}</p>
    <h5>Posted by: ${blogPost.username}</h5>
    `;
    
    blogContainer.appendChild(blogCard);
}
});

document.querySelector('#back-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
})

    