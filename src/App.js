import './App.css';
import { useEffect, useState } from 'react';
import getDoggies from './services/getDoggies';

function App() {

  // Initial state
  const [image, setImage] = useState('')
  const [value, setValue] = useState(0)

  useEffect(() => {
    getDoggies()
      .then((res) => {
        console.log(res.data)
        setImage(res.data.message)
      })
      .catch((err) => console.log(err))
  }, [value])


  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt='' />
        <button onClick={() => setValue(value + 1)}>Refresh</button>
      </header>
    </div>
  );
}

export default App;
