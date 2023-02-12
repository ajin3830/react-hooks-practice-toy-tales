import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handlePatch, handleDelete}) {
  const newToys = toys.map((toy) => {
    return (
      <ToyCard
      key= {toy.id}
      // name= {toy.name}
      // image = {toy.image}
      // likes = {toy.likes}
      toy = {toy}
      handlePatch = {handlePatch}
      handleDelete = {handleDelete}
      />
  )
  })

  // console.log(newToys)

  return (
    <div id="toy-collection">{newToys}</div>
  );
}

export default ToyContainer;
