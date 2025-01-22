import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    email: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      if (value === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: false,
        }));
      } else {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: !emailValid,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return;
    }

    console.log("Formular mit folgenden Daten abgeschickt: ", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setErrors({
      email: false,
    });
  };

  return (
    <div className="contact-form container">
      <h1 className="contact-form__headline">Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="contact-form__group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="contact-form__input"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Vorname eingeben"
              />
              <label htmlFor="firstName" className="contact-form__label">
                Vorname
              </label>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="contact-form__group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="contact-form__input"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nachname eingeben"
              />
              <label htmlFor="lastName" className="contact-form__label">
                Nachname
              </label>
            </div>
          </div>
        </div>

        <div className="contact-form__group ">
          <input
            type="email"
            id="email"
            name="email"
            className={`contact-form__input ${
              errors.email ? "contact-form__input--error" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            placeholder="Email eingeben"
            required
          />
          <label htmlFor="email" className="contact-form__label">
            Email*
          </label>
          {errors.email && (
            <span className="contact-form__error">
              Bitte geben Sie eine gültige E-Mail-Adresse ein.
            </span>
          )}
        </div>
        <div className="contact-form__group d-flex justify-content-end">
          <button type="submit" className="contact-form__submit">
            Senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
