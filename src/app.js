import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './components/app';

if (module.hot) {
	module.hot.accept('./components/app.js', () => {});
}

const AppWithHotReloading = hot(App);

render(<AppWithHotReloading />, document.getElementById('planity'));
