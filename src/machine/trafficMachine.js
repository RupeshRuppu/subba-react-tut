import { createMachine } from 'xstate';

export const trafficMachine = createMachine({
	initial: 'red',
	states: {
		red: {
			on: {
				NEXT: {
					target: 'yellow',
				},
			},
		},
		yellow: {
			on: {
				NEXT: {
					target: 'green',
				},
			},
		},
		green: {
			on: {
				NEXT: {
					target: 'red',
				},
			},
		},
	},
});
