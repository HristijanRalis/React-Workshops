import React from "react";
import styles from "./BlogPost.module.scss";

interface BlogPost {
  id: number;
  title: string;
  body: string;
}

export const Post = ({ id, title, body }: BlogPost) => {
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
