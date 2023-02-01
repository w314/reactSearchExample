import React from 'react';
import { useState, useRef } from 'react';

function App() {

  const [items, setItems] = useState(['one', 'two', 'three', 'four'])
  const [filter, setFilter] = useState('')
  
  const newItemRef = useRef<HTMLInputElement>(null)

  const onAddNewItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const item = newItemRef.current?.value ? newItemRef.current.value : null
    if (!item) return
    setItems((currentItems) => [...currentItems, item])
    if (newItemRef.current) {
      newItemRef.current.value = ''
    }
  }

  return (
    <>
    <div>
      <label htmlFor="filter">Search:</label>
      <input type="search" id="filter" onChange={(event) => setFilter(event.target.value)} />
    </div>
    <div>
      <label htmlFor="newItem">New Item:</label>
      <input type="text" id="newItem" ref={newItemRef}/>
      <button onClick={(event) => {onAddNewItem(event)}}>Add</button>
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