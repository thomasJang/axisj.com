"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import Link from "next/link";

type Props =
  | {
      posts: Post[];
      paginate?: boolean;
    }
  | {
      skeleton: true;
    };

const Posts = (props: Props) => {
  const [showMore, setShowMore] = useState(4);

  if ("skeleton" in props) {
    return (
      <ul>
        {[...Array(4)].map((_, i) => (
          <li key={i}>skeleton</li>
        ))}
      </ul>
    );
  }

  const { posts, paginate } = props;

  return (
    <ul>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        });

        return (
          <div key={`post-item-${post.slug}`}>
            <Link href={post.isThirdParty ? post.href! : `/blog/${post.slug}`}>
              {post.title} / {post.description} / {date} /{post.views}
            </Link>
          </div>
        );
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4);
          }}
        >
          Show More
        </button>
      )}
    </ul>
  );
};

export default Posts;
