import React, { useState, useEffect } from 'react';
import MonstersList from './components/monster-list/monster-list.component';
import Seach from './components/search/searc.component';
import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const loadData = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    setMonsters( await response.json());
  }
  
  useEffect( 
    () => {
      loadData();
    }
    ,[]);

  function filterMonsters(e)  {
    setSearchField( e.target.value);
  }

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1>Monsters Roladex</h1>
      <Seach value={searchField} placeholder="Search monster" handleChange={filterMonsters} />
      <MonstersList monsters = {filteredMonsters} />
    </div>
  );
}

export default App;
