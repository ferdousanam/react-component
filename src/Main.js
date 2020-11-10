import React, { useState } from 'react';
import MyButton from './components/MyButton';
import './assets/css/bootstrap.min.css';

const products = [
	{ id: 1, title: 'Product 1', price: 100 },
	{ id: 2, title: 'Product 2', price: 200 },
	{ id: 3, title: 'Product 3', price: 300 },
	{ id: 4, title: 'Product 4', price: 400 },
	{ id: 5, title: 'Product 5', price: 500 },
	{ id: 6, title: 'Product 6', price: 600 },
	{ id: 7, title: 'Product 7', price: 700 },
	{ id: 8, title: 'Product 8', price: 800 },
];

export const Main = () => {
	const [selectedItemId, setSelectedItemId] = useState(1);
	const onChangeButton = (value) => {
		console.log(value);
		setSelectedItemId(value);
	};
	return (
		<div className="container mt-5">
			<div className="border" style={{ height: 'calc(100vh - 100px)' }}>
				<div className="text-center align-middle">
					<h1 className="p-4 bg-secondary border">
						My Custom Button Component
					</h1>
					<br />
					<br />
					<MyButton
						items={products}
						selected={selectedItemId}
						onChange={onChangeButton}
					/>
				</div>
				<br />
				<br />
				<div className="text-center">
					<button
						type="button"
						style={{ 'font-size': '50px' }}
						className="btn btn-secondary px-5 py-3 m-3"
						onClick={() => setSelectedItemId(selectedItemId - 1)}
					>
						-
					</button>
					<button
						type="button"
						style={{ 'font-size': '50px' }}
						className="btn btn-warning px-5 py-3 m-3"
						onClick={() => setSelectedItemId(selectedItemId + 1)}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};
