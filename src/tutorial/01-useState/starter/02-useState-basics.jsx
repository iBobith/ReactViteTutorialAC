import { useState } from "react";

const UseStateBasics = () => {
  // return <h2>useState basics</h2>;

  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const addClick = () => {
    setCount(count + 1);
  };
  const subClick = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>useState basics</h2>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={addClick}>
        Add
      </button>
      <div />
      {/* Below I'm gonna add another button that subtracts the count */}
      <button type="button" className="btn" onClick={subClick}>
        Subtract
      </button>
    </>
  );
};

export default UseStateBasics;
