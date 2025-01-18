import { useState } from "react";
import styles from "./Formulario.module.css";
import { TextField, MenuItem, Button } from "@mui/material";

const FormularioVideo = ({ handleSubmit, customClass }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [errors, setErrors] = useState({
    titulo: {
      error: false,
      mensaje: "",
    },
    imagen: {
      error: false,
      mensaje: "",
    },
    video: {
      error: false,
      mensaje: "",
    },
    descripcion: {
      error: false,
      mensaje: "",
    },
  });

  const limpiarFormulario = () => {
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
    setErrors({
      titulo: { error: false, mensaje: "" },
      imagen: { error: false, mensaje: "" },
      video: { error: false, mensaje: "" },
      descripcion: { error: false, mensaje: "" },
    });
  };

  const validarTitulo = (titulo) => {
    if (titulo.length === '') {
      return { titulo: { error: false, mensaje: "" } };
    } else {
      return { titulo: { error: true, mensaje: "El título es obligatorio" } };
    }
  };

  const validarImagen = (imagen) => {
    if (imagen.length === '') {
      return { imagen: { error: false, mensaje: "" } };
    } else {
      return { imagen: { error: true, mensaje: "La imagen es obligatoria" } };
    }
  };

  const validarVideo = (video) => {
    if (video.length === '') {
      return { video: { error: false, mensaje: "" } };
    } else {
      return { video: { error: true, mensaje: "El enlace del video es obligatorio" } };
    }
  };

  const validarDescripcion = (descripcion) => {
    if (descripcion.length >= 10) {
      return { descripcion: { error: false, mensaje: "" } };
    } else {
      return {
        descripcion: {
          error: true,
          mensaje: "La descripción debe tener al menos 10 caracteres",
        },
      };
    }
  };

  const handleBlur = (e, validar) => {
    const { name, value } = e.target;
    const validation = validar(value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validation[name] }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          titulo,
          categoria,
          imagen,
          video,
          descripcion,
        });
        
        limpiarFormulario();
      }}
      className={`${styles.formulario} ${customClass}`}
    >

      <div
          className={`${styles.contenedor_input} ${
          customClass ? styles.modalInput : ""
        }`}
      >
          <TextField
              color="secondary"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  color: "var(--color--quinto)",
                },
                "& .MuiInputLabel-root": {
                  color: "var(--color--quinto)",
                },
              }}
              error={errors?.titulo?.error}
              helperText={errors?.titulo?.error ? errors.titulo.mensaje : ""}
              label="Título"
              name="titulo"
              id="titulo"
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
              type="text"
              value={titulo}
              fullWidth
              onBlur={(e) => handleBlur(e, validarTitulo)}
            />
          </div>

          <div
              className={`${styles.contenedor_input} ${
              customClass ? styles.modalInput : ""
            }`}
          >
          <TextField
              color="secondary"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  color: "var(--color--quinto)",
                },
                "& .MuiInputLabel-root": {
                  color: "var(--color--quinto)",
                },
              }}
              label="Categoría"
              name="categoria"
              id="categoria"
              select
              value={categoria}
              fullWidth
              onChange={(e) => setCategoria(e.target.value)}
            >
              <MenuItem value="front-end">Front-end</MenuItem>
              <MenuItem value="back-end">Back-end</MenuItem>
              <MenuItem value="innovacion">Innovación y Gestión</MenuItem>
            </TextField>
      </div>

      <div
        className={`${styles.contenedor_input} ${
          customClass ? styles.modalInput : ""
        }`}
      >
        <TextField
              color="secondary"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  color:"var(--color--quinto)",
                },
                "& .MuiInputLabel-root": {
                  color: "var(--color--quinto)",
                },
              }}
              error={errors?.imagen?.error}
              helperText={errors?.imagen?.error ? errors.imagen.mensaje : ""}
              label="Imagen"
              name="imagen"
              id="imagen"
              onChange={(e) => {
                setImagen(e.target.value);
              }}
              type="url"
              placeholder="Ingrese enlace de la imagen"
              value={imagen}
              fullWidth
              onBlur={(e) => handleBlur(e, validarImagen)}
         />
      </div>

      <div
        className={`${styles.contenedor_input} ${
          customClass ? styles.modalInput : ""
        }`}
      >
          <TextField
                color="secondary"
                variant="filled"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "var(--color--quinto)",
                  },
                  "& .MuiInputLabel-root": {
                    color: "var(--color--quinto)",
                  },
                }}
                error={errors?.video?.error}
                helperText={errors?.video?.error ? errors.video.mensaje : ""}
                label="Video"
                name="video"
                id="video"
                onChange={(e) => {
                  setVideo(e.target.value);
                }}
                type="url"
                placeholder="Ingrese enlace del video"
                value={video}
                fullWidth
                onBlur={(e) => handleBlur(e, validarVideo)}
          />
      </div>
      <div
            className={`${styles.contenedor_textarea} ${
              customClass ? styles.modalContenedorTextarea : ""
            }`}
          >
      <span className={styles.span}>Descripción</span>
          <textarea
                className={`${styles.textarea} ${
                  customClass ? styles.modalTextarea : ""
                }`}
                name="descripcion"
                id="descripcion"
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
                placeholder="Describe el video"
                value={descripcion}
                onBlur={(e) => handleBlur(e, validarDescripcion)}
          />
              {errors?.descripcion?.error && (
                <p className={styles.error}>{errors.descripcion.mensaje}</p>
               )}
      </div>
      <div className={styles.contenedor_btn}>
          <Button
                className={styles.btn_guardar}
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "var(--color--secundario)",
                  color: "#FFFFFF",
                  fontSize: '20px',
                }}
              >
                Guardar
          </Button>
          <Button
                className={styles.btn_limpiar}
                type="button"
                onClick={limpiarFormulario}
                sx={{
                  color: 'var(--color--quinto)',
                  boxShadow: '0 0 15px 0px rgba(0, 0, 0, 1)',
                  fontSize: '20px',
                }}
              >
                Limpiar
          </Button>
      </div>
    </form>
  );
};

export default FormularioVideo;
