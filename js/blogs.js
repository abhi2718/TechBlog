export const blogArray = [];

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2022-12-28&sortBy=publishedAt&apiKey=a2d598d25f154a6792aba6c25bb25b0e";
export const fetchBlogs = async () => {
  let data;
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {}
  return data.articles.slice(0, 10);
};
