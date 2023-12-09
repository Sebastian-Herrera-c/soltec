
import CarruselSwiper from '../carrusel/Carrusel'
import Footer from '../footer/footer'
import ContactForm from '../formulariodecontacto/Formulariocontacto'
import CarruselMarcas from '../carrusel/CarruselMarcas'

import Servicios from '../Descripcionservicios/Servicios'



function Body() {

    return (
        <div>
            <br />
            <br />
            <div id='repuestos'>
                <CarruselSwiper />
            </div>
            <div id='nuestrasmarcas'>
                <CarruselMarcas />
            </div>

            <br />
            < Servicios />
            <br />
            <ContactForm />
            <br />
            <Footer />
        </div>
    )
}

export default Body