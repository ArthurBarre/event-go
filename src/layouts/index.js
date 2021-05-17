import classNames from "classnames/bind";
import React, { useState } from "react";
import * as styles from "./index.module.scss";
import UsersContext from "../store/users-context";

const c = classNames.bind(styles);

// markup
const IndexPage = ({ children }) => {
  const [users, setUsers] = useState([
    { username: "test", password: "password" },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <main className={c("wrapper")}>
        <h1>Hello world</h1>
        {children}
      </main>
    </UsersContext.Provider>
  );
};

export default IndexPage;
