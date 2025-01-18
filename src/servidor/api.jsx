//peticion Get

const url = 'http://localhost:3001'


export const listaVideos = async() => {
    const conexion = await fetch(`${url}/videos`);
    const conexionConvertida = conexion.json()
    return conexionConvertida 

    
}

//metodos postMessage(Crear un nuevo card)

export const creaCard = async(nuevoVideo)=>{
    try{
    const conexion = await fetch(`${url}/videos`,{
        method: 'Post',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(nuevoVideo)
})
 if(!conexion.ok){
    throw new Error ("Ha ocurrido un error al enviar los datos")
 } 
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}catch(error){
        console.error("Error al crear video", error);
        throw error;
    }
};



//metodo put
export const  videoActulizado = async(id,infoActualizada)=> {
    try{
    const conexion = await fetch(`${url}/videos/${id}`, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(infoActualizada),
    });
        if(!conexion.ok){
            throw new Error ("No se logro actualizar el video, intentelo de nuevo")
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    }catch(error){
        console.error("Error al ctualizar video", error);
        throw error;
    }  
};

//metodo Delete//

export const deleteVideo = async (id) => {
    try {
      const conexion = await fetch(`${url}/videos/${id}`, {
        method: 'DELETE',
      });
      if (!conexion.ok) {
        throw new Error("Error al eliminar el video");
      }
    } catch (error) {
      console.error("Error al eliminar video:", error);
      throw error;
    }
  };


export default url