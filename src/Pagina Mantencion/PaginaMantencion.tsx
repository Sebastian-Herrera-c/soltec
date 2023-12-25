import { Link } from 'react-router-dom';
import logoEmpresa from "../assets/Imagenes/Soltec-logo.png"; 

const PaginaMantencion = () => {
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <img src={logoEmpresa} alt="Logo de la empresa" className="img-fluid my-5" />
                </div>
            </div>

            <h1>Esta página está en mantenimiento</h1>
            <p className="lead">Disculpa las molestias. Estamos trabajando para mejorar tu experiencia.</p>

            {/* <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <img src={imagenMantenimiento} alt="Imagen de mantenimiento" className="img-fluid my-5" />
                </div>
            </div> */}

            <p> <p>Te invito a contactarte con nosotros por correo o telefono</p>
                <a href="mailto:servicio@soltecservice.cl" className="d-block">servicio@soltecservice.cl</a>
                <a href="tel:+56962272765" className="d-block">+56 9 6227 2765</a>
            </p>
            <br />
            <br /><br /><br /><br /><br /><br /><br />
            <Link to="/dev" style={{ color: 'rgba(0, 0, 0, 0.1)', textDecoration: 'none' }}>*</Link>
        </div>
    );
};

export default PaginaMantencion;