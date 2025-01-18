import { Link } from 'react-router-dom';
import styles from './Header.module.css';


const Header = () => {
    return <>
        <header className={styles.header}>
            
            <div className={styles.header_contenedor}>
                <img className={styles.logo} src="/img/imagenlogo.png" alt="Logo Alura" />
            </div>

                <nav className={styles.botones_contendor}>
                    <Link to="/" className={styles.boton_home}>Home</Link>
                    <Link to="/nuevoVideo" className={styles.boton_nuevo_video}>Nuevo Video</Link>
                </nav>


        </header>


    </>
}

export default Header