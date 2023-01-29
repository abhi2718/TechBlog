// https://in.mashable.com/tech/
const url = "https://myblog-62668-default-rtdb.firebaseio.com/blogs.json";
export const fetchBlogs = async () => {
  let data = [];
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {}
  return data;
};

export const poastNewBlogToDb = async (blog) => {
  let data;
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        urlToImage:blog.imageUrl,
         title:blog.title,
       })
    });
    data = await res.json();
  } catch (error) { }
  return data;
};
