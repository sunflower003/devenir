import styles from './HomePage.module.css';
import Preloader from '../../components/Preloader/Preloader';
import Hero from './Hero.jsx';
import Introduction from './Introduction.jsx';

const HomePage = () => {
    return (
        <>
            <Preloader />
            <Hero />
            <Introduction />
        </>
    );
}

export default HomePage;