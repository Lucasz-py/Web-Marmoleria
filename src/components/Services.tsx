import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Fabricación de Mesadas",
            description: "Creación de mesadas para cocina y baño con los mejores materiales.",
            icon: "⛏️"
        },
        {
            title: "Instalación",
            description: "Instalación profesional de todos nuestros productos.",
            icon: "🔧"
        },
        {
            title: "Pulido y Mantenimiento",
            description: "Servicios de pulido y mantenimiento para conservar el brillo natural.",
            icon: "✨"
        }
    ];

    return (
        <section id="servicios" className="services">
            <div className="container">
                <h2>Nuestros Servicios</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;