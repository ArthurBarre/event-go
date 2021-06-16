import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import * as styles from "./Register.module.scss";
import Input from "../../components/input/input";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../components/button/button";
import { navigate } from "gatsby";

const c = classNames.bind(styles);

const Register = () => {
    const [disabled, setDisabled] = useState(true);
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
            <StaticImage className={c("image")} src="../../images/illu.png" alt="illu"/>
            <div className={c("flexCol")}>
                <h1 className={c("title")}>Enter your email address</h1>
                <Input
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // onFocus={() => setOnFocus(true)}
                    // onBlur={() => setOnBlur(true)}
                    type="text"
                    placeholder="Your@email.com"
                    label="Email"
                />
                <Button
                    type="primary"
                    // disabled={disabled}
                    // onClick={() => navigate("/login")}
                >
                    Reset password
                </Button>
                {errorMessage}
            </div>
        </>
    );
};

export default Register;
