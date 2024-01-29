/* eslint-disable react/prop-types */


import { useState, useEffect } from "react";

const TodoItem = ({id}) =>{

  const [item, setItem] = useState({});

  useEffect( ()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => setItem(json) )
  },[id]);

 return <li>({item.id}) {item.title} - {
    item.completed ? '✅' : '🟩'
  }</li>;
}


const ListaTareas = ({numTareas}) =>{

  let arrayTareas=[];
  for(let i=0;i<numTareas;i++){
    arrayTareas.push( <TodoItem key={i+1} id={i+1}/> );
  }

  return(<ul>
    {
      arrayTareas
    }
  </ul>);

}

export default ListaTareas;