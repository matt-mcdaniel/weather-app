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
		<div style={{ marginRight: '30px' }}>
			<div>
				{props.data.day} {props.data.date}
			</div>
			<div>{props.data.text}</div>
			<Icon />
			<div>High: {props.data.high}</div>
			<div>Low: {props.data.low}</div>
		</div>
	);
}
