import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/574px-NASA_logo.svg.png";

  return (
    <>
    <div>hola</div>
      <Outlet />
    </>
  )
}

export default App


//https://github.com/lethamburn/fundacion_once/blob/main/React/26.music/src/components/Main/Main.jsx