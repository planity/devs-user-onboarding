import React from 'react';
import { Link } from 'react-router';
import { css } from 'glamor';

css.global('*, *:before, *:after', {
	boxSizing: 'border-box'
});

css.global('body', {
	fontFamily: 'Open Sans, sans-serif'
});

export default function Layout({ children }) {
	return (
		<div>
			<nav css={styles.nav}>
				<Link to={'/'}>Home</Link>
				<Link to={'/todos'}>Todos</Link>
			</nav>
			{children}
		</div>
	);
}

const styles = {
	nav: {
		'backgroundColor': 'black',
		'& > a': {
			'display': 'inline-block',
			'padding': '1em 1.5em',
			'color': 'white',
			'textDecoration': 'none',
			'&:hover': {
				textDecoration: 'underline'
			}
		}
	}
};
