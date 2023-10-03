import React from "react";
import { FaUserAlt } from "react-icons/fa";

interface Props {
  size?: number;
  className?: string;
}

export default function PersonImgPlaceholder({ size = 40, className }: Props) {
  return (
    <div
      className={`bg-slate-400 text-slate-700 flex justify-center items-center ${className}`}
    >
      <FaUserAlt size={size} />
    </div>
  );
}
