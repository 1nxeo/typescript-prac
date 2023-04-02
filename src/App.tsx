import React, { useState } from "react";
import Item from "./components/Item";

export type List = {
  id: number;
  title: string | undefined;
  desc: string | undefined;
};
const App = (): JSX.Element => {
  const [list, setList] = useState<List[]>([]);
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

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

  return (
    <>
      <h1>또두리스트</h1>
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
      {list.map(
        (item: List): JSX.Element => (
          <Item key={item.id} item={item} />
        )
      )}
    </>
  );
};

export default App;
