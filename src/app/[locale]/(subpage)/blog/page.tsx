import { PostListRSC } from "@/components/posts-list/rsc";
import React, { Suspense } from "react";

const Blog = async () => {
  return (
    <Suspense
      fallback={
        <div className={"page-container"}>
          <div className={"loader"}></div>
        </div>
      }
    >
      <PostListRSC paginate={true} />
    </Suspense>
  );
};

export default Blog;
