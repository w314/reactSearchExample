import React from 'react';

function App() {
  return (
    <>
    <div>
      <label htmlFor="filter">Search:</label>
      <input type="text" id="filter" />
    </div>
    <div>
      <label htmlFor="newItem">New Item:</label>
      <input type="text" id="newItem" />
      <button>Add</button>
    </div>
    <h2>Items:</h2>
    </>

    );
}

export default App;
