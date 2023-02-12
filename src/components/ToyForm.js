import React, { useState } from "react";

function ToyForm({handlePost}) {

  const [formData, setFormData] = useState({
    name:'',
    image:'',
    likes: 0,
  });
 
  // setup helper functions to pass new input object
  function handleForm(e) {
    setFormData({
      //spread operator is needed for it to be a controlled form
      // formData is an object, so we need to copy all the key/value pairs
      ...formData,
      // we want to overwrite the name key with a new value
      [e.target.name] : e.target.value,
      // have this event target the name attribute of each input and use [] !!!
      // look inside each input element, the value of name attribute is
      // name, image, and submit
    })

  }
  // POST by passing the initial object state into stringify
  // and everytime handleForm changes input value setFormData updates it
  function handleSubmit(e) {
    e.preventDefault();
    // console.log('submited')
  
    fetch(`http://localhost:3001/toys`, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => handlePost(data))
    // handlePost here post it on the page
    }
  return (
    <div className="container">
      <form 
        className="add-toy-form" 
        onSubmit={handleSubmit} 
      >
        <h3>Create a toy!</h3>
        <input
          type="text" 
          name="name" 
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleForm} 
          value={formData.name}
        />
        <br />
        <input
          type="text" 
          name="image" 
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleForm} 
          value={formData.image}
        />
        <br />
        <input
          type="submit" 
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
