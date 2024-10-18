"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { Post } from "@/lib/types";
import Posts from "@/components/posts-list/Posts";
import { PostTitle } from "@/components/posts-list/PostTitle";
import { mediaMax } from "@/styles/media";

interface Props {
  posts: Post[];
  paginate?: boolean;
}

export function PostList({ posts, paginate }: Props) {
  return (
    <>
      <PostTitle />
      <Layer>
        <div className={"container"}>
          <Posts posts={posts} paginate={paginate} />
        </div>
      </Layer>
    </>
  );
}

const Layer = styled.div`
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;

  ${mediaMax.md} {
    padding: 1rem;
  }
`;
