"use server";

import getPosts from "../lib/get-posts";
import styles from "../scss/postList.module.scss";

interface Props {}

export async function PostList({}: Props) {
  const posts = await getPosts();

  return (
    <div className={styles.postList}>
      {posts.map((post, index) => {
        return (
          <div className={"post"} key={index}>
            {post.slug}

            <div className={"title"}>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
}
