"use client";
import { PropsWithChildren, useState } from "react";
import ServerComponent from "../components/serverComponentHavingProps";

export const ClientComponentImportingServer = (
  props: PropsWithChildren & { fromServer?: string }
) => {
  const [clientState, setClientState] = useState<boolean>(false);
  return (
    <div className="border-dotted border-2 border-blue-500 p-2">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2 text-blue-500">
        Client Component
      </h2>
      <ServerComponent incomingProp={"Hallo vm Client!"} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setClientState(!clientState);
        }}
      >
        {clientState ? "true" : "false"}
      </button>
    </div>
  );
};
