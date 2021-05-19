import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames/bind";
import * as styles from "./SignIn.module.scss";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import { navigate } from "gatsby";

const c = classNames.bind(styles);

const Signin = () => {
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

  console.log("onBlur", onBlur);

  useEffect(() => {
    if (email !== "" && emailRegex.test(email)) {
      setDisabled(false);
      setErrorMessage("");
    } else {
      if (onBlur && email !== "" && !emailRegex.test(email)) {
        setErrorMessage("c'est pas un email");
      }
    }
  }, [email]);

  return (
    <>
      <StaticImage
        className={c("image")}
        src="../../images/illu.png"
        alt="illu"
      />
      <div className={c("flexCol")}>
        <h1 className={c("title")}>Sign In</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => {
            setOnFocus(true);
          }}
          onBlur={() => {
            setOnBlur(true);
          }}
          type="text"
          placeholder="Your@email.com"
          label="Email"
        ></Input>
        <Input type="password" placeholder="Mdp1234!" label="Password"></Input>

        <Button
          type="primary"
          disabled={disabled}
          // loading={true}
          onClick={() => navigate("/login")}
        >
          Sign in
        </Button>
        {errorMessage}
      </div>
    </>
  );
};

export default Signin;
