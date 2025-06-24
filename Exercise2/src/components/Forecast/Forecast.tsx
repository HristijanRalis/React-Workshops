import React, { Component } from "react";

type DayForecast = {
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  speed: number;
  deg: number;
};

type State = {
  data: DayForecast[];
};

export default class Forecast extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount(): void {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast/daily?q=Skopje&units=metric&cnt=7&appid=886705b4c1182eb1c69f28eb8c520e20"
        );
        const data = await response.json();
        this.setState({
          data: data.list as DayForecast[],
        });
      };

      fetchData();
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <table className="Forecast">
          <thead>
            <tr>
              <th>Icon</th>
              <th>weather</th>
              <th>Description</th>
              <th>Morning Temperature</th>
              <th>Night Temperature</th>
              <th>Min. Temperature</th>
              <th>Max. Temperature</th>
              <th>Pressure Humidity</th>
              <th>Wind Speed</th>
              <th>Wind Direction</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((day: DayForecast, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt={day.weather[0].description}
                    />
                  </td>
                  <td>{day.weather[0].main}</td>
                  <td>{day.weather[0].description}</td>
                  <td>{day.temp.morn} °C</td>
                  <td>{day.temp.night} °C</td>
                  <td>{day.temp.min} °C</td>
                  <td>{day.temp.max} °C</td>
                  <td>
                    {day.pressure}hpa / {day.humidity}%
                  </td>
                  <td>{day.speed} m/s</td>
                  <td>{day.deg} °</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
