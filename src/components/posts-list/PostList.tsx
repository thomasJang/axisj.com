"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { Post } from "@/lib/types";
import Posts from "@/components/posts-list/Posts";
import { PageContainer } from "@/styles/Layouts";
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
        <Container>
          <Posts posts={posts} paginate={paginate} />
        </Container>
      </Layer>
    </>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;

  ${mediaMax.md} {
    padding: 1rem;
  }
`;
