import styled from "@emotion/styled";
import { maxwidth, media } from "@/styles/media";

export const PageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  transition: all 0.2s ease-out;
  ${media.xs} {
    max-width: 100%;
    width: 100%;
  }
  ${media.sm} {
    max-width: 100%;
    width: 100%;
  }
  ${media.md} {
    max-width: ${maxwidth.md};
  }
  ${media.lg} {
    max-width: ${maxwidth.md};
  }
  ${media.xl} {
    max-width: ${maxwidth.xl};
  }
  ${media.ul} {
    max-width: ${maxwidth.ul};
  }
`;