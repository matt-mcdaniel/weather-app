import React, { Component } from 'react';
import { first, last, lower, splitBy } from './lib/util';
import { loadFromStorage, saveToStorage } from './lib/localStorage';

class App extends Component {
	state = {
		activeCityId: '1'
	};

	async componentDidMount() {
		const cityId = loadFromStorage('cityId');

		if (cityId) {
			this.fetchForecast(cityId);
			this.setState({
				activeCityId: cityId
			});
		}

		const response = await fetch('/api/cities');
		const data = await response.json();

		console.log(data); // array of cities

		this.setState({
			cities: data
		});
	}

	fetchForecast = cityId => {
		// fetch Yahoo API
	};

	handleChangeCity = e => {
		const cityId = e.target.value;
		saveToStorage('cityId', cityId);
		this.setState({
			activeCityId: cityId
		});
	};

	render() {
		if (!this.state.cities) {
			return <div>Loading...</div>;
		}

		return (
			<div style={{ padding: '45px' }}>
				<select
					onChange={this.handleChangeCity}
					value={this.state.activeCityId}
				>
					{this.state.cities.map(cityData => {
						return (
							<option key={cityData.id} value={cityData.id}>{`${
								cityData.city
							}, ${cityData.region}`}</option>
						);
					})}
				</select>
			</div>
		);
	}
}

export default App;
