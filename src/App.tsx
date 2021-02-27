import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Post from './components/Post/Post'
import './App.css';

function App() {
  const [mentionsPosts, setMentionsPosts] = useState([])
    
  const options: AxiosRequestConfig = useMemo(() => {
   return {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN_ACCESS}`,
        'Access-Control-Allow-Methods': "DELETE, POST, GET, OPTIONS",
      }
    }
  }, [])
  
  const fetchMentions = useCallback(() =>  {
    axios.get(`http://localhost:8081/api/accounts/${process.env.REACT_APP_MENTION_ACCOUNT_ID}/alerts/${process.env.REACT_APP_ALERT_ID}/mentions`, options)
      .then(response => {
        return setMentionsPosts(response.data.mentions)
      })
      .catch(err => console.log(err))
  },[options])

  useEffect(() => {
    fetchMentions();
  }, [fetchMentions]);

  return (
    <div className="App">
      {mentionsPosts !== [] && (
        mentionsPosts.map(mention => {
          return <Post key={mention.id} mention={mention} />
        })
      )}
    </div>
  );
}

export default App;
