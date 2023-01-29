import {fetchBlogs } from "./blogs.js";

const createBlog = (blog) => {
  return `<div class="card blogCard" style="width: 18rem;" >
    <img src="${blog.urlToImage}" alt="blog-image">
    <div class="card-body card-content">
      <p class="card-text ">${blog.title}</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>`;
};

const blogContainer = document.createElement("div");
blogContainer.className = "blogContainer";
document.body.appendChild(blogContainer);

fetchBlogs().then((data) => {
  for (const property in data) {
    const blogDiv = document.createElement("div");
    blogDiv.innerHTML = createBlog(data[property]);
    blogContainer.appendChild(blogDiv);
  }
});
