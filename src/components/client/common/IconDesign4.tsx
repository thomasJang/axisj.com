import * as React from "react";
import Icons, { IconsProps } from "@/components/client/common/@Icon";

export function IconDesign4({ size, onClick }: IconsProps) {
  return (
    <Icons size={size} onClick={onClick}>
      <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M49 31.9999C56.1797 31.9999 62 26.2691 62 19.1999C62 12.1307 56.1797 6.3999 49 6.3999C41.8203 6.3999 36 12.1307 36 19.1999C36 26.2691 41.8203 31.9999 49 31.9999Z'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M29.6 57.9001C34.7914 57.9001 39 53.7363 39 48.6C39 43.4638 34.7914 39.3 29.6 39.3C24.4085 39.3 20.2 43.4638 20.2 48.6C20.2 53.7363 24.4085 57.9001 29.6 57.9001Z'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M67.6999 31.7L11.3999 38.5999'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M14.8 59L55.1 64.1'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M42.3 74.6999C45.6138 74.6999 48.3 72.0584 48.3 68.7999C48.3 65.5414 45.6138 62.8999 42.3 62.8999C38.9863 62.8999 36.3 65.5414 36.3 68.7999C36.3 72.0584 38.9863 74.6999 42.3 74.6999Z'
          fill='#E0D0A6'
        />
      </svg>
    </Icons>
  );
}
