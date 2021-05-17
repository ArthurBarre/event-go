import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Signin.module.scss';

const c = classNames.bind(styles);

// markup
const Signin = () => {
	return (
		<>
			<p>Signin page</p>
			<Link to="/login">Alreayd have an account? Login</Link>
		</>
	)
}

export default Signin;
