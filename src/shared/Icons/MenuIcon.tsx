import React from 'react';
import { IIconTemplateProps } from './IIconTemplateProps';

export function MenuIcon({ size }: IIconTemplateProps) {
  return (
    <svg
      width="5"
      height={size}
      viewBox={`0 0 ${(size * 5) / 20} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
      <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
      <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
    </svg>
  );
}
