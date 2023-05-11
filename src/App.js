import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [isChanged,setIsChanged] = useState(false);

  const addUser = (e)=>{
    e.preventDefault();
    setIsChanged(true);
  }

  return (
    <div className="App">
      <Header name={name} isChanged={isChanged}/>
      <div className='main'>
        <Sidebar name={name} isChanged={isChanged}/>
        <Form setEmail={setEmail} setName={setName} addUser={addUser}/>
      </div>
    </div>
  );
}

export default App;
