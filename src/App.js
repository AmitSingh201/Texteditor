// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Textme from "./Component/Text";
import React, { useState } from 'react'
import Alert from './Component/Alert'


function App() {

  const [mode, setmode] = useState('light')
  const [alert ,setalert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setmode('light')
      document.body.style.backgroundcolor = 'white';
    }
  }


  return (
    <>

      <Navbar title="social" mode={mode} toggleMode={toggleMode} />
      <Alert alert="this is me call me by my name" />
      {/* <Lefttext/> */}
      <div className="container my-3"  >
        <Textme hedding="write your Quries" mode={mode} />
      </div>


    </>
  );
}

export default App;
