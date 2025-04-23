import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import type { Post } from "./types";

const thirdPartyPosts: Post[] = [];
const postsDirectory = process.env.POSTS_DIRECTORY ?? "posts";

export const getPosts = cache(async (includeThirdPartyPosts?: boolean) => {
  const postsPath = path.resolve(process.cwd(), postsDirectory);
  const posts = await fs.readdir(postsPath);

  const postsWithMetadata = await Promise.all(
    posts
      .filter((file) => path.extname(file) === ".md" || path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.resolve(process.cwd(), "posts", file);
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }
        const withoutLeadingChars = filePath.substring(2).replace(".mdx", ".md");

        const fetchUrl =
          process.env.NODE_ENV === "production"
            ? `https://api.github.com/repos/thomasJang/axisj.com/commits?path=${withoutLeadingChars}&page=1&per_page=1`
            : `http://localhost:3000/mock-commit-response.json`;

        const commitInfoResponse = await fetch(fetchUrl, {
          headers: {
            Authorization: process.env.GITHUB_TOKEN ?? "",
          },
        });
        const commitInfo = await commitInfoResponse.json();

        let lastModified = 0;
        if (commitInfo?.length) {
          lastModified = new Date(commitInfo[0].commit.committer.date).getTime();
        }

        return {
          ...data,
          tags: data.tags ? data.tags.split(",").map((s: string) => s.trim()) : undefined,
          body: content,
          lastModified,
        } as Post;
      }),
  );

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyPosts ? thirdPartyPosts : []),
  ];

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) => (a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0)) as Post[];

  return filtered;
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default getPosts;
