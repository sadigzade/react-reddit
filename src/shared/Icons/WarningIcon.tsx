import React from 'react';
import { IIconTemplateProps } from './IIconTemplateProps';

export function WarningIcon({ size }: IIconTemplateProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${(size * 14) / 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z"
        fill="#999999"
      />
    </svg>
  );
}
