import React from 'react';
import { useState, useRef, useMemo } from 'react';

function App() {
  // store items
  const [items, setItems] = useState(['one', 'two', 'three', 'four'])
  // store filter query
  const [filter, setFilter] = useState('')
  
  // store reference to input field for new item
  const newItemRef = useRef<HTMLInputElement>(null)

  // filter items based on query string
  // use useMemo() to prevent it being recalculated when it is not necessary
  const filteredItems = useMemo(
    () => items.filter(item => item.toLowerCase().includes(filter.toLowerCase())), 
    [filter, items]
  )

  // handle when Add button is clicked
  const onAddNewItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // set item based on conent of newItemRef input box
    const item = newItemRef.current?.value ? newItemRef.current.value : null
    // if item is null return
    if (!item) return
    // add item to items
    setItems((currentItems) => [...currentItems, item])
    // clear newItemRef input box
    if (newItemRef.current) {
      newItemRef.current.value = ''
    }
  }

  return (
    <>
    {/* add option to filter item list */}
    <div>
      <label htmlFor="filter">Search:</label>
      {/* if user enters query store it in filter variable */}
      <input type="search" id="filter" onChange={(event) => setFilter(event.target.value)} />
    </div>
    {/* add option to add new items to list */}
    <div>
      <label htmlFor="newItem">New Item:</label>
      {/* reference name of new item to store in newItemRef variable */}
      <input type="text" id="newItem" ref={newItemRef}/>
      {/* if user click on Add button call onAddNewItem function */}
      <button onClick={(event) => {onAddNewItem(event)}}>Add</button>
    </div>
    <h2>Items:</h2>
    {/* dispaly list of items filtered by query */}
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>

    );
}

export default App;