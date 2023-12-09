import React, { useState } from 'react';
import "./formulario.css"

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para enviar datos a tu servidor o realizar otras acciones después de enviar el formulario.
    console.log('Formulario enviado:', formState);
  };


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
              mensaje y nos comunicaremos contigo lo antes posible!</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">

          </div>

          <form id="contact" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name..."
                value={formState.name}
                onChange={handleInputChange}
                data-sb-validations="required"
              />
              <label htmlFor="name">Nombre Completo</label>
              <div className="invalid-feedback" data-sb-feedback="name:required">
                A name is required.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formState.email}
                onChange={handleInputChange}
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
                value={formState.phone}
                onChange={handleInputChange}
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
                value={formState.message}
                onChange={handleInputChange}
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
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

