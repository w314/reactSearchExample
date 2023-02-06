import React from 'react';
import { useState, useRef, useMemo } from 'react';
// use emotion library for css in js
import styled from '@emotion/styled'


// call styled with template literal
const ListItem = styled.li`
  list-style-type: none;
`

// call styled with as a function with an object
const Container =styled.div({
  width: 800,
  margin: 'auto',
  paddingTop: '2rem',
})


const ThreeColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 100px 300px 100px;
  gap: 1rem;
`

const TwoColumnGridInput = styled.input`
  grid-column: span 2;
`

const Label = styled.label`
  font-weight: bold
`
const Button = styled.button`
  &:hover {
    color: blue;
  }
`

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
    <Container>
    {/* add option to filter item list */}
    <ThreeColumnLayout>
      <Label htmlFor="filter">Search:</Label>
      {/* if user enters query store it in filter variable */}
      <TwoColumnGridInput type="search" id="filter" onChange={(event) => setFilter(event.target.value)} />
    {/* add option to add new items to list */}
      <Label htmlFor="newItem">New Item:</Label>
        {/* reference name of new item to store in newItemRef variable */}
        <input type="text" id="newItem" ref={newItemRef}/>
      {/* if user click on Add button call onAddNewItem function */}
      <Button onClick={(event) => {onAddNewItem(event)}}>Add</Button>
    </ThreeColumnLayout>
    <h2>Items:</h2>
    {/* dispaly list of items filtered by query */}
    <ul>
      {filteredItems.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
    </Container>

    );
}

export default App;