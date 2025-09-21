import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Mármoles y Granitos</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#catalogo">Catálogo</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;