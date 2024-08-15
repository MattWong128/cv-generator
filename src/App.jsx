import { useState, version } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [location, setLocation] = useState();

  return (
    <div className='container'>
      <div className='header'>
        <h1>Resume Generator</h1>
      </div>
      <div className='user-input'>
        <div className='personal-details'>
          <h2>Personal Details</h2>
          <h4>Name</h4>
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
          <h4>Email</h4>
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <h4>Phone number</h4>
          <input type='text' value={number} onChange={(event) => setNumber(event.target.value)} />
          <h4>Location</h4>
          <input type='text' value={location} onChange={(event) => setLocation(event.target.value)} />
        </div>
        <div>
          <h2>Summary</h2>
        </div>
        <div>
          <h2>Education</h2>
        </div>
        <div>
          <h2>Work Experience</h2>
        </div>
        <div>
          <h2>Skills</h2>
        </div>
        <div>
          <h2>Certifications</h2>
        </div>
      </div>

      <div className='resume-container'></div>
    </div>
  );
}

export default App;
