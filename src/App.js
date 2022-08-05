import './App.css';

import { useState } from 'react';
import { apiKey } from './key.js';
import { Container, Card } from 'semantic-ui-react'; 
import 'semantic-ui-css/semantic.min.css'

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
            <button onClick={() => {getWeatherData();} }>Get data</button>
            <Card>
                <Card.Content>
                    <div>{display}</div>
                </Card.Content>
            </Card>
        </div>
    );
}

export default App;
