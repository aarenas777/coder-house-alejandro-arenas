import React, { useState } from 'react'

export const Contador = () => {
    const [number, setNumber] = useState(0)
    const sumar = () => setNumber(number + 1)
    const restar = () => setNumber(number - 1)
    const reiniciar = () => setNumber(0)
  return (
    <div>
        Contando: {number}
        <button onClick={sumar}> +1 </button>   
        <button onClick={restar}> -1 </button> 
        <button onClick={reiniciar} disabled={number > 5 ? false : true}> Reset </button>
    </div>
  )
}
