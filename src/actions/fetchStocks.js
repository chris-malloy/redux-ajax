import axios from 'axios';

const API_KEY = '71S4P1X1OUODZLR7';
const stockURL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=${API_KEY}`;

export default function (stockSymbol) {
    return {
        type: 'GET_STOCKS', 
    }
}