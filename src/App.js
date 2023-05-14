import React, { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Fix: use square brackets instead of curly braces for destructuring assignment

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
        return null; // Fix: add a default return value if the condition is not met
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
