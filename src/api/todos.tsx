import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Todos = (): JSX.Element => {
  useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await axios.get("http://localhost:4000/items");
      console.log(data);
    },
  });
  return <div></div>;
};

export default Todos;
