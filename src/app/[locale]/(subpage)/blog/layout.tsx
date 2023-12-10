import Outline from "@/components/blog-layout";

export const metadata = {
  title: "Blog",
  description: "Posts and tips, mostly about software.",
  alternates: {
    canonical: "https://axisj.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Outline type="layout" name="Blog">
      <article>{children}</article>
    </Outline>
  );
}
