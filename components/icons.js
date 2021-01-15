import  React from 'react';
import { View, Image } from 'react-native';

export default class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    iconsList = {
        //Daytime
        "01d": require('../assets/icons/3815223-weather/png/044-sunny.png'), //clear
        "02d": require('../assets/icons/3815223-weather/png/010-cloudy day.png'), //few cloudy
        "03d": require('../assets/icons/3815223-weather/png/026-cloud.png'), //scattered clouds
        "04d": require('../assets/icons/3815223-weather/png/006-cloudy day.png'), //broken clouds
        "09d": require('../assets/icons/3815223-weather/png/035-rainy day.png'), //shower rain
        "10d": require('../assets/icons/3815223-weather/png/023-rain.png'), //rain
        "11d": require('../assets/icons/3815223-weather/png/034-rain.png'), //thunderstorm
        "13d": require('../assets/icons/3815223-weather/png/018-snowfall.png'), //snow
        "50d": require('../assets/icons/3815223-weather/png/013-hail.png'), //mist
        //Nighttime
        "01n": require('../assets/icons/3815223-weather/png/002-full moon.png'), //clear
        "02n": require('../assets/icons/3815223-weather/png/005-cloudy night.png'),//few clouds
        "03n": require('../assets/icons/3815223-weather/png/005-cloudy night.png'),//scattered clouds
        "04n": require('../assets/icons/3815223-weather/png/005-cloudy night.png'),//broken clouds
        "09n": require('../assets/icons/3815223-weather/png/014-rainy night.png'),//shower rain
        "10n": require('../assets/icons/3815223-weather/png/014-rainy night.png'),//rain
        "11n": require('../assets/icons/3815223-weather/png/034-rain.png'),//thunderstorm
        "13n": require('../assets/icons/3815223-weather/png/018-snowfall.png'),//snow
        "50n": require('../assets/icons/3815223-weather/png/043-hail.png'),//mist
    }  

    render(){
    return(
        <View>
            <Image 
                style={{"width":75,"height":75}}
                source={this.iconsList[this.props.input]}
            />
        </View>
    )
    }
}