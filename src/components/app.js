import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import Layout from './layout';
import Landing from './landing';
import Todos from './todos';

export default function App() {
	return (
		<Router history={browserHistory}>
			<Route path={'/'} component={Layout}>
				<IndexRoute component={Landing} />
				<Route path={'todos'} component={Todos} />
			</Route>
		</Router>
	);
}
