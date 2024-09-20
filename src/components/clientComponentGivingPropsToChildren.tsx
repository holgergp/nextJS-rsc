"use client";
import {
  PropsWithChildren,
  useState,
  isValidElement,
  cloneElement,
} from "react";

export const ClientComponentGivingPropsToChildrenComingFromServer = (
  props: PropsWithChildren & { fromServer?: string },
) => {
  const [clientState, setClientState] = useState<boolean>(false);
  const childWithProps = isValidElement(props.children)
    ? cloneElement(props.children, {
        // @ts-ignore
        incomingProp: "This is a prop from the client component",
      })
    : props.children;

  // The received server children are not clonable, and cannot be augmented with props
  return (
    <div className="border-dotted border-2 border-blue-500 p-2">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2 text-blue-500">
        Client Component
      </h2>

      {childWithProps}
      <div>
        <h3 className="text-2xl font-extrabold dark:text-white pb-2">
          Props vom Server
        </h3>
        <p>{props.fromServer}</p>
      </div>
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
