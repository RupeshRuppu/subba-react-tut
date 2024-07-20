import { Component } from 'react';

class Child extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log('Child Mounted');
	}

	componentWillUnmount() {
		console.log('Child UnMounted');
	}

	incCountChild = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		console.log('rendering-child');
		return <p onClick={this.incCountChild}>Child - {this.state.count}</p>;
	}
}

/* Inheritance */
class App extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			visible: true,
		};
	}

	componentDidMount() {
		console.log('AppClass Mounted');
	}

	componentWillUnmount() {
		console.log('AppClass Unmounted');
	}

	/* be very careful. */
	incCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		console.log('rendering-App');
		return (
			<>
				<h1 onClick={this.incCount}>App - {this.state.count}</h1>
				<button
					onClick={() => {
						this.setState({ visible: !this.state.visible });
					}}
				>
					{this.state.visible ? 'Hide' : 'Show'}
				</button>
				{this.state.visible && <Child />}
			</>
		);
	}
}

export default App;
