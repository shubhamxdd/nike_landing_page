"use client";

import { arrowRight } from "@/public/icons";
import { Button, ShoeCard } from ".";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import { bigShoe1 } from "@/public/images";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <>
      <section
        id="home"
        className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-lg">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button
            label="Shop Now"
            iconURL={arrowRight}
            hoverClass="hover:bg-white hover:text-slate-gray"
          />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stats) => {
              return (
                <div key={stats.label}>
                  <p className="text-4xl font-palanquin font-bold">
                    {stats.value}
                  </p>
                  <p className="leading-7 font-montserrat text-slate-gray">
                    {stats.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
          <Image
            src={bigShoeImg}
            alt="big-shoe"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  bigShoeImage={bigShoeImg}
                  changeBigShoeImage={(shoe) => {
                    setbigShoeImg(shoe);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
