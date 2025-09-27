import './Hero.css';
import BlurText from './BlurText';

interface HeroProps {
    key?: number;
}

const Hero = ({ key }: HeroProps) => {
    const handleAnimationComplete = () => {
        console.log('Hero animation completed!');
    };

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
                <button className="cta-button">Ver Catálogo</button>
            </div>
        </section>
    );
};

export default Hero;