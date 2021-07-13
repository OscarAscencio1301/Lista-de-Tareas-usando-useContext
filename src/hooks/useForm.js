import { useState } from "react"


export const useForm = (valoresIniciales = {}) => {
    const [valores, setvalores] = useState(valoresIniciales)
    
    const recibirValores = (e) => {
        e.preventDefault();
        setvalores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    return [valores, recibirValores]
}
