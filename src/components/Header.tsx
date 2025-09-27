import './Header.css';

interface HeaderProps {
    onNavigateToHero?: () => void;
}

const Header = ({ onNavigateToHero }: HeaderProps) => {
    const handleLogoClick = () => {
        // Scroll suave al inicio
        document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });

        // Ejecutar la función callback para reiniciar animación
        if (onNavigateToHero) {
            onNavigateToHero();
        }
    };

    const handleNavClick = (sectionId: string) => {
        if (sectionId === 'inicio') {
            handleLogoClick();
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="container">
                <button className="logo-button" onClick={handleLogoClick}>
                    <h1 className="logo">D´MARMOL</h1>
                </button>
                <nav className="nav">
                    <ul>
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => handleNavClick('inicio')}
                            >
                                Inicio
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => handleNavClick('servicios')}
                            >
                                Servicios
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => handleNavClick('catalogo')}
                            >
                                Catálogo
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => handleNavClick('contacto')}
                            >
                                Contacto
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;