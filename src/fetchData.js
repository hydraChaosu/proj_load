import axios from "axios";
export const getPostsData = async (queryName, { pageNr, postsPerQuery }) => {
  console.log(postsPerQuery);
  const { data } = await axios.get(
    `https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts`,
    {
      params: {
        number: postsPerQuery,
        offset: postsPerQuery * pageNr,
      },
    }
  );
  return await data;
};
