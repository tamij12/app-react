import React, { useContext, useState } from "react";

import "./home.scss";
import Box from "../../components/Box/Box";
import { GradesContext } from "../../components/App/App";

function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");
  const { usersWithGrades, setUsersWithGrades } = useContext(GradesContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const addUser = () => {
    const userValue = document.getElementById("user").value;
    const gradeValue = Number(document.getElementById("grade").value);

    setUsersWithGrades([
      ...usersWithGrades,
      {
        name: userValue,
        grade: gradeValue,
      },
    ]);

    usersWithGrades.push(setUsersWithGrades);
  };

  const searchUser = () => {
    const userValue = document.getElementById("suser").value;

    const filteredUsers = usersWithGrades.filter((user) => {
      return user.name === userValue;
    });

    setSearchedUser(filteredUsers[0]);
  };

  return (
    <div className={`home ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <ul className="nav-home">
        <li>
          <h1>Home</h1>
        </li>
        <li>
          <button onClick={toggleTheme} className="button-theme">Toggle theme</button>
        </li>
      </ul>
      <div className="users">
        <input id="user" type="text" placeholder="User" />
        <input id="grade" type="number" placeholder="Grade" />
        <button onClick={addUser}>Add user</button>
      </div>
      <div className="div-list-users">
        {usersWithGrades.map((user, index) => {
          return (
            <div className="list-users" key={index}>
              <h1>{user.name}</h1>
              <h2>{user.grade}</h2>
            </div>
          );
        })}
      </div>
      <div className="search-box">
        <input id="suser" type="text" placeholder="user" />
        <button onClick={searchUser}>Search user</button>
        {searchedUser && <Box name={searchedUser.name} />}
      </div>
    </div>
  );
}

export default Home;
