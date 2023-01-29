import { fetchBlog } from "./blogs.js";

const id = window.location.search.split("?")[1];

const createBlog = (blog) => {
  return `<div">
      <img class="blog-image" src="${blog.urlToImage}" alt="blog-image">
      <div>
        <h6 class="title">${blog.title}</h6>
        <div class="center">
        <p class="description">${blog.description}</p>
        </div>
      </div>
    </div>`;
};

fetchBlog(id).then((data) => {
  const blogContainer = document.createElement("div");
  blogContainer.className = "blog";
  document.body.appendChild(blogContainer);
  const blogDiv = document.createElement("div");
  blogDiv.innerHTML = createBlog(data);
  blogContainer.appendChild(blogDiv);
});
