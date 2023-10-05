import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const today = new Date (Date.now()).toISOString().slice(0,10);
  const [apod, setApod] = useState({})
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "cMhqTCfx1rbh7BBTz68INQK6Y2WbyMrF3Mtqx2uw"
  const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/574px-NASA_logo.svg.png";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data)
    };
    getApod()
  }, [date])

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString())
  }



  return (
    <div className="app">
      <h2 className="title">
        Nasa API <img src={logo} alt="NASA logo" className='logo'/>
        </h2>
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      { date > today ? (
        <h2>Please choose a previous date</h2>
      ) : (
        <Figure data={apod} />
      )}
      <div className="standard-dialog enter">
        <h1 className="dialog-text">F.Romero - 2023 <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
      </div>
    </div>
  )
}

export default App


//https://github.com/lethamburn/fundacion_once/blob/main/React/26.music/src/components/Main/Main.jsx