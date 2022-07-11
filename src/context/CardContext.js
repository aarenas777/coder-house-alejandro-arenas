import { createContext, useContext, useState } from "react";


export const CardContext = createContext()

export const useCart = () => useContext(CardContext)


export const CardProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
}