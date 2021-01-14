import  React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Linking } from 'react-native';
import WeatherIcon from './components/icons.js';

export default function App() {

  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [iconCode, setIconCode] = useState('01d');
  const [weatherInfo, setWeatherInfo] = useState('');
  const [tempInfo, setTempInfo] = useState('30');

  async function getWeather() {
    try{
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=07a0baef953a80bd63e028944503d24b`);
      const data = await request.json();
      setIconCode(data.weather[0].icon)
      setWeatherInfo(data.weather[0].description)
      setCountry(data.sys.country)
      setTempInfo((data.main.temp - 273.15).toFixed(1))
    } catch {
      setWeatherInfo("City not found!")
      setCountry("")
    }
  }

  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.textInput}
        placeholder="Enter a city!"
        onChangeText={cityName => { setCountry(""), setCityName(cityName)}}
      />
      <Button 
        onPress={getWeather}
        title="Submit"
      />

      <Text style={styles.container}>
        The current weather in{"\n"}
      </Text>
      <Text style={styles.weather}>
        {cityName}
      </Text>
      <Text style={styles.weather}>
        {country}{"\n"}
      </Text>
      <Text style={styles.container}>
        is{"\n"}
      </Text>
      <Text style={styles.weather}>
        {tempInfo}°C{"\n"}
      </Text>
      <Text style={styles.container}>
        with{"\n"}
      </Text>
      <Text style={styles.weather}>
        {weatherInfo}
      </Text>
      <View>
        <WeatherIcon input={iconCode} />
      </View>
      <Text style={styles.attribution}> 
        Icons made by{" "}
        <Text onPress={() => Linking.openURL('https://www.flaticon.com/authors/freepik')}>
         Freepik{" "}
        </Text>
         from{" "}
        <Text onPress={() => Linking.openURL('https://www.flaticon.com')}>
         www.flaticon.com
      </Text>
      </Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize:20,
  },
  textInput:{
    borderColor:"gray",
    borderWidth:1,
    marginTop:50,
    padding:20,
  },
  weather:{
    fontSize:30,
  },
  attribution:{
    position:'absolute',
    bottom:-200,
    fontSize:10,
  }
});
