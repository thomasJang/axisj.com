"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import Link from "next/link";
import styled from "@emotion/styled";
import { useCurrentLocale } from "@/locales/client";
import printDate from "@/utils/printDate";
import { SMixinFlexColumn, SMixinFlexRow } from "@/styles/emotion";
import { mediaMax } from "@/styles/media";
import { Avatar } from "antd";

interface Props {
  posts: Post[];
  paginate?: boolean;
}

const Posts = ({ posts, paginate }: Props) => {
  const cl = useCurrentLocale();
  const [showMore, setShowMore] = useState(4);

  return (
    <PostWrap>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        return (
          <PostCard key={`post-item-${post.slug}`}>
            <div className={"meta"}>
              <div className={"titles"}>
                <span role={"date"}>{printDate(post.date, cl)}</span>
                <h5 role={"title"}>{post.title}</h5>
              </div>
              <div role={"writer"}>
                <Avatar>{post.writer.slice(0, 1)}</Avatar>
              </div>
            </div>
            <p>
              {post.description}
              {post.tags}
            </p>
            <Link href={`/blog/${post.slug}`} role={"read"}>
              Read More {`>>`}
            </Link>
          </PostCard>
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
    </PostWrap>
  );
};

export default Posts;

const PostWrap = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

  ${mediaMax.md} {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
const PostCard = styled.div`
  background: var(--white);
  border: 1px solid var(--border-color);
  padding: 24px;
  border-radius: 10px;
  max-width: 450px;

  ${SMixinFlexColumn("stretch", "stretch")};
  gap: 1rem;

  ${mediaMax.md} {
    margin: 0 auto;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  .meta {
    ${SMixinFlexRow("stretch", "stretch")};
    gap: 1rem;

    ${mediaMax.md} {
      padding: 1rem;
    }

    .titles {
      ${SMixinFlexColumn("flex-start", "flex-start")};
      gap: 0.5rem;
      flex: 1;
    }

    [role="date"] {
      font-size: 0.8rem;
    }
    [role="title"] {
      font-size: 16px;
      line-height: 1.5rem;
    }
    [role="writer"] {
      flex: none;
    }
  }

  p {
    color: var(--txt-body);
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

  [role="read"] {
    font-size: 14px;
    font-weight: bold;
  }
`;