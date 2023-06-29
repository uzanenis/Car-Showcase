"use client";

import { ICustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
}: ICustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
