import { type PropsWithChildren } from "react";

// type PropsType = {
//   name: string;
//   id: number;
//   children?: React.ReactNode
// };

type PropsType = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Props({ name, id, children }: PropsType) {
  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Id: {id}</h1>
      {children}
    </>
  );
}

export default Props;
