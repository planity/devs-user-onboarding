import React from 'react';
import { useTodos, useToggleTodo } from './context';

export default function Todos() {
	const todos = useTodos();
	const toggleTodo = useToggleTodo();
	return (
		<ul>
			{Object.entries(todos).map(([todoId, todo]) => (
				<li
					key={todoId}
					css={[styles.todo, todo.completed && styles.completedTodo]}
					onClick={() => toggleTodo(todoId)}
				>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

const styles = {
	todo: {
		padding: '.75em 1em',
		cursor: 'pointer',
		userSelect: 'none'
	},
	completedTodo: {
		color: 'gray',
		textDecoration: 'line-through'
	}
};
