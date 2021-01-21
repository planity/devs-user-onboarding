import React, { createContext, useContext, useMemo, useState } from 'react';
import produce from 'immer';

const INITIAL_STATE = {
	status: 'loaded',
	todos: {
		id1: {
			title: 'Todo 1',
			completed: true,
			sort: 1
		},
		id3: {
			title: 'Todo 3',
			completed: false,
			sort: 3
		},
		id2: {
			title: 'Todo 2',
			completed: false,
			sort: 2
		}
	}
};

const TodosContext = createContext({
	status: 'loaded',
	todos: {},
	setState: () => console.warn('Missing TodosContext provider')
});

export function TodosContextProvider({ children }) {
	const [state, setState] = useState(INITIAL_STATE);
	const value = useMemo(
		() => ({
			...state,
			setState
		}),
		[state]
	);
	return (
		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
	);
}

export function useTodos() {
	const state = useContext(TodosContext);
	return Object.entries(state.todos || {})
		.sort(([, x], [, y]) => x.sort - y.sort)
		.reduce((todos, [todoId, todo]) => {
			todos[todoId] = todo;
			return todos;
		}, {});
}

export function useUncompletedTodosCount() {
	const todos = useTodos();
	return Object.values(todos).filter(todo => !todo.completed).length;
}

export function useToggleTodo() {
	const { setState } = useContext(TodosContext);
	return todoId =>
		setState(({ todos }) => {
			const nextTodos = produce(todos, draft => {
				draft[todoId].completed = !draft[todoId].completed;
			});
			return { todos: nextTodos };
		});
}
