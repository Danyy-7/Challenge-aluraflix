import styles from "./videoCard.module.css";
import IconoEditar from '@mui/icons-material/Edit';
import IconoBorrar from '@mui/icons-material/DeleteForever';

const VideoCard = ({ video, onEdit, onDelete }) => {
  
  return (
    <article className={styles.contenedor_art}>
      <header className={styles.titulo}>
        <h4> {video.titulo} </h4>
      </header>
      <section className={styles.contenedor_card}>
        <figure className={styles.contenedor_img}>
          <img
            className={styles.imagen}
            src={video.imagen}
            alt={video.descripcion}
          />
          <video
            className={styles.video} controls>
            <source src={video.video} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </figure>
        <footer className={styles.footer}>
          <span>EDITAR
            <IconoEditar
              className={styles.iconoEditar}
              arial-label="EDITAR"
              onClick={onEdit}>
            </IconoEditar>

          </span>
          <span>BORRAR
            <IconoBorrar
              className={styles.iconoBorrar}
              arial-label="BORRAR"
              onClick={onDelete}>
            </IconoBorrar>

          </span>
        </footer>
      </section>
    </article>
  );
};

export default VideoCard;