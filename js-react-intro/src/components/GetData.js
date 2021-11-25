import React, { useState, useEffect } from "react";

const GetData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((result) => result.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <div>
      <h3>I get data</h3>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default GetData;
