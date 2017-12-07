import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stocks extends Component {
    render() {
        console.log(this.props.stocksData)
        if (this.props.stocksData === null) {
            return (
                <h1>What company stock would you like to search?</h1>
            )
        } else {
            console.log(this.props.stockData.data['Time Series (1min)']);
            const stockData = this.props.stockData.data['Time Series (1min)'];
            var stockDataArray = [];
            var count = 0;
            for(var key in stockData){
                if(count == 1){
                    break;
                }
                var count2 = 0;
                for(var key2 in stockData[key]){
                    count2++;
                    stockDataArray.push(<p key2={key2}>{key2}:{stockData[key][key2]}</p>)
                    if(count2 == 5){
                        break;
                    }
                }
                count++;
            }
            return(
                <div>
                    {stockDataArray}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        stocksData: state.stocks
    }
}

export default connect(mapStateToProps)(Stocks);