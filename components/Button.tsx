import { buttonTypes } from "@/types";
import Image from "next/image";

const Button = ({ label, iconURL }: buttonTypes) => {
  return (
    <>
      <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
        <Image
          src={iconURL}
          alt="icon"
          height={15}
          width={15}
          className="ml-2 rounded-full"
        />
      </button>
    </>
  );
};

export default Button;
