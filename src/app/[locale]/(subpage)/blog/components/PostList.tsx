"use server";

import { PostCard } from "@/app/[locale]/(subpage)/blog/components/PostCard";
import getPosts from "../lib/get-posts";
import styles from "../scss/blog.module.scss";

interface Props {}

export async function PostList({}: Props) {
  const posts = await getPosts();

  return (
    <div className={styles.postList}>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}
