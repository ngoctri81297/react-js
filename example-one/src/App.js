import React from 'react';

// http://api.openweathermap.org/data/2.5/forecast?id=1583992
class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            location: '',
            current:'',
          };
        }
    componentDidMount(){
        fetch("http://api.apixu.com/v1/forecast.json?key=5c181a923db44093b4790000191602&q=Danang")
        .then(res=>res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    location: result.location,
                    current: result.current
                })
            },
            (error)=>{
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }
    render() {
        const { error, isLoaded,current,location} = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div id="container">
                <div className="top">
                <img className="wt-img" alt="weather" src={current.condition.icon}></img></div>
                <div className="bottom">
                    <p>Thành phố: {location.name}</p>  <p>Quốc gia:{location.country}</p> <p>Thời gian:{location.localtime}</p>
                    <p>Thời tiết: {current.condition.text}</p>
                </div>
            </div>
          );
        }
      }
    }
export default Weather;