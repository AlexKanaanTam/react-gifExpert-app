

export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=lO62Cicyq9JLS2mrBEwd5wKGXhA4IJbK`
    const resp= await fetch(url);
    const {data} = await resp.json();
    const gifs= data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}

//Como necesitamos la CATEGORY la mandamos por el argumento para tener el URL modificable

//Como no tenemos el STATE de SETIMAGES lo que haremos es simplemente retornar la constante GIFS

//Esta funcion ahora no esta retornando los gifs sino una PROMESA que retorna una colecciond e gifs. Los helpers se
//convierten en PROMESAS porque no estan retornando nada

