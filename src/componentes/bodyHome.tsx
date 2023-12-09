import Servicios from '../Descripcionservicios/Servicios'
import CarruselSwiper from '../carrusel/Carrusel'
import Footer from '../footer/footer'
import ContactForm from '../formulariodecontacto/Formulariocontacto'
import Horno1 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/Horno1.png'
import Horno2 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/Horno2.png'
import Maquina3 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/Maquina3.png'
import logo1 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/logoromco.png'
import logo2 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/logoservibaker.png'
import fullsize1 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/portfolio/fullsize/fullsize1.jpg'
import fullsize2 from '/Users/sebastianherrera/soltec/src/assets/Imagenes/portfolio/fullsize/fullsize2.jpg'




function Body() {

    return (
        <><div>
          <br />
          <br />
          br
            <CarruselSwiper/>
          
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
            <div id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                    
                      
                      
                      
                     
                     
                    </div>
                </div>
            </div><section className="page-section bg-dark text-white" />
           <Servicios/>


            {/* </section><br /><h3 className="Repuestolestras">Repuestos</h3><hr> className="divider"/</hr> */}
            <section className="page-section" id="carouselSection">
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Horno1} width="200px" />
                            </div>
                            <div className="carousel-item">
                                <img src={Horno2} width="200px" />
                            </div>
                            <div className="carousel-item">
                                <img src={Maquina3} width="200px" />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/img/Captura de pantalla 2023-11-13 a la(s) 23.49.36.png" width="200px" />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/img/Captura de pantalla 2023-11-20 a la(s) 15.49.03.png" width="200px" />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/img/Captura de pantalla 2023-11-20 a la(s) 15.49.22.png" width="200px" />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/img/Captura de pantalla 2023-11-13 a la(s) 23.33.41.png" width="200px" />
                            </div>
                            {/* <-- Agrega más imágenes o contenido de carrusel aquí --> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            </section>
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