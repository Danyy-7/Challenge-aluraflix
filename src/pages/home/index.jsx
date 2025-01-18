import Banner from "./Banner";
import Categorias from "./Categorias/Categoria";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import styles from "./home.module.css";

const Home = () => {
    return (

        <main className={styles.contenedor_home}>
            <Header />
            <Banner />
            <Categorias  />
            <Footer />
        </main>

    );
};

export default Home;
