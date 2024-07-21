import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppClass from './AppClass.jsx';
import AppXState from './AppXState.jsx';
import './index.css';

const rootEle = document.getElementById('root');

ReactDOM.createRoot(rootEle).render(
	<>
		<AppXState />
	</>
);
