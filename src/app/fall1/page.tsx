import Image from "next/image";
import { ClientComponent } from "../clientComponent";
import { ServerComponent } from "../serverComponent";

export default function Home() {
  return (
    <div>
      <div className="border-dotted border-2 border-slate-500 mb-5">
      <h1 className="text-4xl font-extrabold dark:text-white pb-2 text-slate-500">
        Fall 1
      </h1>
        <div>
          <ClientComponent />
        </div>
        <div>
          <ServerComponent />
        </div>
      </div>
    </div>
  );
}
