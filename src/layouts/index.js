import classNames from 'classnames/bind';
import React from 'react';
import * as styles from './index.module.scss';

const c = classNames.bind(styles);

// markup
const IndexPage = ({children}) => {
	return (
		<main className={c('wrapper')}>
			<h1>Hello world</h1>
			{children}
		</main>
	)
}

export default IndexPage;
