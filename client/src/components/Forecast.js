import React from 'react';
import Icons from '../icons';

const iconMap = {
	'Scattered Showers': Icons.Umbrella,
	Rain: Icons.Rain,
	Cloudy: Icons.Cloud,
	Sunny: Icons.Sun
};

export default function Forecast(props) {
	const Icon = iconMap[props.data.text];
	return (
		<div
			style={{
				padding: '15px',
				margin: '10px',
				border: '1px solid dodgerblue',
				textAlign: 'center',
				minWidth: '175px'
			}}
		>
			<div>
				{props.data.day} {props.data.date}
			</div>
			<div style={{ marginBottom: '15px' }}>{props.data.text}</div>
			<Icon />
			<div style={{ marginTop: '15px' }}>High: {props.data.high}</div>
			<div>Low: {props.data.low}</div>
		</div>
	);
}
