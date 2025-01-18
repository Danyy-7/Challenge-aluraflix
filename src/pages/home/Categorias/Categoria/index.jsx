import VideoList from "../videoList";
import ModalEditar from "../modalEditar";
import styles from "./categorias.module.css";
import { useContext } from "react";
import { Container} from "@mui/material";
import { GlobalContextVideos } from "../../../../context/GlobalContextVideos";



const Categorias = () => {
  const { videos, modalOpen } = useContext(GlobalContextVideos);
 
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        '@media (max-width: 1024px)': {

          display: 'flex',
          maxWidth: '1024px',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom:'100px',
          marginTop:'100px'

        },
      }}
    >

      <div className={styles.contenedor_btn_titulo}>
        <button className={styles.btn_categoria_fe} aria-label="Categoría del video">FRONT END</button>
      </div>
      <div className={styles.contenedor_videos}>
        <VideoList
          videos={videos.filter(video => video.categoria.toLowerCase() === "front-end")}
        />
      </div>

      <div className={styles.contenedor_btn_titulo}>
        <button className={styles.btn_categoria_be} aria-label="Categoría del video">BACK END</button>
      </div>
      <div className={styles.contenedor_videos}>
        <VideoList
          videos={videos.filter(video => video.categoria.toLowerCase() === "back-end")}
        />
      </div>

      <div className={styles.contenedor_btn_titulo}>
        <button className={styles.btn_categoria_ig} aria-label="Categoría del video">INNOVACÍON Y GESTÍON</button>
      </div>
      <div className={styles.contenedor_videos}>
        <VideoList
          videos={videos.filter(video => video.categoria.toLowerCase() === "innovacion y gestion")}
        />
      </div>

      {modalOpen && (
        <ModalEditar

        />
      )}
    </Container>
  );
};

export default Categorias;
