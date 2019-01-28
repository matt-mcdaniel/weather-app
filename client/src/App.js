import React, { Component } from 'react';
import { toUrlFormat } from './lib/util';
import { loadFromStorage, saveToStorage } from './lib/localStorage';
import Forecast from './components/Forecast';
import SelectCity from './components/SelectCity';

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
		const cityIdFromLocalStorage = loadFromStorage('cityId');

		if (cityIdFromLocalStorage) {
			this.fetchForecast(cityIdFromLocalStorage);

			this.setState({
				activeCityId: cityIdFromLocalStorage
			});
		} else {
			this.fetchForecast(this.state.activeCityId);
		}
	}

	getCityById = cityId => {
		return this.state.cities.find(city => city.id === cityId);
	};

	fetchForecast = async cityId => {
		const cityData = this.getCityById(cityId);

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
		const todaysWeather = this.state.forecast[0];
		const forecastWeather = this.state.forecast.slice(1);

		return (
			<div style={{ padding: '45px' }}>
				<label>
					Select a City{' '}
					<SelectCity
						activeId={this.state.activeCityId}
						handleChange={this.handleChangeCity}
						cities={this.state.cities}
					/>
				</label>
				{hasForecastData && (
					<div>
						<div style={{ marginBottom: '10px' }}>
							Today's Weather
						</div>
						<Forecast large data={todaysWeather} />
						<div
							style={{ marginBottom: '10px', marginTop: '30px' }}
						>
							10 Day Forecast
						</div>
						<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
							{forecastWeather.map(weather => {
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
