import { Product } from "@/types";
import { PropsWithChildren } from "react";

 const ServerComponent = async (props: PropsWithChildren & {incomingProp?: string}) => {
  const result = await fetch("https://dummyjson.com/products/");
  const { products } = await result.json();

     return (
         <div className="border-dotted border-2 border-red-500 p-2">
             <h2 className="text-3xl font-extrabold dark:text-white pb-2 text-red-500">
                 Server Component
             </h2>
             {props.children}
             <div>
                 <h3 className="text-2xl font-extrabold dark:text-white pb-2">
                     Incoming Props
                 </h3>
                 <p>{props.incomingProp}</p>
             </div>
             <ol>
                 {products.map((p: Product) => {
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

 export default ServerComponent