import React from "react";

const Form = (): JSX.Element => {
  return (
    <>
      <form>
        <label>
          {" "}
          제목
          <input type="text" />
        </label>
        <label>
          {" "}
          할일
          <input type="text" />
        </label>
        <button>작성하기</button>
      </form>
    </>
  );
};

export default Form;
