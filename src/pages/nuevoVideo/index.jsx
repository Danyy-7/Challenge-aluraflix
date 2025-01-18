import { useNavigate } from 'react-router-dom';
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import FormularioVideo from "./formulario";
import { Container } from "@mui/material";
import styles from "./nuevoVideo.module.css";
import { useContext } from 'react';
import { GlobalContextVideos } from '../../context/GlobalContextVideos';

const NuevoVideo = () => {
  const {handleAddVideo} = useContext(GlobalContextVideos)
  const navigate = useNavigate();

  return (
      <main className={styles.contenedor_NuevoVIdeo}>
        <Header />
        <Container component="section" maxWidth="lg">
          <div className={styles.contenedor_titulo}>
            <h1 className={styles.titulo}>NUEVO VIDEO</h1>
            <p className={styles.parrafo}>
              Complete el formulario para crear una nueva tarjeta de video
            </p>
          </div>

          <div className={styles.contenedor_titulo_formulario}>
            <h3 className={styles.titulo_tarjeta}>Crear tarjeta</h3>
          </div>
          {/* Pasamos la función handleAddVideo al formulario */}
          <FormularioVideo
            handleSubmit={(videoData) => {
              
              handleAddVideo(videoData); // Llamar a la función que agrega el video
              navigate('/'); // Redirigir a la página Home
            }}
          />
        </Container>
        <Footer />
      </main>
  
  );
};

export default NuevoVideo;
