import { createContext, useState } from "react";
import db from '../componentes/db.json';

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) =>{
  //home
    const [videos, setVideos] = useState(db.videos);

    // Agregar un nuevo video al estado
  const handleAddVideo = (nuevoVideo) => {

    setVideos((prevVideos) => {
      
      const nuevoId = prevVideos.length ? prevVideos[prevVideos.length - 1].id + 1 : 1; // Generar nuevo ID
      return [...prevVideos, { ...nuevoVideo, id: nuevoId }];
    });
  };
  
    //categorias
    const [videoActual, setVideoActual] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleEditVideo = (videoActualizado) => {
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoActualizado.id ? videoActualizado : video
        )
      );
      setModalOpen(false); // Cerrar modal
    };

    const handleDeleteVideo = (id) => {
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    };
    
    const openEditModal = (video) => {
      setVideoActual(video);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setVideoActual(null);
    };

    //modaleditar

    //formulario
    const handleFormSubmit = (formData) => {
      const videoActualizado = { ...videoActual, ...formData }; // Actualiza los campos con los nuevos datos
      handleEditVideo(videoActualizado);
    };
    
    return(
        <GlobalContext.Provider 
        value={{ 
            videos, 
            setVideos,
            videoActual,
            setVideoActual,
            modalOpen,
            setModalOpen,
            handleAddVideo,
            handleEditVideo,
            openEditModal,
            closeModal,
            handleFormSubmit,
            handleDeleteVideo
            



        }}>
            {children}
        </GlobalContext.Provider>
        
    )
}

export default GlobalContextProvider
