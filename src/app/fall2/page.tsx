import Image from "next/image";
import { ClientComponent } from "../../components/clientComponent";
import ServerComponent from "../../components/serverComponent";

export default function Home() {
  return (
    <div className="border-dotted border-2 border-slate-500 mb-5">
      <h1 className="text-4xl font-extrabold dark:text-white pb-2 text-slate-500">
        Fall 2
      </h1>
      <div>
        <ServerComponent>
          <ClientComponent />
        </ServerComponent>
      </div>
    </div>
  );
}
