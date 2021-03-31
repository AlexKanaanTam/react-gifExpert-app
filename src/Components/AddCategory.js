import React, { useState } from 'react';
import PropTypes from "prop-types"

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(""); //Para evitar que salga error, debemos poner "" para marcar el useSate siemrpe será un string vacio

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories((cats)=>[inputValue, ...cats]);
            setInputValue("")
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes={
    setCategory: PropTypes.func.isRequired
}

export default AddCategory;

//La cajita dle input debe tener un estado porque quiero saber lo que la persona está escribiendo

//Para hacer el ONCHANGE tenemos que pasar como argumento el evento E, para poder determinar el E.TARGET.VALUE (el valor del evento)

//Queremos tener un boton que cuando cliquemos SUBMIT se cree una accion. Para ello deberemos crear los FORM TAGS

//Al poner FORM cuando pulsamos ENTER hace un posteo y se refresca la pagina cosa que para nosotros no es aceptable
//Para evitarlo en el mismo FORM hacemos el evento de ONSUBMIT donde atrapamod el EVENTO (e)
//En handleSubmit haremos el e.preventDefault() para evitar que se haga REFRESH
