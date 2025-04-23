"use server";

import dayjs from "dayjs";
import { Post } from "../lib/types";
import styles from "../scss/blog.module.scss";

interface Props {
  post: Post;
}

export async function PostCard({ post }: Props) {
  return (
    <div className={styles.post}>
      <div
        className={"ogImg"}
        style={{
          backgroundImage: `url("${post.ogImage}")`,
        }}
      />
      <div className={"contents"}>
        {post.tags && (
          <div className={"tags"}>
            {post.tags?.map((tag, k) => (
              <div className={"tag"} key={k}>
                {tag}
              </div>
            ))}
          </div>
        )}
        <div className={"title"}>
          {post.title}
          <div className={"subTitle"}>{post.subtitle}</div>
        </div>
        <div className={"metaData"}>
          <div className={"writer"}>{post.writer}</div>
          <div className={"date"}>{dayjs(post.date).format("YYYY.MM.DD")}</div>
        </div>
      </div>
    </div>
  );
}
