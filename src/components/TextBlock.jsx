import React from "react";

const Text = ({ date, headline, description, text, socials }) => {
  return (
    <div className="text-block offset-xl-1 col-xl-10">
      <p className="text-block__date">{date}</p>
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
    </div>
  );
};

export default Text;
