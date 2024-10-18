import { PostList } from "@/components/posts-list/PostList";
import getPosts from "@/lib/get-posts";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function PostListRSC({ paginate }: { paginate?: boolean }) {
  const posts = await getPosts(true);
  return <PostList posts={posts} paginate={paginate} />;
}
