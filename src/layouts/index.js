import classNames from "classnames/bind";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import UsersContext from "../store/users-context";
import * as styles from "./index.module.scss";

const c = classNames.bind(styles);

// markup
const IndexPage = ({ children }) => {
  const [users, setUsers] = useState([
    { username: "test", password: "password" },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <main className={c("wrapper")}>
        <StaticImage
          className={c("image")}
          src="../images/illu.png"
          alt="illu"
        />
        {children}
      </main>
    </UsersContext.Provider>
  );
};

export default IndexPage;
