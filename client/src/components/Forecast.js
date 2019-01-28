import React from 'react';
import Icons from '../icons';

const iconMap = {
	'Scattered Showers': Icons.Umbrella,
	Rain: Icons.Rain,
	Cloudy: Icons.Cloud,
	Sunny: Icons.Sun
};

const styles = {
	padding: '15px',
	margin: '0 10px 10px 0',
	border: '1px solid black',
	textAlign: 'center',
	minWidth: '175px',
	boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
};

const largeStyles = {
	...styles,
	backgroundColor: 'dodgerblue',
	color: 'white',
	border: 'none',
	maxWidth: '250px'
};

export default function Forecast(props) {
	const Icon = iconMap[props.data.text];

	return (
		<div style={props.large ? largeStyles : styles}>
			<div>
				{props.data.day} {props.data.date}
			</div>
			<div style={{ marginBottom: '15px' }}>{props.data.text}</div>
			<Icon />
			<div style={{ marginTop: '15px' }}>High: {props.data.high}°</div>
			<div>Low: {props.data.low}°</div>
		</div>
	);
}
