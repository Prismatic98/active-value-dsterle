import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ContactForm = ({ show, setShow }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      console.log(formData);
      handleClose();
    }
    setValidated(true);
  };

  return (
    <>
      <Modal className="contact-form" show={show} onHide={handleClose}>
        <Modal.Header className="contact-form__header">
          <Modal.Title>Kontaktformular</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="contact-form__group" controlId="formFirstName">
              <Form.Label>Vorname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vorname eingeben"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="contact-form__group" controlId="formLastName">
              <Form.Label>Nachname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nachname eingeben"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="contact-form__group" controlId="formEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Bitte geben Sie eine valide Email-Adresse ein.
              </Form.Control.Feedback>
            </Form.Group>

            <button className="contact-form__submit" type="submit">
              Abschicken
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactForm;
