import { buttonTypes } from "@/types";
import Image from "next/image";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  hoverClass,
}: buttonTypes) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${hoverClass}
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} `
          : "bg-coral-red  text-white border-coral-red dark:bg-dark-coral-red"
      }`}
      >
        {label}
        {iconURL && (
          <Image
            src={iconURL}
            alt="icon"
            height={15}
            width={15}
            className="ml-2 rounded-full"
          />
        )}
      </button>
    </>
  );
};

export default Button;
