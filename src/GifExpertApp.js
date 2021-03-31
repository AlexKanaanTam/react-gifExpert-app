import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

const GifExpertApp = ()=> {
    // const categories= ["Dragon Ball", "One Piece", "Naruto"]
    const [categories, setCategories] = useState(["Dragon Ball"])

    return (
        <div>
            <h2>Gif Expert App</h2>
            < AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol> 
                {categories.map((category)=>(
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                ))}
            </ol>
            
        </div>
    )
}

export default GifExpertApp

//Para la expresiones de JS dentro de los componentes necesito que sean expresiones que RETORNEN algo. En el 
//- caso del FOR LOOP esta es una expresion ciclica que no retona nada. 

//Podemos retornar un tag de list items <li></li> en el return de nuestro map

//La key la debemos poner siempre que estemos iterando en un array

//Como hacemos si queremos añadir elementos a nuestra array? Esto no lo podemos hacer con un CONST porque no podemos
//modificar una variable que es inmutable. 

//Para añadir items tenemos que crear un array entero donde se incluya el [...categories, "item"]

//En vez de la opcion anterior tambien podeos usar un callback, que tiene como argumento el valor del UseState

//Si clicamos varias veces el mismo boton tendremos un error porque la KEY del MAP se repite porque hemos asignado la vategory como kEY

//Vamos a crear un nuevo componente donde se van a  renderizar las categorias. Para ello vamos
//a tener que hacer un MAP dentro de un nuevo componente GIFGRID 

