import { blogArray, fetchBlogs } from "./blogs.js";

const createBlog = (blog) => {
  return `<div class="card blogCard" style="width: 18rem;" >
    <img src="${blog.urlToImage}" alt="blog-image">
    <div class="card-body card-content">
      <h5 class="card-title">${blog.title.substring(0, 40)}</h5>
      <p class="card-text max-lines">${blog.description}</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>`;
};

const blogContainer = document.createElement("div");
blogContainer.className = "blogContainer";
document.body.appendChild(blogContainer);

fetchBlogs().then((data) => {
  data.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.innerHTML = createBlog(blog);
    blogContainer.appendChild(blogDiv);
  });
});
