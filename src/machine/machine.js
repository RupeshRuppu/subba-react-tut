import { createMachine } from 'xstate';

const machine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAsqgxgBYCWAdmAHQ7H4BOA9gA6H3lUCuALpAMQCqpALZcwAbQAMAXUShG9WMU7FWMkAA9EAWgAsAJgCcFAIxHdAViPiA7EbNXxANl0AaEAE8thswGYb+gBze+rpG+t5GTgC+ka5omLgEJGzUdEwsbALC3BA8OCIS0kggcgpKKkUaCJpm-hTaevr6ZrraVs2O-mauHlU1FOJG2nbeehYRutGxGNh4RGSUAGrEEGD0FADKLADuZFBYSyv0PAASy2JSqiWKyqSqlb7edeLeDv5Wr1a6vg7diCFGFF05ka-m0-gc4nEX0mIDiM0S8woB1WFFOEF2+zOR029C2BUu8mu5VA9wchn0ESM-k64jMELC2l+CG8ugoQSs-n0bVaFO0tIc0RiIFI9BW8CKcISc3IBNKNzuWmaZmMpgs1ls9icTM0IVZDjMzUGgxaelpMMlsySlBSDGYrDAsqJtwqWlaVhV5ksNjsjhc7i0qoodMG2m8BrJQX85umUqtVBotvS1pEEEdZWdJK0ug5dQMqsh-l0Tn02ss-UGw1GJgcoSs0filsRNrS9oomRTaflLqq2dqDXz4kLxaZpm0dTJHPMA3ZZnr8OliyxneJ6kQo-6QWeAwsSrMjP9VTDxjBAQGDlDVm8LLnscRyLWOJ2pD29+XGdXCDBAL3zSC+m0Th8j8B7rgBXKFmY05cmCN6Nmw96ossGKvkUVzpgqCBGJ8G76Futi2OYe4juIhhtJYPrZtoWGfIKkRAA */
		id: 'Call Machine',
		type: 'parallel',
		states: {
			Microphone: {
				initial: 'Muted',
				states: {
					Muted: {
						entry: 'Mute Microphone',
						on: {
							Unmute: {
								actions: () => {
									console.log('Micrphone unmuted');
								},
								target: 'Unmuted',
							},
						},
					},
					Unmuted: {
						entry: 'Unmute Microphone',
						on: {
							Mute: {
								actions: () => {
									console.log('Micrphone Muted');
								},
								target: 'Muted',
							},
						},
					},
				},
			},
			Video: {
				initial: 'Showing Video',
				states: {
					'Showing Video': {
						on: {
							Hide: {
								actions: () => {
									console.log('Video Hided');
								},
								target: 'Hiding Video',
							},
						},
					},
					'Hiding Video': {
						on: {
							Show: {
								actions: () => {
									console.log('Video Not Hided');
								},
								target: 'Showing Video',
							},
						},
					},
				},
			},
		},
	},
	{
		actions: {
			'Mute Microphone': () => {
				console.log('Microphone is muted');
			},
			'Unmute Microphone': () => {
				console.log('Microphone is unmuted');
			},
		},
	}
);

export { machine };
