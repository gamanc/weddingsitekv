import { hexToCssFilters } from "@/helpers/hexToCSSFilters";
import { Icons } from "@/interfaces/IconTypes";
import Image from "next/image";
import React from "react";

interface Props {
  icon: Icons;
  alt: string;
  color: string;
}

const IconImage = ({ icon, alt, color }: Props) => {
  return (
    <Image
      className={"block-touch-callout"}
      style={{
        filter: `${hexToCssFilters(color)}`,
      }}
      src={`/icons/icon-${icon}.png`}
      width={200}
      height={200}
      alt={alt}
      draggable={false}
      priority
    />
  );
};

export default IconImage;
