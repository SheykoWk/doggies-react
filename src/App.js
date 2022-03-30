import './App.css';
import { useEffect, useState } from 'react';
import getDoggies from './services/getDoggies';

function App() {

  // Initial state
  const [image, setImage] = useState('')


  useEffect(() => {
    getDoggies().then((res) => {
      console.log(res.data)
      setImage(res.data.message)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt='' />
      </header>
    </div>
  );
}

export default App;
