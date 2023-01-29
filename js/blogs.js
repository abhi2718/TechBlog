const url = "https://myblog-62668-default-rtdb.firebaseio.com/blogs.json";

export const fetchBlogs = async () => {
  let data = [];
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {}
  return data;
};
export const fetchBlog = async (id) => {
  const url = `https://myblog-62668-default-rtdb.firebaseio.com/blogs/${id}.json`;
  let data;
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {}
  return data;
};

export const postNewBlogToDb = async (blog) => {
  let data;
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        urlToImage:blog.imageUrl,
        title: blog.title,
        description: blog.description
       })
    });
    data = await res.json();
  } catch (error) { }
  return data;
};
