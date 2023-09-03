import { PropsWithChildren } from "react";
import { getProducts } from "./server";

export default async (props: PropsWithChildren) => {
  const result = await fetch("https://dummyjson.com/products/");
  const { products } = await result.json();

  return (
    <div className="border-dotted border-2 border-red-500 p-2">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2 text-red-500">
        Server Component
      </h2>
      {props.children}
      <ol>
        {products.map((p) => {
          return (
            <li key={p.id} className="flex">
              <div className="flex-initial w-6 ">{p.id}</div>
              <div className="flex-initial">{p.description}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
