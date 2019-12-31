import Joke from './Joke';
import Stories from './Stories'
import React, { useState, useEffect } from 'react';

export default function App() {
  const [query, setQuery] = useState("")

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${query}`, '_blank')
  }


  return (
    <div className="App">
      <div className="form">
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div >

  );
}
