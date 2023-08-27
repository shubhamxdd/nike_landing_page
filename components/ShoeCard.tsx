"use client";

import { shoeCardTypes } from "@/types";
import Image from "next/image";

const ShoeCard = ({
  bigShoeImage,
  changeBigShoeImage,
  imgURL,
}: shoeCardTypes) => {
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={() => {
        if (bigShoeImage != imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe);
        }
      }}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="shoe"
          height={103}
          width={127}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
