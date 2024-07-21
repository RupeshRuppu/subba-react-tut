import React from 'react';
import { useMachine } from '@xstate/react';
import { getStyles } from '../utils/helpers';
import { trafficMachine } from '../machine/trafficMachine';

export default function TrafficLights() {
	const [traffic, sendTraffic] = useMachine(trafficMachine);

	React.useEffect(() => {
		console.log('mounted-traffic-lights');
		let id = setInterval(() => {
			sendTraffic({ type: 'NEXT' });
		}, 1500);
		return () => {
			console.log('unmounted-traffic-lights');
			clearInterval(id);
		};
	}, []);

	return <div style={getStyles(traffic.value)} />;
}
