import { useState } from "react";

const UseStateGotcha = () => {
  // return <h2>useState "gotcha"</h2>;
  const [value, setValue] = useState(0);

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{value}</h3>
      <button
        className="btn"
        onClick={() => {
          // value + 1;
          // console.log(value + 1); Logged value is stale here
          setValue((currentState) => {
            const newValue = currentState + 1;
            console.log(newValue);
            return newValue;
          });
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
