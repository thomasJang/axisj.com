import getPosts from "@/lib/get-posts";
import { PostBody } from "@/mdx/post-body";
import styles from "./page.module.css";
import printDate from "@/utils/printDate";
import { getCurrentLocale } from "@/locales/server";
import Navigation from "@/components/post/navigation";
import * as React from "react";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

async function getData({ slug }: { slug: string }) {
  const posts = await getPosts();
  const postIndex = posts.findIndex((p) => p?.slug === slug);

  if (postIndex === -1) {
    throw new Error(
      `${slug} not found in posts. Did you forget to rename the file?`
    );
  }

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    post: posts[postIndex],
  };
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const currentLocale = getCurrentLocale();
  const { previous, next, post } = await getData(params); // return <Post post={post} previous={previous} next={next} />;
  return (
    <div className={styles.article}>
      <span className={styles.date}>{printDate(post.date, currentLocale)}</span>
      <h1 className={styles.title}>{post.title}</h1>
      {post.subtitle && <h2 className={styles.subtitle}>{post.subtitle}</h2>}
      <div className={styles.author}>
        Posted by <b>{post.writer}</b>
      </div>
      <div className={styles.body}>
        <PostBody>{post.body}</PostBody>
      </div>
      <Navigation previous={previous} next={next} />
    </div>
  );
}
