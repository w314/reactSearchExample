import React from 'react';
import { useState, useRef } from 'react';

function App() {

  const [items, setItems] = useState(['one', 'two', 'three', 'four'])
  // const newItem: string = useRef(itemName)
  const [filter, setFilter] = useState('')

  return (
    <>
    <div>
      <label htmlFor="filter">Search:</label>
      <input type="text" id="filter" onChange={(event) => setFilter(event.target.value)} />
    </div>
    <div>
      <label htmlFor="newItem">New Item:</label>
      <input type="text" id="newItem" />
      {/* <button onClick={() = ()}>Add</button> */}
    </div>
    <h2>Items:</h2>
    <ul>
      {items.filter(item => item.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>

    );
}

export default App;
