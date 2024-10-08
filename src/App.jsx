import { useState, version } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [number, setNumber] = useState();
  const [location, setLocation] = useState();
  const [summary, setSummary] = useState();

  return (
    <div className='container'>
      <div className='header'>
        <h1>Resume Generator</h1>
      </div>
      <div className='user-input'>
        <div className='Personal Information'>
          <h4>First name</h4>
          <input type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          <h4>Last Name</h4>
          <input type='text' value={lastName} onChange={(event) => setLastName(event.target.value)} />
          <h4>Title</h4>
          <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className='contact'>
          <h2>Contact Information</h2>

          <h4>Email</h4>
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <h4>Phone number</h4>
          <input type='text' value={number} onChange={(event) => setNumber(event.target.value)} />
          <h4>Location</h4>
          <input type='text' value={location} onChange={(event) => setLocation(event.target.value)} />
        </div>
        <div>
          <h2>Summary</h2>
          <input type='text' value={summary} onChange={(event) => setSummary(event.target.value)} />
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
          <h2>Langauges</h2>
        </div>
        <div>
          <h2>References</h2>
        </div>
      </div>

      <div className='resume-container'>
        <div className='left-side'></div>
        <div className='right-side'></div>
      </div>
    </div>
  );
}

export default App;
