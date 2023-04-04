import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/modules/itemSlice";
import { RootState } from "../redux/config/configStore";
import { List } from "../redux/modules/itemSlice";
import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export type NewItem = {
  title?: string;
  desc?: string;
};

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const items = useSelector((store: RootState) => store.items);
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: NewItem) => {
      return await axios.post("http://localhost:4000/items", payload);
    },
    onSuccess() {
      queryClient.invalidateQueries(["GET_TODOS"]);
    },
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: NewItem = {
      title,
      desc,
    };
    // dispatch(addItems(newItem));
    mutate(newItem);
    setTitle("");
    setDesc("");
  };
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>
          제목
          <input type="text" value={title} onChange={titleChangeHandler} />
        </label>
        <label>
          할일
          <input type="text" value={desc} onChange={descChangeHandler} />
        </label>
        <button>작성하기</button>
      </form>
    </>
  );
};

export default Form;
