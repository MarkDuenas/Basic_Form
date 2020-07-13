import React, { useState } from 'react';
import './App.css';
import HookForm from './components/HookForm';
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  });
  
  return (
    <div className="App">
      <HookForm inputs = {state} setInputs = {setState} />
      <Results data = {state} />
    </div>
  );
}

export default App;
