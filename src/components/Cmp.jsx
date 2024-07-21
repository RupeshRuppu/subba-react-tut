import { useMachine } from '@xstate/react';
import { machine } from '../machine/machine';
import { Button, Flex } from 'antd';

function Cmp() {
	const [state, send] = useMachine(machine);
	const microPhone = state.value['Microphone'];
	const videoState = state.value['Video'];
	return (
		<div>
			<p>Microphone State</p>
			<pre style={{ marginBottom: '2rem' }}>
				{JSON.stringify(microPhone, null, 2)}
			</pre>

			<p>Video State</p>
			<pre style={{ marginBottom: '2rem' }}>
				{JSON.stringify(videoState, null, 2)}
			</pre>

			<Flex vertical style={{ maxWidth: 200 }} gap={3}>
				<Button
					type="primary"
					onClick={() => {
						send({ type: microPhone === 'Muted' ? 'Unmute' : 'Mute' });
					}}
				>
					{microPhone === 'Muted' ? 'Unmute' : 'Mute'}
				</Button>

				<Button
					type="primary"
					onClick={() => {
						send({ type: videoState === 'Showing Video' ? 'Hide' : 'Show' });
					}}
				>
					{videoState === 'Showing Video' ? 'Hide' : 'Show'}
				</Button>
			</Flex>
		</div>
	);
}

export default Cmp;
