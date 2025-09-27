import './Hero.css';
import BlurText from './BlurText';

interface HeroProps {
    key?: number;
    onNavigateToCatalog?: () => void; // Nueva prop
    onNavigateToContact?: () => void;
}

const Hero = ({ key, onNavigateToCatalog, onNavigateToContact }: HeroProps) => {
    const handleAnimationComplete = () => {
        console.log('Hero animation completed!');
    };

    const handleCatalogClick = () => {
        if (onNavigateToCatalog) {
            onNavigateToCatalog();
        }
    };

    const handleContactClick = () => {
        if (onNavigateToContact) {
            onNavigateToContact();
        }
    }

    return (
        <section id="inicio" className="hero">
            <div className="hero-content">
                <div className="text-container">
                    <BlurText
                        key={`title-${key}`}
                        text="MARMOLERÍA"
                        delay={100}
                        animateBy="letters"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="hero-title"
                    />
                </div>
                <div className="text-container">
                    <BlurText
                        key={`subtitle-${key}`}
                        text="MÁRMOLES Y GRANITICOS"
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        className="hero-subtitle"
                    />
                </div>
                <p>NACIONALES E IMPORTADOS</p>
                <div className="hero-buttons">
                    <button className="cta-button" onClick={handleCatalogClick}>
                        Ver Catálogo
                    </button>
                    <button className="contacto-button" onClick={handleContactClick}>
                        Contáctenos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;