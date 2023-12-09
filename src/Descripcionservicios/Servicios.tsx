import React from 'react';

const Servicios: React.FC = () => {
  const divStyle: React.CSSProperties = {
    backgroundImage: 'url(https://img.freepik.com/fotos-premium/hombre-trabajando-deliciosos-panes-frescos_23-2148983536.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    width: '100%',
    height: '600px', // Ajusta la altura a tu preferencia
    color: '#f4623a', // Color de letra legible con el fondo
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    opacity: 0.9, // Opacidad de la imagen de fondo (0 a 1)
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Tono más transparente para el fondo
    padding: '50px', // Ajusta el espaciado interno del contenedor
  };

  const textStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo transparente para los textos
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div className="containn">
        <h3 className='servicioss'>Servicios</h3>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="mb-4">Servicios</h2>
        </div>
      </div>
      <div className="position-relative" style={divStyle}>
        <div style={textStyle}>
          <h3>SOLTEC</h3>
          <p>Nuestra empresa se caracteriza por brindar un completo servicio tanto en venta de repuestos como de servicios de mantenimientos</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
