import React, { Component } from 'react';
import { toUrlFormat } from './lib/util';
import { loadFromStorage, saveToStorage } from './lib/localStorage';
import Forecast from './components/Forecast';

class App extends Component {
	state = {
		activeCityId: '1',
		cities: [],
		forecast: []
	};

	async componentDidMount() {
		const response = await fetch('/api/cities');
		const data = await response.json();

		this.setState({
			cities: data
		});

		/**
		 * Check if user has previously selected
		 * a city, load corresponding forecast data
		 */
		const cityId = loadFromStorage('cityId');

		if (cityId) {
			this.fetchForecast(cityId);
			this.setState({
				activeCityId: cityId
			});
		}
	}

	getCityById = cityId => {
		return this.state.cities.find(city => city.id === cityId);
	};

	fetchForecast = async cityId => {
		const cityData = this.getCityById(cityId);
		// fetch Yahoo API
		const response = await fetch(
			`/api/forecast?location=${toUrlFormat(
				cityData.city,
				cityData.region
			)}`
		);
		const data = await response.json();

		this.setState({
			forecast: data.forecast
		});
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
				<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
					{this.state.forecast.map(weather => {
						return <Forecast key={weather.date} data={weather} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
