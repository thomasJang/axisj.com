"use client";

import { Link } from "@/i18n/routing";
import { SMixinFlexColumn, SMixinFlexRow } from "@/styles/emotion";
import { useLocale } from "next-intl";
import { useState } from "react";
import type { Post } from "@/app/[locale]/(subpage)/blog/lib/types";
import styled from "@emotion/styled";
import printDate from "@/utils/printDate";
import { mediaMax } from "@/styles/media";
import { Avatar } from "antd";

interface Props {
  posts: Post[];
  paginate?: boolean;
}

const Posts = ({ posts, paginate }: Props) => {
  const cl = useLocale();
  const [showMore, setShowMore] = useState(4);

  return (
    <PostWrap>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        return (
          <PostCard key={`post-item-${post.slug}`}>
            <div className={"meta"}>
              <div className={"titles"}>
                <span role={"date"}>{printDate(post.date, cl)}</span>
                <Link href={`/blog/${post.slug}`} role={"read"}>
                  <h5 role={"title"}>{post.title}</h5>
                </Link>
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
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

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

  ${SMixinFlexColumn("stretch", "stretch")};
  gap: 1rem;

  img {
    width: 100%;
    border-radius: 10px;
  }
  .meta {
    ${SMixinFlexRow("stretch", "stretch")};
    gap: 1rem;

    .titles {
      ${SMixinFlexColumn("flex-start", "flex-start")};
      flex: 1;
      font-family: var(--font-display);
    }

    [role="date"] {
      font-size: 0.8rem;
      color: var(---txt-body);
      margin-bottom: 0.3rem;
    }
    [role="title"] {
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 700;
    }
    [role="writer"] {
      flex: none;
    }
  }

  p {
    color: var(--txt-body);
    font-size: 0.9rem;
    line-height: 1.4;
  }

  [role="read"] {
    font-size: 14px;
    font-weight: bold;
    font-family: var(--font-display);
    &:hover {
      color: var(--txt-link-hover);
    }
  }
`;
