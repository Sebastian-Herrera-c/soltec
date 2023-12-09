import logosoltec from '../assets/Imagenes/Soltec-logo.png'

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div>
        <img src={logosoltec} alt="" width="200px" />
        <div>
          {/* Utilizando clases de tamaño de Bootstrap junto con íconos */}
          <a href="https://www.whatsapp.com/"><i className="bi bi-whatsapp text-success bi-4x"></i></a>
          <a href="https://www.facebook.com/"><i className="bi bi-facebook text-success bi-3x"></i></a>
          <a href="https://www.instagram.com/"><i className="bi bi-instagram text-success bi-2x"></i></a>
        </div>
      </div>
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">Copyright &copy; 2023 - Company Name</div>
      </div>
    </footer>
  );
}

export default Footer;
