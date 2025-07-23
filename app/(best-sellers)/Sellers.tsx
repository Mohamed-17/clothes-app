import React from "react";
import SellersItem from "./SellersItem";
import { bestSellers } from "@/lib/actions/actions";
import { ProductRelastions } from "@/types/type";

async function Sellers() {
  const products = await bestSellers(3);
  return (
    <div className="container">
      {products.length > 0 ? (
        <ul className="grid grid-col-1 md:grid-cols-3 space-x-5 space-y-4 shadow-2xl">
          {products.map((item: ProductRelastions) => (
            <SellersItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="w-full text-center">there&apos;s no best sellers found</p>
      )}
    </div>
  );
}

export default Sellers;
