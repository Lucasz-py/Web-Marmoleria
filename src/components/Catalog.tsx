import './Catalog.css';

// Importar imágenes locales
import gNegroBoreal from '../assets/images/negro-boreal.jpg';
import gGrisPerla from '../assets/images/gris-perla.jpg';
import mBoticcino from '../assets/images/boticcino.jpg';
import mNegroMarquina from '../assets/images/negro-marquina.jpg';
import mBlancoTurco from '../assets/images/blanco-turco.jpg';
import gGrisMara from '../assets/images/gris-mara.jpg';

const Catalog = () => {
    const materials = [
        {
            name: "GRANITO NEGRO BOREAL",
            image: gNegroBoreal,
        },
        {
            name: "GRANITO GRIS PERLA",
            image: gGrisPerla,
        },
        {
            name: "MARMOL BOTICCINO",
            image: mBoticcino,
        },
        {
            name: "MARMOL NEGRO MARQUINA",
            image: mNegroMarquina,
        },
        {
            name: "MARMOL BLANCO TURCO",
            image: mBlancoTurco,
        },
        {
            name: "GRANITO GRIS MARA",
            image: gGrisMara,
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;