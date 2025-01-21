import React, { useState } from "react";

const Newsletter = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("Vielen Dank für Ihre Anmeldung!");
      setShowToast(true);
    }, 2000);
  };

  return (
    <div className="newsletter">
      <p className="newsletter__description">Newsletter</p>
      <h2 className="newsletter__headline">Nichts verpassen!</h2>
      <p className="newsletter__text">
        At vero et accusam et justo duo dolores et ea rebum.
      </p>
      <form onSubmit={handleSubmit}>
        <button className="newsletter__button" type="submit" disabled={loading}>
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Newsletter abonnieren"
          )}
        </button>
      </form>

      {showToast && (
        <div className="toast show" role="alert">
          <div className="toast-header">
            <strong className="me-auto">Benachrichtigung</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">{message}</div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
