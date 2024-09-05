import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

let url = 'https://jsonplaceholder.typicode.com/users/1';

function Subba() {
	const [loading, setLoading] = useState(false); /* pending */
	const [userData, setUserData] = useState(null); /* fullfilled */
	const [error, setError] = useState(''); /* reject */

	useEffect(() => {
		fetchUserData();
	}, []);

	async function fetchUserData() {
		try {
			setLoading(true);
			const resp = await fetch(url);
			if (resp.ok) {
				const json = await resp.json();
				setUserData(json);
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div>
			{loading ? (
				<Spin size="large" />
			) : error ? (
				<p>ERROR:{error}</p>
			) : (
				<pre style={{ fontSize: 16 }}>{JSON.stringify(userData, null, 4)}</pre>
			)}
		</div>
	);
}

export default Subba;
