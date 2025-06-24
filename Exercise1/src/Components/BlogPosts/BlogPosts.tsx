import React, { useEffect, useState } from "react";
import styles from "./BlogPosts.module.scss";
import { resolveObjectURL } from "buffer";
import { Post } from "../BlogPost/BlogPost";
interface BlogPost {
  id: number;
  title: string;
  body: string;
}
export const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          " http://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        console.log(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={styles.blogPostContainer}>
      return (
      <div className={styles.blogPostContainer}>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      );
    </div>
  );
};
