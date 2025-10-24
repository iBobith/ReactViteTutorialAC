import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // return <h2>useState array example</h2>;
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAll = () => {
    setPeople([]);
  };

  const resetAll = () => {
    setPeople(data);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearAll}>
        Clear Items
      </button>
      <div />
      <button className="btn" onClick={resetAll}>
        Reset Items
      </button>
    </>
  );
};
export default UseStateArray;
