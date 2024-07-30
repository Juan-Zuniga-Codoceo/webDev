document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('postId');

  if (postId) {
    fetch(`https://public-api.wordpress.com/wp/v2/sites/slake167.wordpress.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        const postContent = document.getElementById('post-content');
        postContent.innerHTML = `
          <h1 class="mb-4">${post.title.rendered}</h1>
          <div>${post.content.rendered}</div>
        `;
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  } else {
    const postContent = document.getElementById('post-content');
    postContent.innerHTML = '<p>Error: No se encontró el post.</p>';
  }
});
