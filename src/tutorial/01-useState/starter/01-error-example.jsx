import { useState } from "react";

const ErrorExample = () => {
  // return <h2>useState error example</h2>;
  // let count = 0;

  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h2>UseState error example</h2>
      <h2>{count}</h2>
      {/* Button doesnt update the count.
       Will learn about it within ./tutorial/01-useState/starter/02-useState-basics.jsx */}
      {/* <button type="button" onClick={handleClick} className="btn">
        Increase
      </button> */}
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
      {/* Now, after learning about useState and implementing it, the code works as intended :) */}
    </div>
  );
};

export default ErrorExample;
