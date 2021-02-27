import React, { useState, useEffect } from 'react';
import Post from './components/Post/Post'
import './App.css';

function App() {
  const [state, setstate] = useState('');


  // useEffect(() => {
  //  fetch(`https://web.mention.com/api/accounts/{account_id}/alerts/{alert_id}/mentions`)
  // }, []);


  return (
    <div className="App">
        <Post/>
    </div>
  );
}

export default App;
