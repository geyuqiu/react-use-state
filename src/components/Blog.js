import { useState } from "react";

export default function Blog({ blogData }) {
  const [currentPostId, setCurrentPostId] = useState(1);
  const currentPost = blogData
    .filter((post) => post.id === currentPostId)
    .pop();

  return (
    <>
      <div style={{ border: "1px solid blue" }}>
        Current Post: {currentPostId}
        <br />
        <em>{currentPost.text}</em>
      </div>
      {blogData.map((post) => (
        <article key={post.id}>
          <header>{post.title}</header>
          <p>{post.teaser}</p>
          <a href={"#" + post.id} onClick={() => setCurrentPostId(post.id)}>
            See more
          </a>
        </article>
      ))}
    </>
  );
}
