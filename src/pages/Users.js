import React, { useEffect, useState } from 'react';

function Users() {
	const [first, setfirst] = useState('ali');
	const [users, setUsers] = useState([]);

	// useEffect ise component doma basıldığında tetiklenen bir hook
	// apiden veri çekmek için idealdir. 1 kereye mahsus çalışır.
	useEffect(() => {
		console.log('useEffect-1');

		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers([...data]);
			});
	}, []); // [] şeklinde kullandığımızda ise component doma yüklenirken 1 kez tetiklenir.

	// component doma girdiğinde tetiklenir. class componentlerde didmount

	// component didupdate first state değiştirince tetiklenir.
	useEffect(() => {
		console.log('useEffect-2');
	}, [first]);

	// useEffect(() => {
	// 		console.log('useEffect-2');
	// 	}, [second,first]); // Hem second hemde first deki değişikliği takip eder. İkisinden herhangi birinde değişiklik olduğunda tetiklenir.

	// useEffect(() => {
	// 	console.log('useEffect-3');
	// }); // Her durumda tetiklenir. sonsuz loop gibi olur. dikkat edelim.

	const changeName = () => {
		setfirst('muhammed');
	};

	return (
		<div>
			{/* {first}
			<button onClick={changeName}>Change Name</button> */}
			<ul>
				{users.map((item) => {
					return (
						<li key={item.id}>
							{item.username} {item.email}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Users;
