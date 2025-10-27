const url = "https://api.github.com/users";
import { useState, useEffect } from "react";

// First I initialize a state variable to hold the url data (fetched users)
// Then I use useEffect to fetch the data from the url
const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error));
  });

  // Then I render the fetched data
  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noreferrer">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
