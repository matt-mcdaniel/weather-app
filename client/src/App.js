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

		this.fetchForecast(cityId);
	};

	render() {
		const hasForecastData = !!this.state.forecast.length;

		if (!this.state.cities) {
			return <div>Loading...</div>;
		}

		return (
			<div style={{ padding: '45px' }}>
				<label>
					Select a City{' '}
					<select
						onChange={this.handleChangeCity}
						value={this.state.activeCityId}
						style={{
							margin: '15px 0 30px',
							display: 'block',
							fontSize: '15px',
							borderColor: 'dodgerblue',
							height: '40px',
							minWidth: '250px'
						}}
					>
						{this.state.cities.map(cityData => {
							return (
								<option
									key={cityData.id}
									value={cityData.id}
								>{`${cityData.city}, ${
									cityData.region
								}`}</option>
							);
						})}
					</select>
				</label>
				{hasForecastData && (
					<div>
						<div style={{ marginBottom: '10px' }}>
							10 Day Forecast
						</div>
						<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
							{this.state.forecast.map(weather => {
								return (
									<Forecast
										key={weather.date}
										data={weather}
									/>
								);
							})}
						</div>
					</div>
				)}
				{!hasForecastData && (
					<div style={{ color: 'rosybrown' }}>
						No Forecast Data Available
					</div>
				)}
			</div>
		);
	}
}

export default App;
