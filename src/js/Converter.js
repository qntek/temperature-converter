import React from 'react';
import InputField from './InputField';

class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			celsius: 0,
			fahrenheit: 32,
		};
		this.toCelsius = this.toCelsius.bind(this);
		this.toFahrenheit = this.toFahrenheit.bind(this);
		this.celsiusOnChange = this.celsiusOnChange.bind(this);
		this.fahrenheitOnChange = this.fahrenheitOnChange.bind(this);
		this.setBorderColor = this.setBorderColor.bind(this);
	}
	toFahrenheit(celsius) {
		let result = (celsius * 9) / 5 + 32;
		if (isNaN(result)) {
			result = '';
		}
		return Math.round(result * 10) / 10;
	}
	toCelsius(fahrenheit) {
		let result = ((fahrenheit - 32) * 5) / 9;
		if (isNaN(result)) {
			result = '';
		}
		return Math.round(result*100)/100;
	}

	celsiusOnChange(e) {
		this.setState({
			celsius: e.target.value,
			fahrenheit: this.toFahrenheit(e.target.value),
		});
	}

	fahrenheitOnChange(e) {
		this.setState({
			celsius: this.toCelsius(e.target.value),
			fahrenheit: e.target.value,
		});
	}

	setBorderColor() {
		const box = document.getElementById('root');
		box.className = 'container';
		if (this.state.celsius === '' || this.state.fahrenheit === '') {
			return;
		}
		if (this.state.celsius <= 0) {
			box.className = 'container';
			box.classList.add('border-blue');
		} else if (this.state.celsius > 0 && this.state.celsius < 100) {
			box.className = 'container';
			box.classList.add('border-green');
		} else if (this.state.celsius >= 100) {
			box.className = 'container';
			box.classList.add('border-red');
		}
	}

	render() {
		let celsius = this.state.celsius;
		let fahrenheit = this.state.fahrenheit;
		if (celsius === '' || fahrenheit === '') {
			celsius = '';
			fahrenheit = '';
		}
		this.setBorderColor();
		return (
			<div className='converter'>
				<InputField value={celsius} onChange={this.celsiusOnChange} />
				<InputField value={fahrenheit} onChange={this.fahrenheitOnChange} />
			</div>
		);
	}
}

export default Converter;
