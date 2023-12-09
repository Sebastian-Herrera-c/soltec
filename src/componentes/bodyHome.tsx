
import CarruselSwiper from '../carrusel/Carrusel'
import Footer from '../footer/footer'
import ContactForm from '../formulariodecontacto/Formulariocontacto'
import CarruselMarcas from '../carrusel/CarruselMarcas'
import Marcasdetrabajo from '../Marcasquetrabajamos/marcasquetrabajan'



function Body() {

    return (
        <><div>
          <br />
          <br />
          
            <CarruselSwiper/>
          
            <CarruselMarcas/>

            <br />
               <Marcasdetrabajo/>
          
            {/* <div className='serviciossss'> */}
           
           {/* </div> */}

            {/* </section><br /><h3 className="Repuestolestras">Repuestos</h3><hr> className="divider"/</hr> */}
           
            {/* <!-- Contact--> */}
            <section className="page-section" id="contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">Contactanos!</h2>
                            <hr className="divider" />
                            <p className="text-muted mb-5">¿Listo para comenzar tu próximo proyecto con nosotros? ¡Envíanos un
                                mensaje y nos comunicaremos contigo lo antes posible!</p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            {/* <!-- * * * * * * * * * * * * * * *-->
<!-- * * SB Forms Contact Form * *-->
<!-- * * * * * * * * * * * * * * *-->
<!-- This form is pre-integrated with SB Forms.-->
<!-- To make this form functional, sign up at-->
<!-- https://startbootstrap.com/solution/contact-forms-->
<!-- to get an API token!--> */}
                        <ContactForm/>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <i className="bi-phone fs-2 mb-3 text-muted"></i>
                            <div>+1 (555) 123-4567</div>
                        </div>
                    </div>
                </div>
            </section>

        </div><Footer /></>
    )
}

export default Body