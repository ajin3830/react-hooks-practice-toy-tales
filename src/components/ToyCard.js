import React from "react";

function ToyCard({toy, handlePatch, handleDelete}) {
  const {id, name, image, likes} = toy

  function handleClick() {
    // console.log('clicked', likes)

    // make likes object to stringify inside PATCH, meaning
    // in the body of the request, we send an object with the key we are updating, 
    // along with the new value.
    const updateLikesObj = {
      likes : likes + 1
    }
    // console.log(updateLikesObj)

    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      updateLikesObj
      // {likes : likes + 1}
    ),
    })
    .then((r) => r.json())
    .then(data => handlePatch(data));
  }

  function handleDeleteClick() { 
    // console.log('delete')
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE",
    // now the toy got clicked is deleted on the server
    })
    .then((r) => r.json())
    // call handleDelete prop and pass up the toy that was deleted when clicked
    // so a new array without it will display on DOM
    .then((data) => handleDelete(toy));
  }

  return (
    <div className= "card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick ={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
