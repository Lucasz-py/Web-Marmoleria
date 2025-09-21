import './Catalog.css';

const Catalog = () => {
    const materials = [
        {
            name: "Mármol Blanco Turco",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Mármol de color blanco con vetas grises, ideal para interiores."
        },
        {
            name: "Mármol Negro Marquina",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Mármol negro intenso con vetas blancas, muy elegante y resistente."
        },
        {
            name: "Granito Gris Perla",
            image: "https://images.unsplash.com/photo-1583513364301-f9339bc6122c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Granito de color gris con pequeñas motas perladas, muy duradero."
        },
        {
            name: "Mármol Travertino",
            image: "https://images.unsplash.com/photo-1611270629569-8b357cb3082c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Mármol beige con poros naturales, perfecto para baños y fachadas."
        },
        {
            name: "Granito Negro Absoluto",
            image: "https://images.unsplash.com/photo-1596727008706-33b600a531f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Granito negro uniforme, muy resistente a manchas y arañazos."
        },
        {
            name: "Cuarzo Blanco",
            image: "https://images.unsplash.com/photo-1598301257982-0cf01499abb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Material sintético de gran resistencia, no poroso y fácil mantenimiento."
        }
    ];

    return (
        <section id="catalogo" className="catalog">
            <div className="container">
                <h2>Nuestro Catálogo</h2>
                <p className="catalog-subtitle">Descubre nuestros materiales de primera calidad</p>
                <div className="materials-grid">
                    {materials.map((material, index) => (
                        <div key={index} className="material-card">
                            <div className="material-image">
                                <img src={material.image} alt={material.name} />
                            </div>
                            <div className="material-info">
                                <h3>{material.name}</h3>
                                <p>{material.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;