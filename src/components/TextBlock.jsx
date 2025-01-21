import React from "react";

const Text = ({
  size = "large",
  info,
  headline,
  description,
  text,
  socials,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={`text-block text-block--${size} container`}>
      <div className="offset-1 offset-xl-1 col-10 col-xl-10">
        <p className="text-block__info">{info}</p>
        <h1 className="text-block__headline">{headline}</h1>
        <p className="text-block__description">{description}</p>
        <p className="text-block__text">{text}</p>
        {socials && (
          <div className="text-block__socials">
            {socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-block__social-link"
                key={social.link}
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="text-block__button"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Text;
