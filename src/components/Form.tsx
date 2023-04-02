import React, { useState } from "react";
import { List } from "../App";

const Form = (): JSX.Element => {
  const [list, setList] = useState<List[]>([]);
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      id: list.length + 1,
      title,
      desc,
    };
    const newList = [...list, newItem];
    setList(newList);
    setTitle("");
    setDesc("");
    alert(`제목:${title}, 할일:${desc}`);
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
