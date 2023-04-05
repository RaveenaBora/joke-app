import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://jokeapi-v2.p.rapidapi.com/joke/Any', {
        headers: {
            'X-RapidAPI-Key': 'feabf2d633msh5c14f92e1b7b885p186e52jsnb12e6dec26cc',
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
          }
      });

      setJoke(response.data.setup ? `${response.data.setup} ${response.data.delivery}` : response.data.joke);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="joke-container">
      <h2>Joke of the Day</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get another joke</button>
    </div>
  );
};

export default JokeFetcher;