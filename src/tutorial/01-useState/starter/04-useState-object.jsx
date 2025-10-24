import { useState } from "react";

const UseStateObject = () => {
  // return <h2>useState object example</h2>;

  // Before batching
  // const [name, setName] = useState("Kris");
  // const [age, setAge] = useState(20);
  // const [hobby, setHobby] = useState("Coding");

  // After batching
  const [person, setPerson] = useState({
    name: "Kris",
    age: 20,
    hobby: "Coding",
  });

  const handleClick = () => {
    setPerson({ name: "Quentin", age: 45, hobby: "Ballet" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>
        {person.name} likes {person.hobby}
      </h3>
      <button onClick={handleClick} className="btn">
        Change
      </button>
    </>
  );
};

export default UseStateObject;
