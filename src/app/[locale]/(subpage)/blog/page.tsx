import React from "react";
import { PostList } from "./components/PostList";

export default async function Page({}: any) {
  return (
    <div className={"container"}>
      <PostList />
    </div>
  );
}
