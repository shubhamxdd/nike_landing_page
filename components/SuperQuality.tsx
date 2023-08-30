import { Button } from ".";
import Image from "next/image";
import { shoe8 } from "@/public/images";

const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container dark:text-white-400"
      >
        <div className="flex flex-1 flex-col  mt-10">
          <h2 className="mt-10 font-palanquin text-4xl lg:max-w-lg font-bold capitalize ">
            We Provide You {"  "}
            <span className="text-coral-red dark:text-dark-coral-red">
              Super
            </span>{" "}
            <span className="text-coral-red dark:text-dark-coral-red">
              Quality
            </span>{" "}
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text dark:text-white-400">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text dark:text-white-400">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button
              label="View Details"
              hoverClass="hover:bg-white hover:text-slate-gray"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image
            src={shoe8}
            alt="shoe image"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
