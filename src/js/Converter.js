import React from 'react';
import InputField from './InputField';

class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			unit: 'celsius',
		};
		this.toCelsius = this.toCelsius.bind(this);
		this.toFahrenheit = this.toFahrenheit.bind(this);
		this.celsiusOnChange = this.celsiusOnChange.bind(this);
		this.fahrenheitOnChange = this.fahrenheitOnChange.bind(this);
		this.convert = this.convert.bind(this);
	}

	toCelsius(fahrenheit) {
		return ((fahrenheit - 32) * 5) / 9;
	}

	toFahrenheit(celsius) {
		return (celsius * 9) / 5 + 32;
	}

	celsiusOnChange(e) {
		if (parseFloat(e.target.value)) {
			this.setState({
				value: e.target.value,
				unit: 'celsius',
			})}
			else {
				this.setState({
					value: 0,
					unit: 'celsius',
				})
			}
		}
	

	fahrenheitOnChange(e) {
		if (parseFloat(e.target.value)) {
			this.setState({
				value: e.target.value,
				unit: 'fahrenheit',
			});
		} else {
			this.setState({
				value: 0,
                unit: 'fahrenheit',
			})
		}
	}
	convert() {
		let celsius;
		let fahrenheit;
		this.state.unit === 'celsius'
			? (celsius = this.state.value)
			: (celsius = this.toCelsius(this.state.value));
		this.state.unit === 'fahrenheit'
			? (fahrenheit = this.state.value)
			: (fahrenheit = this.toFahrenheit(this.state.value));
		return [Math.round(celsius*10)/10, Math.round(fahrenheit*1000)/1000];
	}

	render() {
		const temperatures = this.convert();
		return (
			<div className='converter'>
				<InputField
					value={temperatures[0]}
					unit='celsius'
					onChange={this.celsiusOnChange}
				/>
				<InputField
					value={temperatures[1]}
					unit='fahrenheit'
					onChange={this.fahrenheitOnChange}
				/>
			</div>
		);
	}
}

export default Converter;
