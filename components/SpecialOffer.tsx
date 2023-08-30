import Image from "next/image";
import { Button } from ".";
import { offer } from "@/public/images";
import { arrowRight } from "@/public/icons";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1 ">
          <Image
            src={offer}
            width={773}
            height={687}
            alt="offer image"
            className="object-contain w-full"
          />
        </div>
        <div>
          <h2 className="mt-10 font-palanquin text-4xl lg:max-w-lg font-bold capitalize">
            <span className="text-coral-red dark:text-dark-coral-red">Special</span>{" "}
            <span className="dark:text-white-400">Offer</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text dark:text-white-400">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text dark:text-white-400">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button
              label="Shop Now"
              iconURL={arrowRight}
              hoverClass="hover:bg-white hover:text-slate-gray"
            />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              textColor="text-slate-gray"
              hoverClass="hover:bg-coral-red  hover:text-white"
              borderColor="border-coral-red"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
