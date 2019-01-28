import React from 'react';

export default function SelectCity(props) {
	return (
		<select
			onChange={props.handleChange}
			value={props.activeId}
			style={{
				margin: '15px 0 30px',
				display: 'block',
				fontSize: '15px',
				borderColor: 'dodgerblue',
				height: '40px',
				minWidth: '250px'
			}}
		>
			{props.cities.map(cityData => {
				return (
					<option key={cityData.id} value={cityData.id}>{`${
						cityData.city
					}, ${cityData.region}`}</option>
				);
			})}
		</select>
	);
}
