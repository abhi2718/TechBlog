const url = "https://myblog-62668-default-rtdb.firebaseio.com/blogs.json";
export const fetchBlogs = async () => {
  let data = [];
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {}
  return data;
};
