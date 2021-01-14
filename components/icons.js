import  React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Linking } from 'react-native';

export default class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    iconCode = this.props.input

    getIcon(iconCode) {
        return this.iconsList.iconCode
    }

    iconsList = {
        //Daytime
        "01d": "./assets/icons/png/044-sunny.png", //clear
        "02d": "./assets/icons/png/010-cloudy day.png", //few cloudy
        "03d": "./assets/icons/png/026-cloud.png", //scattered clouds
        "04d": "./assets/icons/png/006-cloudy day.png", //broken clouds
        "09d": "./assets/icons/png/035-rainy day.png", //shower rain
        "10d": "./assets/icons/png/023-rain.png", //rain
        "11d": "./assets/icons/png/034-rain.png", //thunderstorm
        "13d": "./assets/icons/png/018-snowfall.png", //snow
        "50d": "./assets/icons/png/013-hail.png", //mist
        //Nighttime 
        "01n": "./assets/icons/png/002-full moon", //clear
        "02n": "./assets/icons/png/005-cloudy night.png",//few clouds
        "03n": "./assets/icons/png/005-cloudy night.png",//scattered clouds
        "04n": "./assets/icons/png/005-cloudy night.png",//broken clouds
        "09n": "./assets/icons/png/014-rainy night.png",//shower rain
        "10n": "./assets/icons/png/014-rainy night.png",//rain
        "11n": "./assets/icons/png/034-rain.png",//thunderstorm
        "13n": "./assets/icons/png/018-snowfall.png",//snow
        "50n": "./assets/icons/png/043-hail.png",//mist
    }

    render(){
    return(
        <View>
            <Image 
            source={{
                uri: this.getIcon(this.iconCode)
            }}/>
        </View>
    )
    }
}