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

export const getSwData = async (queryName) => {
  let { data: firstData } = await axios.get(`https://swapi.dev/api/people/`);
  let fullData = firstData.results;
  let next = firstData.next;
  do {
    const { data } = await axios.get(next);
    next = data.next;
    fullData = fullData.concat(data.results);
  } while (next !== null);
  return await fullData;
};
