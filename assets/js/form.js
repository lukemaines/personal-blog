

document.querySelector('#submit-button').addEventListener('click', function(submit) {
    submit.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('input[name="content"]').value;
    const blogPost = {username, title, content};
    const blogPostString = JSON.stringify(blogPost)
    localStorage.setItem('blogPost', blogPostString);
    console.log(blogPostString)
    window.location.href = 'blog.html';
});

