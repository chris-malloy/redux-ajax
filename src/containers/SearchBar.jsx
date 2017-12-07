import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import FetchWeather from '../actions/fetchWeather';
import FetchStocks from '../actions/fetchStocks';

class SearchBar extends Component{
    constructor() {
        super();
        this.handleWeather = this.handleWeather.bind(this);
        this.handleStocks = this.handleStocks.bind(this);
    }

    handleWeather(event) {
        event.preventDefault();
        console.log("Someone submitted a zip code.")
        const zipCode = document.getElementById('weather-input').value;
        // why this.props.fetchWeather?
        // from bindActionCreators?
        // what is bindActionCreators?
        this.props.fetchWeather(zipCode);

    }

    handleStocks(event){
        event.preventDefault();
        console.log("Someone submitted a stock.");
        const stockSymbol = document.getElementById('stock-input').value;
        this.props.fetchStocks(stockSymbol)
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Redux/AJAX Practice</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                    </ul>
                    <form onSubmit={this.handleWeather} className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input id="weather-input" type="text" className="form-control" placeholder="Weather Input"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    <form onSubmit={this.handleStocks} className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input id="stock-input" type="text" className="form-control" placeholder="Stock Input"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </nav>
        )
    }
}

// function sent to connect, connect will run later
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchWeather: FetchWeather,
        fetchStocks: FetchStocks,
    }, dispatch)
}

// connect takes 2 params
// 1. state 
// 2. actions
// Pass that function the component
// Why connect to SearchBar?
export default connect(null,mapDispatchToProps)(SearchBar);