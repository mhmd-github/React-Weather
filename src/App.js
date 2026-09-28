import React, { Component } from 'react'
import './App.css';
import Weather from './Components/Weather'
import Form from './Components/Form'


class App extends Component {

  state = {
    country: '',
    ctiy: '',
    temp: '',
    error: ''
  }

  Getweather = async (e) => {
    e.preventDefault()
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`)
    const data = await api.json()
    if (country && city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        error: ''
      })
    }
    else {
      this.setState({
        error: 'No Data'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="contianer">
          <Form Getweather={this.Getweather} />
          <Weather temp={this.state.temp} country={this.state.country} city={this.state.city} error={this.state.error} />
        </div>
      </div>
    );
  }
}

export default App;
