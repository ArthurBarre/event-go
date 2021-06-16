import classNames from "classnames/bind";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as styles from "./SignIn.module.scss";

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
        <div className={c("wrapper")}>
            <h1 className={c("title")}>Sign In</h1>
            <span className={c("register")}>
                Not sign up?{" "}
                <Link className={c("link")} to="/register">
                    Register
                </Link>
            </span>
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
                className={c("input")}
            ></Input>
            <Input
                type="password"
                placeholder="Mdp1234!"
                label="Password"
            ></Input>
            <Link to="/forgot-password" className={c("passwordReset")}>
                Forgot password?
            </Link>
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
    );
};

export default Signin;
