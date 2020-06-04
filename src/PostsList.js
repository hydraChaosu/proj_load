import React, { useState, useEffect, useMemo } from "react";
import Button from "@material-ui/core/Button";

import { useQuery } from "react-query";
import { getPostsData } from "./fetchData";
import Post from "./Post";

const PostsList = () => {
  const postsPerQuery = 6;
  const [allPostsData, setAllPostsData] = useState([]);
  const [pageNr, setPageNr] = useState(0);
  const { data } = useQuery(["posts", { pageNr, postsPerQuery }], getPostsData);
  const { posts } = data;

  useEffect(() => {
    setAllPostsData(allPostsData.concat(posts));
  }, [data]);

  const allPosts = useMemo(() => {
    return allPostsData.map((element) => {
      return (
        <Post
          key={element.ID}
          authorData={element.author}
          title={element.title}
          content={element.content}
          date={element.date}
          modified={element.modified}
          url={element.URL}
          excerpt={element.excerpt}
          featured_image={element.featured_image}
        ></Post>
      );
    });
  }, [allPostsData]);
  console.log(allPosts);

  return (
    <>
      <div className="posts">{allPosts}</div>
      <div className="buttonContainer">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            setPageNr(pageNr + 1);
          }}
        >
          Load more
        </Button>
      </div>
    </>
  );
};

export default PostsList;
