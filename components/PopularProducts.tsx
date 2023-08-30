"use client";

import { products } from "@/constants";

import { PopularProductCard } from ".";
import { useState } from "react";
import ShoeCardModal from "./ShoeCardModal";

const PopularProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section id="products" className="max-container">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin mt-24">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat lg:max-w-lg mt-12 text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <>
            <div onClick={openModal}>
              <PopularProductCard
                key={product.name}
                imgURL={product.imgURL}
                price={product.price}
                name={product.name}
                rating={product.rating}
              />
            </div>
            {isOpen && (
              <ShoeCardModal
                closeModal={closeModal}
                imgURL={product.imgURL}
                isOpen={isOpen}
                name={product.name}
                openModal={openModal}
                price={product.price}
                rating={product.rating}
                setIsOpen={setIsOpen}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
