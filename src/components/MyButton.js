import React from 'react';

const MyButton = (props) => {
	const { items, selected, onChange } = props;
	return (
		<div className="row">
			{items.map((item, index) => (
				<div key={index} className="col">
					<button
						type="button"
						className={
							'btn ' +
							(item.id === selected
								? 'btn-danger'
								: 'btn-primary')
						}
						onClick={() => {
							onChange(item.id);
						}}
					>
						{item.title}
					</button>
				</div>
			))}
		</div>
	);
};
export default MyButton;
