import Persons from './Persons'
import './App.css'
import PersonForm from './PersonForm'
import { usePersons } from './persons/customHooks'
import { useState } from 'react';
import { Notify } from './Notify';
import PhoneForm from './PhoneForm';


function App() {
  const { data, error, loading } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }

  if (loading) return <><h1>Loading</h1></>;
  if (error) return <><h1 style="color: red;">{error}</h1></>
  
  return (
    <div className="App">
      <Notify errorMessage={errorMessage} />
      <h1>Grapqhl + React</h1>
      <Persons persons={data?.allPersons}></Persons>
      <PersonForm notifyError={notifyError} />
      <PhoneForm notifyError={notifyError} />
    </div>
  )
}

export default App
