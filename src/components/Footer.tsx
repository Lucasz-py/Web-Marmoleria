import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; Copyright {new Date().getFullYear()} D´Marmol. Derechos Reservados</p>
                <p>
                    Dev by:{" "}
                    <a
                        href="https://github.com/Lucasz-py"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dev-link"
                    >
                        Lucasz-py
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;