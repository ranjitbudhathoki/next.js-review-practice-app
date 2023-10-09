import type { ReactNode } from "react";

type headingProps = {
  children: ReactNode;
};

export default function Heading({ children }: headingProps): JSX.Element {
  return (
    <h1 className={"font-bold font-orbitron text-2xl pb-3"}>{children}</h1>
  );
}
