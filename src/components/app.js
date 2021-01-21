import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { TodosContextProvider } from './todos/context';
import Layout from './layout';
import Landing from './landing';
import Todos from './todos';

export default function App() {
	return (
		<TodosContextProvider>
			<Router history={browserHistory}>
				<Route path={'/'} component={Layout}>
					<IndexRoute component={Landing} />
					<Route path={'todos'} component={Todos} />
				</Route>
			</Router>
		</TodosContextProvider>
	);
}
