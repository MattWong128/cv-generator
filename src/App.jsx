import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(0);

  return (
    <>
      <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
      <p>{text}</p>
      {console.log('sdf')}
    </>
  );
}

export default App;
