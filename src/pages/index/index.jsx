import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import React from 'react';
import * as styles from './index.module.scss';

const c = classNames.bind(styles);

// markup
const IndexPage = () => {
	return (
		<main className={c('wrapper')}>
			<h1>Hello world</h1>
			<Link to="404">404</Link>
		</main>
	)
}

export default IndexPage;
