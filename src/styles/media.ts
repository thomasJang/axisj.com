const maxwidth = {
  xs: "302px",
  sm: "458px",
  md: "724px",
  lg: "940px",
  xl: "1180px",
  ul: "1300px",
};

const gutter = {
  xs: "10px",
  sm: "10px",
  md: "20px",
  lg: "20px",
  xl: "20px",
  ul: "20px",
};

const breakpoint = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  ul: "1440px",
};

const media = {
  xs: `@media (min-width: ${breakpoint.xs})`,
  sm: `@media (min-width: ${breakpoint.sm})`,
  md: `@media (min-width: ${breakpoint.md})`,
  lg: `@media (min-width: ${breakpoint.lg})`,
  xl: `@media (min-width: ${breakpoint.xl})`,
  ul: `@media (min-width: ${breakpoint.ul})`,
};

const mediaMax = {
  xs: `@media (max-width: ${breakpoint.xs})`,
  sm: `@media (max-width: ${breakpoint.sm})`,
  md: `@media (max-width: ${breakpoint.md})`,
  lg: `@media (max-width: ${breakpoint.lg})`,
  xl: `@media (max-width: ${breakpoint.xl})`,
  ul: `@media (max-width: ${breakpoint.ul})`,
};

export { breakpoint, media, mediaMax, maxwidth, gutter };
