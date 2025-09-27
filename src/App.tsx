import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { useState, useRef } from 'react';

function App() {
    const [heroKey, setHeroKey] = useState(0);
    const catalogRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleNavigateToHero = () => {
        setHeroKey(prevKey => prevKey + 1);
    };

    const handleNavigateToCatalog = () => {
        if (catalogRef.current) {
            catalogRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleNavigateToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="App">
            <Header onNavigateToHero={handleNavigateToHero} />
            <Hero key={heroKey}
                onNavigateToCatalog={handleNavigateToCatalog}
                onNavigateToContact={handleNavigateToContact}
            />
            <Services />
            <div ref={catalogRef}>
                <Catalog />
                <div ref={contactRef}>
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;