import { createMachine, assign } from 'xstate';

export const todoMachine = createMachine({
	context: {
		todos: [],
	},
	on: {
		ADD_TODO: {
			actions: assign(({ context, event: { payload } }) => {
				return {
					todos: [...context.todos, payload],
				};
			}),
		},
		REMOVE: {
			actions: assign(({ context, event: { payload } }) => {
				return {
					todos: context.todos.filter(todo => todo !== payload),
				};
			}),
		},
	},
});
