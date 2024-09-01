import { useState, useEffect } from 'react';

function Child() {
	/* private to the component */
	const [count, setCount] = useState(0);
	console.log('rendering - child');

	/* to run side effects  */
	/* side effects are async functions */
	useEffect(function () {
		console.log('mount-child (memory created)');

		/* it also return a func */
		return function () {
			console.log('child - unmounted');
		};
	}, []);

	function incCountChild() {
		setCount(count + 1);
	}

	return <p onClick={incCountChild}>Child - {count}</p>;
}

function App() {
	const [count, setCount] = useState(0);
	const [visible, setVisible] = useState(true);
	console.log('app - rendering');

	useEffect(function () {
		console.log('mount-app (memory created)');
	}, []);

	function incCount() {
		setCount(count + 1);
	}

	return (
		<>
			<h1 onClick={incCount}>App - {count}</h1>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				{visible ? 'Hide' : 'Show'}
			</button>
			{visible && <Child />}
		</>
	);
}

export default App;
