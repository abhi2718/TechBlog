const blogArray = [
  {
    id: "0",
    title: "Blog Title",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/815/622/original/software-development-programming-language-coding-3d-isometric-laptop-computer-with-digital-application-isolated-on-white-background-design-vector.jpg",
    descruption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: "1",
        title: "Blog Title",
        image:
          "https://static.vecteezy.com/system/resources/previews/004/815/622/original/software-development-programming-language-coding-3d-isometric-laptop-computer-with-digital-application-isolated-on-white-background-design-vector.jpg",
        descruption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: "2",
        title: "Blog Title",
        image:
          "https://static.vecteezy.com/system/resources/previews/004/815/622/original/software-development-programming-language-coding-3d-isometric-laptop-computer-with-digital-application-isolated-on-white-background-design-vector.jpg",
        descruption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: "3",
        title: "Blog Title",
        image:
          "https://static.vecteezy.com/system/resources/previews/004/815/622/original/software-development-programming-language-coding-3d-isometric-laptop-computer-with-digital-application-isolated-on-white-background-design-vector.jpg",
        descruption: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
];
const createBlog = (blog) => {
  return `<div class="card blogCard" style="width: 18rem;" >
    <img src="${blog.image}" alt="blog-image">
    <div class="card-body">
      <h5 class="card-title">${blog.title}</h5>
      <p class="card-text">${blog.descruption}</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>`;
};

const blogContainer = document.createElement("div");
blogContainer.className = "blogContainer";
document.body.appendChild(blogContainer);

blogArray.forEach(blog => {
  const blogDiv = document.createElement("div");
  blogDiv.innerHTML = createBlog(blog);
  blogContainer.appendChild(blogDiv);
})
