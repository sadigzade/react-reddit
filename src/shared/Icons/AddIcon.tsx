import React from "react";
import { IIconTemplateProps } from "./IIconTemplateProps";

export function AddIcon({ size }: IIconTemplateProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="9.5" cy="9.5" r="9.5" fill="#CC6633" />
      <path
        d="M10.1523 8.8066H13V9.96226H10.1523V13H8.8477V9.96226H6V8.8066H8.8477V6H10.1523V8.8066Z"
        fill="white"
      />
    </svg>
  );
}
