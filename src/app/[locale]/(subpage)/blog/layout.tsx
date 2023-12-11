export const metadata = {
  title: "AXISJ Blog",
  description: "AXISJ Blog",
  alternates: {
    canonical: "https://axisj.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article>{children}</article>;
}
