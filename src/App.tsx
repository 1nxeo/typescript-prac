import React, { useState } from "react";
import Item from "./components/Item";
import Form from "./components/Form";
import { List } from "./redux/modules/itemSlice";
import { useSelector } from "react-redux";
import { RootState } from "./redux/config/configStore";

const App = (): JSX.Element => {
  const items = useSelector((store: RootState) => store.items);

  console.log("items", items);

  return (
    <>
      <h1>또두리스트</h1>
      <Form />
      {items.map((item: List) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default App;
