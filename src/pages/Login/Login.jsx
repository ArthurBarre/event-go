// import classNames from "classnames/bind";
import { Link } from "gatsby";
import React, { useContext } from "react";
// import * as styles from "./Login.module.scss";
import UsersContext from "../../store/users-context";
import Button from "../../components/Button/Button";

// const c = classNames.bind(styles);

// markup
const Login = () => {
  const { users, setUsers } = useContext(UsersContext);
  const addUser = () => {
    const user = {
      username: "test",
      password: "password",
    };
    setUsers([...users, user]);
  };
  console.log(users);
  return (
    <>
      <p>Login page</p>
      <Link to="/">Sign in</Link>
      <Button
        type="primary"
        loading={true}
        // disabled={true}
        // size="small"
        onClick={addUser}
      >
        Add user
      </Button>
    </>
  );
};

export default Login;
