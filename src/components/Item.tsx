import React, { useState } from "react";
import { List, deleteItems, editItems } from "../redux/modules/itemSlice";
import { useDispatch } from "react-redux";

type ItemProps = {
  item: List;
};

const Item = ({ item }: ItemProps): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(`${item.title}`);
  const [editDesc, setEditDesc] = useState<string>(`${item.desc}`);
  const dispatch = useDispatch();
  const editButtonHandler = () => {
    setEdit((pre) => !pre);
  };
  const editItemHandler = () => {
    const editItem = {
      id: item.id,
      title: editTitle,
      desc: editDesc,
    };
    dispatch(editItems(editItem));
    setEdit((pre) => !pre);
  };
  const deleteItemHandler = (id: number) => {
    dispatch(deleteItems(id));
  };

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const descChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditDesc(e.target.value);
  };
  return (
    <>
      {edit ? (
        <div key={item.id}>
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
              deleteItemHandler(item.id);
            }}
          >
            삭제
          </button>
        </div>
      ) : (
        <div key={item.id}>
          <p>제목:{item.title}</p>
          <p>할일:{item.desc}</p>
          <button onClick={() => editButtonHandler()}>수정</button>
          <button
            onClick={() => {
              deleteItemHandler(item.id);
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
