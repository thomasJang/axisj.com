import NextImage from "next/image";

export function MDXImage({
  src,
  alt,
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;
}) {
  let widthFromSrc, heightFromSrc;
  const url = new URL(
    src,
    process.env.NODE_ENV === "production"
      ? "https://axisj.com"
      : "http://localhost:3000"
  );

  const widthParam = url.searchParams.get("w") || url.searchParams.get("width");
  const heightParam =
    url.searchParams.get("h") || url.searchParams.get("height");
  // if (widthParam) {
  //   widthFromSrc = parseInt(widthParam);
  // }
  // if (heightParam) {
  //   heightFromSrc = parseInt(heightParam);
  // }
  //
  // const imageProps = {
  //   src,
  //   alt,
  //   // tweak these to your liking
  //   width: widthFromSrc ?? 800,
  //   height: heightFromSrc ?? 600,
  // };

  // return <NextImage {...imageProps} />;

  return <img src={src} alt={alt} width={widthParam as any} />;
}
