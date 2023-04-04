import React from "react";
import Item from "../components/Item";
import Form from "../components/Form";
import { List } from "../redux/modules/itemSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Layout from "../components/Layout";

const Home = (): JSX.Element => {
  const { data } = useQuery({
    queryKey: ["GET_TODOS"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:4000/items");

      return data.data;
    },
  });

  if (!data) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <Layout>
        <h1>또두리스트</h1>
        <Form />
        {data.map((item: List) => (
          <Item key={item.id} item={item} />
        ))}
      </Layout>
    </>
  );
};

export default Home;
