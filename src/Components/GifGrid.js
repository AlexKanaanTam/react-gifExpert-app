import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    return (
        <div>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}
            <div className="card-grid">  
                {   
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id} 
                        {...img}
                        />
                    ))
                
                }

            </div>
        </div>

    )
}

export default GifGrid;


//Hacemos la peticion API en el mismo componente de las categorias

//Pasos para el FETCH:
    //1. copiamos el URL del Postman
    //2. creamos una constante fetch con await ( const resp= await fetch(url))
    //3. Llamamos a la data en una constante y hacemos una respuesta JSON (const data=await resp.JSON())

//Para seleccionar la data que queremos desestructuramos data en la constante y luego creamos una const Gifs
//que haga un mapeo de toda la info que queremos: 
    // //const gifs= img.map(img=>{
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images?.downsized_medium.url
    //     }
    // })

//Para poner cada titulo y su id debemos crear un map con la constante GIFS (que retorna un objeto con todos los datos de las imagenes
//y crear otro map images.map(img=>(
//     return <li key={img.id}>{img.title}</li>
// ))
//De esta forma se itera cada una de las imagenes

//Para que nos salga la categorria correspondiente en todos los gifs lo que deberemos hacer es un TEMPLATE STRING 
//añadiremos la variable categoria y le pondremos un encodedURI para evitar espacios y otros elementos que disfucten

//Vamos a tener que importar nuestro CustomHook