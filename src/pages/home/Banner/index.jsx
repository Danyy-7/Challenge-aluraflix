import styles from './Banner.module.css';

const Banner = () => {
    return(
    <>
        <section className={styles.banner} aria-label="Banner principal">
            <div className={styles.banner__background} role="img" aria-label="Imagen de fondo del banner"></div>

            <div className={styles.banner__contenedor}>          
                    <figure className={styles.banner__imagen}>
                        <img className={styles.img_banner} src="/img/VideoCardFN1.png" alt="video fron end" />          
                    </figure>
                <div className={styles.banner__info}>
                        <button className={styles.banner__categoria} aria-label="Categoría del video">FRONT END</button>
                        <h1 className={styles.banner__titulo} >Challenge React</h1>
                        <p className={styles.banner__description}>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución
                         de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                        </p>
                </div>
            </div>
        </section>





    </>
)}

export default Banner