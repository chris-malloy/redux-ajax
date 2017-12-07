import React, { Component } from 'react';
import { connect } from 'react-redux';


class Weather extends Component{
    render(){
        console.log(this.props.weatherData)
        if(this.props.weatherData === null){
            return(
                <h1>What would you like to look up?</h1>
            )
        } else if(this.props.weatherData.code === 500){
            return(
                <h1>{this.props.weatherData.msg}</h1>
            )
        } else {
            const weatherInfo = this.props.weatherData.data;
            const temp = weatherInfo.main.temp;
            const icon = weatherInfo.weather[0].icon;
            const city = weatherInfo.name;
            const weatherDescription = weatherInfo.weather[0].description;
            if (this.props.weatherData === undefined){
                return(
                    <div>
                        <h1>Please enter a valid zip code.</h1>
                    </div>
                )
            }
            return(
                <div>
                    <h1>The weather in {city} is currently {temp}.</h1>
                    <h1>You can expect {weatherDescription}</h1>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return{
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(Weather);