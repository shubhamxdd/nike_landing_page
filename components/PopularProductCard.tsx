import { star } from "@/public/icons";
import { popularProductCardTypes } from "@/types";
import Image from "next/image";

const PopularProductCard = ({
  name,
  price,
  imgURL,
  rating,
}: popularProductCardTypes) => {
  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <Image src={imgURL} alt="shoe image" width={280} height={280} />
        <div className="mt-8 flex justify-start gap-2.5">
          <Image src={star} alt="star" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            {rating}
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
          {price}
        </p>
      </div>
    </>
  );
};

export default PopularProductCard;
