import ServerComponentHavingProps from "@/components/serverComponentHavingProps";
import { ClientComponentGivingPropsToChildrenComingFromServer } from "@/components/clientComponentGivingPropsToChildren";

export default function Home() {
  return (
    <div className="border-dotted border-2 border-slate-500 mb-5">
      <h1 className="text-4xl font-extrabold dark:text-white pb-2 text-slate-500">
        Fall 3
      </h1>
      <div>
        <ClientComponentGivingPropsToChildrenComingFromServer>
          <ServerComponentHavingProps />
        </ClientComponentGivingPropsToChildrenComingFromServer>
      </div>
    </div>
  );
}
