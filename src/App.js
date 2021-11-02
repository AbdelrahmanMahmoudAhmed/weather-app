import './App.css';
import  {useState} from 'react';
import Inputs from './Components/Inputs/Inputs';
import Outputs from './Components/Outputs/Outputs';
import styled from "styled-components";

const AppHolder = styled.div`
background-color : #eee;
height:100vh;
display:flex;
flex-direction: column;
padding: 100px 0 10px;
align-items: center;
justify-content: space-around;
background-image: linear-gradient(#ff00005c,#ffff007a,#0000ff57);
-webkit-background-image: linear-gradient(#ff00005c,#ffff007a,#0000ff57);
-moz-background-image: linear-gradient(#ff00005c,#ffff007a,#0000ff57);
-o-background-image: linear-gradient(#ff00005c,#ffff007a,#0000ff57);
position: relative;
`
const Title = styled.div`
position: absolute;
top: 20px;
background-color: #fff3;
padding: 10px 15px;
border-radius: 10px;
border: 1px solid #64644824;
color: #c54d4d;
font-size: 43px;
font-weight: 700;

`

function App() {

  const apiKey="fa9ccf4907a9eee762b0530799cf2745";

  const [country , setCountry] = useState('')
  const [cityName , setCityName] = useState('')
  const [description , setDescription] = useState('')
  const [temp , setTemp] = useState('')
  const [humidity , setHumidity] = useState('')
  const [pressure , setPressure] = useState('')
  const [error , setError] = useState('')

  const handelDisply = () => {

    if( country ==='' && error === ''){
      return 'none'
    }else{
      return 'flex'
    }
  }


  const handelSubmit = async (e)=>{
    
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const fetchData =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}&units=metric`);
    const getData = await  fetchData.json();

    
    if(getData.cod === '404' ){
      setError(getData.message)
    }else if(city && country ){
      setDescription(getData.weather[0].description)
      setTemp(getData.main.temp)
      setHumidity(getData.main.humidity)
      setPressure(getData.main.pressure)
      setCountry(getData.sys.country)
      setCityName(getData.name)
      setError('')
    }else{
      setError('the input is not valid')
      setDescription('')
      setTemp("")
      setHumidity("")
      setPressure("")
      setCountry("")
      setCityName("")
    }
  }

  

  return (
    <AppHolder>
      <Title> weather App </Title>
        <Inputs handelSubmit={handelSubmit}  />
        <Outputs
            cityName = {cityName}
            country = {country}
            description={description}
            temp={temp}
            humidity={humidity}
            pressure={pressure}
            error={error}
            handelDisply={handelDisply}
        />
    </AppHolder>
  );
}

export default App;
