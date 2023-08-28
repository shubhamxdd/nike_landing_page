import { star } from "@/public/icons";
import { ReviewCardProps } from "@/types";
import Image from "next/image";

const ReviewCard = ({
  customerName,
  feedback,
  imgURL,
  rating,
}: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="customer image"
        className="rounded-full object-cover"
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm text-center font-montserrat text-slate-gray text-xl leading-7">
        {feedback}
      </p>
      <div className="flex mt-3 justify-center items-center gap-2">
        <Image
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
