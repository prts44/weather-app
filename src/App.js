import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { apiKey } from './key.js';

function App() {

    const [data, setData] = useState(null);
    const [display, setDisplay] = useState(<></>);

    function getWeatherData() {
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + 'Canada' + '/today?unitGroup=us&key=' + apiKey + '&contentType=json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data); 
                setData(data);
                setDisplay(<>
                    <p>{data.latitude}</p>
                    <p>{data.longitude}</p>
                    <p>{data.address}</p>
                </>);
            });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={() => {getWeatherData();} }>Get data</button>
                {display}
            </header>
        </div>
    );
}

export default App;
