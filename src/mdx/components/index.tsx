import { File, FileTree, Folder } from "@/components/file-tree";
import Home from "@/components/icons/home";
import Info from "@/components/icons/info";
import { Code } from "bright";
import { MDXComponents } from "mdx/types";

// import Diff from './mdx-diff'
import NextImage from "next/image";
import { MDXImage } from "./mdx-image";
// import Link from '@components/link'
import { MDXNote } from "./mdx-note";
// const Diff = dynamic(() => import("./mdx-diff"), {
//   ssr: false,
//   loading: () => (
//     <div
//       style={{
//         height: 400,
//         width: "100%",
//         display: "flex",
//         backgroundColor: "var(--light-gray)",
//       }}
//     />
//   ),
// });

export const mdxComponents: MDXComponents = {
  // TODO: re-enable once anchor tags are fixed in the app router
  // a: ({ children, ...props }) => {
  //   // check if external
  //   let te = false
  //   if (props.href?.startsWith('http')) {
  //     isExternal = true
  //   }

  //   return (
  //     // @ts-expect-error legacy refs
  //     <Link
  //       {...props}
  //       href={props.href || ''}
  //       target={isExternal ? '_blank' : undefined}
  //       rel={isExternal ? 'noopener noreferrer' : undefined}
  //     >
  //       {children}
  //     </Link>
  //   )
  // },
  pre: ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    // TODO: extract title from children
    return (
      <Code {...props} theme='material-default'>
        {children as any}
      </Code>
    );
  },
  img: MDXImage as any,
  Image: NextImage as any,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDetailsElement> & {
    summary: string;
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...(props as any)}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Note: MDXNote,
  //   icons
  InfoIcon: Info,
  HomeIcon: Home,
  // Diff: Diff as any,
  // file tree
  FileTree: FileTree as any,
  File: File as any,
  Folder: Folder as any,
};
