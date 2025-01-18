import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from  '@mui/icons-material/Dangerous';
import FormularioVideo from "../../../nuevoVideo/formulario";
import styles from "./modalEditar.module.css";
import { useContext } from "react";
import { GlobalContextVideos } from "../../../../context/GlobalContextVideos";

const ModalEditar = () => {
  const {modalOpen, closeModal, videoActual, handleFormSubmit} = useContext(GlobalContextVideos);
 
 

  return (
    <Dialog
      open={modalOpen}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle className={styles.modalTitulo}>
        Editar Video
        <IconButton
          aria-label="close"
          onClick={closeModal}
          size="small"
        >
          <CloseIcon 
          color="primary"/>
        </IconButton>
      </DialogTitle>
      <DialogContent className={styles.modalContenedor}>
        <FormularioVideo
          video={videoActual} // Pasa los datos actuales al formulario
          handleSubmit={handleFormSubmit}
          customClass={styles.formularioPersonalizado} // Estilos específicos
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditar;