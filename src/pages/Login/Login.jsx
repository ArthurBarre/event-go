import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Login.module.scss';

const c = classNames.bind(styles);

// markup
const Login = () => {
	return (
		<>
			<p>Login page</p>
			<Link to="/">Sign in</Link>
		</>
	)
}

export default Login;
