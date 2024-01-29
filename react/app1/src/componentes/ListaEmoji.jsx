
import { useState, useEffect } from "react";

const ListaEmoji = () =>{


  const [contador, setContador] = useState(0);
  const [emojiActual, setEmojiActual] = useState('🐱');

  const incContador = () =>{
    setContador( contador + 1);
  }

  useEffect( ()=>{
    const arrayEmojis = ['🐱','🦊','🦁','🦝'];
    setEmojiActual( arrayEmojis[contador%arrayEmojis.length] );
  }, [contador]);


  return(<>
  <p>Emoji: {emojiActual}</p>
  <p>Contador: {contador}</p>
  <button onClick={incContador}>Siguiente</button>
  </>);
}

export default ListaEmoji;