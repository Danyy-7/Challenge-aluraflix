import { createContext, useState, useEffect, useContext } from "react";
import {listaVideos,creaCard,videoActulizado, deleteVideo } from "../servidor/api";
 

export const GlobalContextVideos = createContext();

const GlobalContextVideosProvider = ({children}) =>{

    //estados
    
    const [videos, setVideos] = useState([]);
    const [videoActual, setVideoActual] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    //cargar los videos//

    useEffect(() =>{
        const mostrarVideos = async ()=>{
            try{
                const conexion = await listaVideos();
                setVideos(conexion);
            }catch{
                console.error("Error al cargar los videos:", error)
            }   
        };
        mostrarVideos();
    }, []);

    //agg nuevo video//

    const handleAddVideo = async (nuevoVideo)=>{
        try{
            const aggVideo = await creaCard(nuevoVideo);
            setVideos((prevVideos)=>[...prevVideos, aggVideo]);
        }catch(error){
            console.error("Error al agregar el video", error)
        }
    };

    //Editar vide//

    const handleEditVideo = async (id, infoActualizada)=>{
        try{
            const updateVideo = await videoActulizado(id, infoActualizada);
            setVideos((prevVideos)=>
                prevVideos.map((video)=>
                video.id === id ? {...video, ...updateVideo}: video
                )
            );
            setModalOpen(false);
            setVideoActual(null);
        }catch(error){
            console.error("Error al actulizar el video", error)
        }
    }

    //borrar video//
    const handleDeleteVideo = async (id) => {
        try {
          await deleteVideo(id); 
          setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id)); 
        } catch (error) {
          console.error("Error al eliminar el video:", error);
        }
      };

   // Abrir modal para edición
    const openEditModal = (video) => {
        setVideoActual(video);
        setModalOpen(true);
    };

    // Cerrar modal
    const closeModal = () => {
        setModalOpen(false);
        setVideoActual(null);
    };    

    //formulario &modal
    const handleFormSubmit = (formData) => {
        if (videoActual) {
            const videoActualizado = { ...videoActual, ...formData }; 
            handleEditVideo(videoActual.id, videoActualizado); 
        } else {
            handleAddVideo(formData); 
        }
        closeModal(); 
    };
    


    return (
                <GlobalContextVideos.Provider
                value={{
                    videos,
                    videoActual,
                    modalOpen,
                    handleAddVideo,
                    handleEditVideo,
                    handleDeleteVideo,
                    openEditModal,
                    closeModal,
                    handleFormSubmit
                }}
                >
                    {children}
                </GlobalContextVideos.Provider>
    );
};


export default GlobalContextVideosProvider
