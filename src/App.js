import React,{useState} from 'react';
import './App.css'; 
import Input from './components/Input';
import axios  from 'axios';
import Result from './components/result';

function App() {

 const [input,setinput] = useState("")
 const [temp, setTemp] = useState("")
 const [dis, setDis] = useState("")
 const [icon, seticon] = useState("")


 const findweather = async()=>{
  const apikey = "f5c22508eccb3b0b27e2004ee163bed3"
  const unit = "metric"
  const url ="http://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikey+"&units="+unit
  const response = await axios.get(url)
  console.log(response)
  const temp = await response.data.main.temp
  const description = await response.data.weather[0].description
  const icon =  await response.data.weather[0].icon
  const imageUrl = "https://openweathermap.org/img/wn/"+ icon + "@2x.png" ;

  console.log(temp,description,imageUrl)
 
  setTemp(temp)
  setDis(description)
  seticon(imageUrl) 
  setinput("")

 }
  return (
    <div className="App"> 
    { temp ===""?(
      <Input input={input} setinput={setinput} findweather={findweather}/>)

      :(<Result temp={temp} dis={dis} icon={icon} setTemp={setTemp}/>)}
      
    </div>
    );
}

export default App;
