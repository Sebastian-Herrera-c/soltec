
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

            <CarruselSwiper />

            <CarruselMarcas />

            <br />
               
          
          
           <Servicios/>
          

                        <ContactForm/>
                     
                        <Footer />
        </div>
    )
}

export default Body