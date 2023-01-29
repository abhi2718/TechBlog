import {fetchBlogs,postNewBlogToDb } from "./blogs.js";
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        createNewBlog(event)
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
const createBlog = (blog,id) => {
  return `<div class="card blogCard" style="width: 18rem;" >
    <img src="${blog.urlToImage}" alt="blog-image">
    <div class="card-body card-content">
      <p class="card-text ">${blog.title}</p>
      <a href="./screens/readBlog.html?${id}" class="btn btn-primary">Read More</a>
    </div>
  </div>`;
};

const blogContainer = document.createElement("div");
blogContainer.className = "blogContainer";
document.body.appendChild(blogContainer);

fetchBlogs().then((data) => {
  for (const property in data) {
    const blogDiv = document.createElement("div");
    blogDiv.innerHTML = createBlog(data[property],property);
    blogContainer.appendChild(blogDiv);
  }
});
const createNewBlog = async(e) => {
  e.preventDefault();
  e.stopPropagation();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  await postNewBlogToDb(formProps);
  window.location.reload();
}




