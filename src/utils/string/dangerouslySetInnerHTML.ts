import DOMPurify from "dompurify";

export function dangerouslySetInnerHTML(
  rawMarkup: string,
  replacer?: (str: string) => string
): {
  dangerouslySetInnerHTML: {
    __html: string;
  };
} {
  return {
    dangerouslySetInnerHTML: {
      __html: DOMPurify.sanitize(replacer?.(rawMarkup) ?? rawMarkup.replace(/\n/g, "<br />")),
    },
  };
}
