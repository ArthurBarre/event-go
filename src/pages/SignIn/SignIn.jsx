import classNames from "classnames/bind";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from './SignIn.module.scss';

const c = classNames.bind(styles);

const Signin = () => {
  return (
    <>
      <StaticImage className={c('image')} src="../../images/illu.png" alt="illu"/>
      <h1 className={c('title')}>Sign In</h1>
    </>
  );
};

export default Signin;
