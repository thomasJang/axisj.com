import { ReactNode } from "react";

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
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
