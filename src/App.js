import React, { useState } from "react";
import "./App.css";

const generateUsers = () => [
  { id: 1, firstname: "goga", lastname: "cercvadze", age: 27 },
  { id: 2, firstname: "ana", lastname: "cincadze", age: 23 },
  { id: 3, firstname: "nini", lastname: "manjavidze", age: 17 },
  { id: 4, firstname: "giorgi", lastname: "kvaracxelia", age: 37 },
  { id: 5, firstname: "guga", lastname: "megrelishvili", age: 47 },
  { id: 6, firstname: "irakli", lastname: "barbaqadze", age: 23 },
  { id: 7, firstname: "ani", lastname: "xijakadze", age: 21 },
  { id: 8, firstname: "meme", lastname: "grigalashvili", age: 12 },
  { id: 9, firstname: "taso", lastname: "chichinadze", age: 30 },
  { id: 10, firstname: "irina", lastname: "rijamadze", age: 40 },
];

const people = generateUsers();

function App() {
  const [users, setUsers] = useState(people);

  const displayUser = () => {
    return users.map((user) => {
      return (
        <li
          key={user.id}
        >{`name: ${user.firstname},  lastname: ${user.lastname},  age: ${user.age}`}</li>
      );
    });
  };

  const deleteUser = () => {
    const index = Math.floor(Math.random() * (users.length + 1));
    const updatedUser = [...users];
    updatedUser.splice(index, 1);
    setUsers(updatedUser);
  };

  return (
    <>
      <p>{users.length}</p>
      <ul>{displayUser()}</ul>
      <button onClick={deleteUser}> delete </button>
    </>
  );
}

export default App;
