import React from 'react';
type Props = {
  strokeColor?: string;
  className?: string;
}
export const DownArrowIcon = ({strokeColor = "#B4BFC6", className=""}: Props) => {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M6 10L12 16L18 10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"></path>
      </svg>
  );
};

