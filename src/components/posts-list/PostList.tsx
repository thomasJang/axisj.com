"use client";

import Posts from "@/components/posts-list/Posts";
import { PostTitle } from "@/components/posts-list/PostTitle";
import { Post } from "@/app/[locale]/(subpage)/blog/lib/types";
import { mediaMax } from "@/styles/media";
import styled from "@emotion/styled";
import * as React from "react";

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
