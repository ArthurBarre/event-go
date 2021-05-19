import classNames from "classnames/bind";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./SignIn.module.scss";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import { navigate } from "gatsby";

const c = classNames.bind(styles);

const Signin = () => {
  return (
    <>
      <StaticImage
        className={c("image")}
        src="../../images/illu.png"
        alt="illu"
      />
      <div className={c("flexCol")}>
        <h1 className={c("title")}>Sign In</h1>
        <Input type="text" placeholder="Your@email.com" label="Email"></Input>
        <Input type="password" placeholder="Mdp1234!" label="Password"></Input>

        <Button
          type="secondary"
          // disabled={true}
          // loading={true}
          onClick={() => navigate("/login")}
        >
          Sign in
        </Button>
      </div>
    </>
  );
};

export default Signin;
