import React from "react";

interface BlogPost {
  id: number;
  title: string;
  body: string;
}

export const Post = ({ id, title, body }: BlogPost) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
