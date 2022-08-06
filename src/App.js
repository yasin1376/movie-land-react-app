import { useEffect } from 'react';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=20d79642';

const App = () => {

  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <h1>APP</h1>
  );
};

export default App;
