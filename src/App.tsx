import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Catalog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;