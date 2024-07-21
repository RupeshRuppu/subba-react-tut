import { Button, Flex } from 'antd';
import { useMachine } from '@xstate/react';
import { todoMachine } from '../machine/todoMachine';

export default function Todos() {
	const [todos, sendT] = useMachine(todoMachine);

	return (
		<Flex vertical gap={10}>
			<h2>Todos</h2>
			{todos.context.todos.map(todo => {
				return (
					<p
						key={todo}
						onClick={() => {
							sendT({ type: 'REMOVE', payload: todo });
						}}
					>
						{JSON.stringify(todo)}
					</p>
				);
			})}
			<Button
				type="primary"
				onClick={() =>
					sendT({ type: 'ADD_TODO', payload: Math.random() * 1000 })
				}
			>
				ADD TODO
			</Button>
		</Flex>
	);
}
