import './App.css';
import ContinuousSlider from './Components/slider';
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        <Button variant="contained">Hello World</Button>
        <ContinuousSlider />
    </div>
  );
}

export default App;
