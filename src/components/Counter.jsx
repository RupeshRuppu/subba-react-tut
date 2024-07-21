import { useMachine } from '@xstate/react';
import { Button, Flex } from 'antd';
import { counterMachine } from '../machine/counterMachine';

export default function Counter() {
	const [state, send] = useMachine(counterMachine);
	return (
		<Flex gap={10} style={{ maxWidth: 100 }}>
			<h2>Counter</h2>
			<Button type="primary" onClick={() => send({ type: 'INC' })}>
				INC
			</Button>
			<p style={{ fontSize: 26 }}>{state.context.count}</p>
			<Button type="primary" onClick={() => send({ type: 'DEC' })}>
				DEC
			</Button>
		</Flex>
	);
}
