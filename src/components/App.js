import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  // useEffect (() => {fetch goes here}, [])
  useEffect (() => {
    fetch(`http://localhost:3001/toys`)
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])

  // const [variableName, setVariableName] = useState(default generally empty: Array or String or True/False)
  const [toys, setToys] = useState([])

  // dynamically show/hide form
  const [showForm, setShowForm] = useState(false);
  
  function handleClick() {
    setShowForm(showForm => !showForm);
  }
  // add new toy to list
  function handlePost(newObj) {
    setToys([...toys, newObj])
  }
 
  function handlePatch(updatedToy) {
    const updatedToys = toys.map(toy => 
      toy.id === updatedToy.id ? updatedToy : toy
      );
    setToys(updatedToys)
  }
  // 1. After adding Onclick to button, 
  // make a DELETE request to /items/:id, 
  // using the clicked item's data for the ID
  // 2.Send the clicked item to the ToyContainer component, 
  // and set state by creating a new array in which 
  // the deleted toy has been filtered out
  function handleDelete (deletedToy) {
    const updatedToys = toys.filter((toy) => 
    toy.id !== deletedToy.id
    // console.log(toy.id)
    );
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ?
      <ToyForm
        handlePost={handlePost}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        handlePatch={handlePatch} 
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
