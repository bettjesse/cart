import React from "react";
import { productsArray } from "../productsStore";
import Product from "../components/Product";

const Store = () => {
  return (
    <>
      <section className="py-16">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-sm mx-auto md:max-w-none md:mx-0">
            {productsArray.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
