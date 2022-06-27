import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./Contador.css"


export const Contador = () => {
  const [number, setNumber] = useState(0)
  const sumar = () => setNumber(number + 1)
  const restar = () => setNumber(number - 1)

  return (
    <>
      <div style={{ display: "flex" }}>
        <Box mr={4} marginLeft="10px">
          <Button disabled={number === 0 ? true : false} variant="outlined" onClick={restar}> -1 </Button>
        </Box>

        <Box mt={1}>
          {number}
        </Box>

        <Box ml={4}>
          <Button  variant="contained" onClick={sumar}> +1 </Button>
        </Box>
      </div>

      <Box marginLeft="18%" mt={6}>
        <Button style={{textTransform:"inherit"}} variant="contained" className="btn_add-car"> Agregar al carrito </Button>
      </Box>
    </>
  )
}


