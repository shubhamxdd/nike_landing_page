import Image from "next/image";
import { ServiceCardProps } from "@/types";

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-3xl shadow-3xl px-10 py-16">
        <div className="bg-coral-red w-11 h-11 flex justify-center items-center rounded-full">
          <Image src={imgURL} alt="service logo" width={24} height={24} />
        </div>
        <h2 className="font-bold text-3xl font-palanquin mt-5 leading-normal">
          {label}
        </h2>
        <p className="info-text mt-3 font-montserrat">{subtext}</p>
      </div>
    </>
  );
};

export default ServiceCard;
