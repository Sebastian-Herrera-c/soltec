import Scroll from "../scroll/scroll";
import "./Componentes.css"


function Navbar() {
    return (
        // Tu código HTML de la barra de navegación aquí
        // Recuerda convertir los elementos a JSX y ajustar eventos si es necesario
    <>
   <Scroll/>
     <header className="masthead">
     <div className="container px-4 px-lg-5 h-100">
         <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
             <div className="col-lg-8 align-self-end">
                 <h1 className="text-white font-weight-bold">SOLTEC SERVICE</h1>
                 <hr className="divider" />
             </div>
             <div className="col-lg-8 align-self-baseline">
                 <p className="text-white-75 mb-5">Tenemos todo lo que necesitas!</p>
                 <a className="btn btn-primary btn-xl" href="#about">Conocenos</a>
             </div>
         </div>
     </div>
 </header>
 </>
  );
};


export default Navbar
