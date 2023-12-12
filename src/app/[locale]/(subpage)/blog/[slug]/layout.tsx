import getPosts from "@/lib/get-posts";
import { Metadata } from "next";
import styles from "./layout.module.css";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getPosts()).find((p) => p?.slug === params.slug);
  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://axisj.com/blog/${params.slug}`,
    },
    openGraph: {
      images: "/og-image.png",
    },
  };
};

export default async function PostLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) {
  return (
    <div className={styles.layer}>
      <div className={styles.pageContainer}>
        <article>{children}</article>
      </div>
    </div>
  );
}
