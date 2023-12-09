import Servicios from '../Descripcionservicios/Servicios'
import CarruselSwiper from '../carrusel/Carrusel'
import Footer from '../footer/footer'
import ContactForm from '../formulariodecontacto/Formulariocontacto'
import logo1 from '../assets/Imagenes/logoromco.png'
import logo2 from '../assets/Imagenes/logoservibaker.png'
import CarruselMarcas from '../carrusel/CarruselMarcas'



function Body() {

    return (
        <><div>
          <br />
          <br />
          
            <CarruselSwiper/>
          
            <CarruselMarcas/>

            <br />
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">Marcas que trabajamos</h2>
                    {/* <hr className="divider" /> */}
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"> <a href="https://www.romco.cl/"><img src={logo1}
                                    alt="" /></a></div>
                                <h3 className="h4 mb-2">Sturdy Themes</h3>
                                <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"> <a href="https://www.servibaker.cl/index.html"> <img
                                    src={logo2} alt="" width="250px" /></a></div>
                                <h3 className="h4 mb-2">Up to Date</h3>
                                <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><a href="https://www.servibaker.cl/index.html"><img src={logo2} alt="" width="250px" /></a></div>
                                <h3 className="h4 mb-2">Ready to Publish</h3>
                                <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><img src={logo1} alt="" /></div>
                                <h3 className="h4 mb-2">Made with Love</h3>
                                <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                            </div>
                        </div>
                    </div>
                </div>
          
            {/* <div className='serviciossss'> */}
           <Servicios/>
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