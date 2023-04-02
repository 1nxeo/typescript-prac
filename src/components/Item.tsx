import React, { useState } from "react";
import { List } from "../App";

type itemProps = {
  item: List;
};

const Item = ({ item }: itemProps): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(`${item.title}`);
  const [editDesc, setEditDesc] = useState<string>(`${item.desc}`);
  const editButtonHandler = () => {
    setEdit((pre) => !pre);
  };
  const editItemHandler = () => {};
  const deleteItemHandler = () => {};

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const descChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditDesc(e.target.value);
  };
  return (
    <>
      {edit ? (
        <div>
          <input type="text" value={editTitle} onChange={titleChangeHandler} />
          <input type="text" value={editDesc} onChange={descChangeHandler} />
          <button
            onClick={() => {
              editItemHandler();
            }}
          >
            수정완료
          </button>
          <button onClick={() => editButtonHandler()}>취소</button>
          <button
            onClick={() => {
              deleteItemHandler();
            }}
          >
            삭제
          </button>
        </div>
      ) : (
        <div>
          <p>제목:{item.title}</p>
          <p>할일:{item.desc}</p>
          <button onClick={() => editButtonHandler()}>수정</button>
          <button
            onClick={() => {
              deleteItemHandler();
            }}
          >
            삭제
          </button>
        </div>
      )}
    </>
  );
};

export default Item;
