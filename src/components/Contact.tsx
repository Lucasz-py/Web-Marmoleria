import './Contact.css';

const Contact = () => {
    const handleMapClick = () => {
        window.open('https://maps.app.goo.gl/39esLqvinqppviAt9', '_blank');
    };

    return (
        <section id="contacto" className="contact">
            <div className="container">
                <h2>Contacto</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Información de Contacto</h3>
                        <div className="contact-item">
                            <strong>Teléfono:</strong>
                            <span>+1 234 567 890</span>
                        </div>
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <span>info@marmoleria.com</span>
                        </div>
                        <div className="contact-item">
                            <strong>Dirección:</strong>
                            <span>Av. Armenia 3880, Corrientes</span>
                        </div>
                        <div className="contact-item">
                            <strong>Horario:</strong>
                            <span>Lunes a Viernes: Mañana: 9:00 - 12:30   Tarde: 16:30 - 20:00 <br />Sábados: 9:00 - 12:30</span>
                        </div>
                    </div>
                    <div className="map-container" onClick={handleMapClick}>
                        <div className="map-placeholder">
                            <h3>Ver en Google Maps</h3>
                            <p>Haz clic para ver nuestra ubicación</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;