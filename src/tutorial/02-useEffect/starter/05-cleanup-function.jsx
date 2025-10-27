import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <ToggleComponent />}
    </>
  );
};
const ToggleComponent = () => {
  useEffect(() => {
    console.log("toggle component mounted");
  }, []);
  return (
    <div>
      <h4>toggled component</h4>
    </div>
  );
};

export default CleanupFunction;
