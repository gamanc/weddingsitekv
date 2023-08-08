import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  className: string;
  rotated?: boolean;
}

const FloralOrnament = ({ className, rotated = false }: Props) => {
  return (
    <Image
      width={772}
      height={760}
      draggable={false}
      priority
      className={clsx(className, { rotated: rotated }, "block-touch-callout")}
      src="/img/floral-ornament-hd.png"
      alt="ornament"
    />
  );
};

export default FloralOrnament;
