import React, { useState } from "react";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
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
        <button
          className="newsletter__button"
          type="submit"
          disabled={loading || subscribed}
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : subscribed ? (
            "Newsletter abonniert!"
          ) : (
            "Newsletter abonnieren"
          )}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
