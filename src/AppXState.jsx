import React from 'react';
import Counter from './components/Counter';
import TrafficLights from './components/TrafficLights';
import Todos from './components/Todos';
import { Flex, Divider } from 'antd';
import './App.css';
import Cmp from './components/Cmp';

function AppXState() {
	return (
		<div className="App">
			<Flex gap={10} vertical>
				<Counter />
				<TrafficLights />
				<Todos />
			</Flex>
			<Divider dashed />
			<Cmp />
		</div>
	);
}

export default AppXState;
