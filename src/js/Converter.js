import React from 'react';
import InputField from './InputField';

class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			celsius: '',
			fahrenheit: '',
		};
		this.toCelsius = this.toCelsius.bind(this);
		this.toFahrenheit = this.toFahrenheit.bind(this);
		this.celsiusOnChange = this.celsiusOnChange.bind(this);
		this.fahrenheitOnChange = this.fahrenheitOnChange.bind(this);
		this.setBorderColor = this.setBorderColor.bind(this);
	}
	toFahrenheit(celsius) {
		return (celsius * 9) / 5 + 32;
	}
	toCelsius(fahrenheit) {
		return ((fahrenheit - 32) * 5) / 9;
	}

	celsiusOnChange(e) {
		if (!Number.isNaN(+e.target.value)) {
			this.setState({
				celsius: +e.target.value,
				fahrenheit: +this.toFahrenheit(e.target.value),
			});
		}
	}

	fahrenheitOnChange(e) {
		if (!Number.isNaN(+e.target.value)) {
			this.setState({
				celsius: +this.toCelsius(e.target.value),
				fahrenheit: +e.target.value,
			});
		}
	}

	setBorderColor() {
		const box = document.getElementById('root');
		box.className = 'container';

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
		const celsius = Math.round(this.state.celsius * 10) / 10;
		const fahrenheit = Math.round(this.state.fahrenheit * 100) / 100;
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
