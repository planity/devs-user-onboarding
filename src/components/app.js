import React from 'react';
import { colors, fontWeights } from 'config/styles';
import { css } from 'glamor';

css.global('*, *:before, *:after', {
	boxSizing: 'border-box'
});

css.global('body', {
	fontFamily: 'Open Sans, sans-serif'
});

export default function App() {
	return <h1 css={styles.title}>Welcome to Planity !</h1>;
}

const styles = {
	title: {
		'margin': 10,
		'color': colors.green500,
		'fontWeight': fontWeights.bold,
		'@media (min-width: 500px)': {
			color: 'red'
		}
	}
};
