//Por convencion todos los Custom Hooks van precedidos de un "use" en miniscula
//Los hooks no son mas que funciones
//Los Custom Hooks tambien pueden tener un STATE
//En los hooks podemos desestructurar el contenido del USESTATE
//Los USEFFECT no pueden ser ASYNC porque esperan algo sincrono
//UseEffect siempre esta formado por un Callback

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/Getgifs"

export const useFetchGifs = ({category}) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{

        getGifs(category).then((imgs)=>{
            setTimeout(()=>{ 
                setState({
                    data:imgs,
                    loading: false
                },3000)
            })

        })


    },[category])


    return state; //{data:[], loading: true} en este caso estamos retornando el objeto

}