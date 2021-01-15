import  React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Linking } from 'react-native';
import WeatherIcon from './components/icons.js';

export default function App() {

  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [iconCode, setIconCode] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');
  const [tempInfo, setTempInfo] = useState('30');

  async function getWeatherByCity(city) {
    try{
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07a0baef953a80bd63e028944503d24b`);
      const data = await request.json();
      setIconCode(data.weather[0].icon)
      setWeatherInfo(data.weather[0].description)
      setCountryCode(data.sys.country)
      getCountryName(data.sys.country)
      setTempInfo((data.main.temp - 273.15).toFixed(1))
    } catch {
      setWeatherInfo('')
      setCountry('')
      setIconCode('')
      setTempInfo('')
    }
  }

  async function getWeatherByCountry(country) {
    try{
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=07a0baef953a80bd63e028944503d24b`);
      const data = await request.json();
      setIconCode(data.weather[0].icon)
      setWeatherInfo(data.weather[0].description)
      setCountryCode(data.sys.country)
      getCountryName(data.sys.country)
      setTempInfo((data.main.temp - 273.15).toFixed(1))
    } catch {
      setWeatherInfo('')
      setCountry('')
      setIconCode('')
      setTempInfo('')
    }
  }
  
  async function getCountryName(countryAbbr) {
    try{
    const request = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${countryAbbr}`)
    const data = await request.json();
    setCountry(data[0].name)
  } catch {
    console.log("country name issue")
  }}

  function mainText() {
    if (cityName) {
      return <View style={styles.container}>    
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
        <WeatherIcon input={iconCode} />
    </View>
    }

  }

  return (
    <View style={styles.container}>

      <Text 
          style={styles.title}>
          I'd Rather Be In
      </Text>     

      <TextInput 
        style={styles.textInput}
        textAlign={'center'}
        placeholder="Enter a city!"
        onChangeText={input => { setCityName(input), getWeatherByCity(input) } }
      />

      <TextInput 
        style={styles.textInput}
        textAlign={'center'}
        placeholder={country}
        onChangeText={input => { setCountry(input), getWeatherByCountry(input) } }
      />  

      {mainText()}

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
  title:{
    fontSize:50,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize:20,
  },
  textInput:{
    borderColor:"gray",
    borderWidth:1,
    padding:20,
    alignItems:'center'
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
