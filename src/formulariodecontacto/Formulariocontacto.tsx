import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./formulario.css"


const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_g6mco6v', 'template_nxzsnur', form.current, 'JZnQU1KNyvup4qory')
    .then((result) => {
      console.log(result.text);
      toast.success("Mensaje enviado con éxito!");
      if (form.current) {
        form.current.reset(); // Aquí se restablece el formulario
      }
    }, (error: { text: any; }) => {
      console.log(error.text);
      toast.error("Ocurrió un error al enviar el mensaje.");
    });
  };


  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = event.target;
  //   setFormState({ ...formState, [name]: value });
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  // };


  return (
    <div className='container col-6'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Contactanos!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">¿Listo para comenzar tu próximo proyecto con nosotros? ¡Envíanos un
              mensaje y nos comunicaremos contigo a la brevedad!</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">

          </div>

          <form id="contact" ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Enter your name..."
             
                data-sb-validations="required"
              />
              <label htmlFor="user_name">Nombre Completo</label>
              <div className="invalid-feedback" data-sb-feedback="user_name:required">
                A name is required.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="email"
                name="user_email"
                type="email"
                placeholder="name@example.com"
                data-sb-validations="required,email"
              />
              <label htmlFor="email">Direccion de Correo Electronico</label>
              <div className="invalid-feedback" data-sb-feedback="email:required">
                An email is required.
              </div>
              <div className="invalid-feedback" data-sb-feedback="email:email">
                Email is not valid.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                data-sb-validations="required"
              />
              <label htmlFor="phone">Numero de Teléfono</label>
              <div className="invalid-feedback" data-sb-feedback="phone:required">
                A phone number is required.
              </div>
            </div> 

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter your message..."
                data-sb-validations="required"
                rows={60} 
              ></textarea>
              <label htmlFor="message">Mensaje</label>
              <div className="invalid-feedback" data-sb-feedback="message:required">
                A message is required.
              </div>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
                Enviar correo
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

