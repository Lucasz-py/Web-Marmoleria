import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
    const [heroKey, setHeroKey] = useState(0);

    const handleNavigateToHero = () => {
        setHeroKey(prevKey => prevKey + 1);
    };

    return (
        <div className="App">
            <Header onNavigateToHero={handleNavigateToHero} />
            <Hero key={heroKey} />
            <Services />
            <Catalog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;