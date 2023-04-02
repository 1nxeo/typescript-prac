import React, { useState } from "react";
import Item from "./components/Item";
import Form from "./components/Form";

export type List = {
  id: number;
  title: string | undefined;
  desc: string | undefined;
};
const App = (): JSX.Element => {
  return (
    <>
      <h1>또두리스트</h1>
      <Form />
      {/* {list.map(
        (item: List): JSX.Element => (
          <Item key={item.id} item={item} />
        )
      )} */}
    </>
  );
};

export default App;
