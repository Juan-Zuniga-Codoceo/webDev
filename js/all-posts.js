document.addEventListener("DOMContentLoaded", () => {
    fetch('https://public-api.wordpress.com/wp/v2/sites/slake167.wordpress.com/posts?_embed')
      .then(response => response.json())
      .then(posts => {
        const postsListContainer = document.getElementById('posts-list');
        posts.forEach(post => {
          let featuredImage = 'images/default-image.jpg';
          if (post._embedded && post._embedded['wp:featuredmedia']) {
            featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
          } else {
            const imgTag = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
            if (imgTag) {
              featuredImage = imgTag[1];
            }
          }
  
          const excerpt = post.excerpt.rendered.split(' ').slice(0, 20).join(' ') + '...';
          const postElement = document.createElement('div');
          postElement.className = 'col-md-4 mb-4';
          postElement.innerHTML = `
            <div class="card h-100">
              <img src="${featuredImage}" class="card-img-top" alt="${post.title.rendered}">
              <div class="card-body">
                <h5 class="card-title">${post.title.rendered}</h5>
                <p class="card-text">${excerpt}</p>
                <a href="post.html?postId=${post.id}" class="btn btn-primary">Leer Más</a>
              </div>
            </div>
          `;
          postsListContainer.appendChild(postElement);
        });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  });
  