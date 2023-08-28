import React from "react";

interface Props {
  size: number;
  color: string;
}

const EnvelopeIcon = ({ size = 100, color = "#000000" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g fill="none" stroke={color} strokeMiterlimit={10} strokeWidth="1.91px">
        <path d="M13.74,10.09a2.23,2.23,0,0,0-1.74.77,2.23,2.23,0,0,0-1.74-.77,1.93,1.93,0,0,0-2.08,1.72c0,2.58,3.82,4,3.82,4s3.82-1.43,3.82-4A1.93,1.93,0,0,0,13.74,10.09Z" />
        <rect x="1.5" y="4.37" width="21" height="15.27" />
        <line x1="22.5" y1="4.37" x2="15.68" y2="11.19" />
        <line x1="8.33" y1="11.19" x2="1.5" y2="4.37" />
        <line x1="1.5" y1="19.78" x2="8.32" y2="12.96" />
        <line x1="15.67" y1="12.96" x2="22.5" y2="19.78" />
      </g>
    </svg>
  );
};

export default EnvelopeIcon;
