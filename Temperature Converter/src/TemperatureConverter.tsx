import React, { Component } from 'react';  

interface State {  
  celsius: number;  
  fahrenheit: number;  
}  

class TemperatureConverter extends Component<{}, State> {  
  constructor(props: {}) {  
    super(props);  
    this.state = {  
      celsius: 0,  
      fahrenheit: 32,  
    };  
  }  

  handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    const celsiusValue = parseFloat(event.target.value);  
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;  
    this.setState({ celsius: celsiusValue, fahrenheit: fahrenheitValue });  
  };  

  handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    const fahrenheitValue = parseFloat(event.target.value);  
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;  
    this.setState({ fahrenheit: fahrenheitValue, celsius: celsiusValue });  
  };  

  render() {  
    return (  
      <div>  
        <h1>Temperature Converter</h1>  
        <div>  
          <label>Celsius:</label>  
          <input  
            type="number"  
            value={this.state.celsius}  
            onChange={this.handleCelsiusChange}  
          />  
        </div>  
        <div>  
          <label>Fahrenheit:</label>  
          <input  
            type="number"  
            value={this.state.fahrenheit}  
            onChange={this.handleFahrenheitChange}  
          />  
        </div>  
      </div>
    );  
  }  
}  

export default TemperatureConverter;