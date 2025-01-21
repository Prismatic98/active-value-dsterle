import React from "react";
import TextBlock from "./TextBlock";

const TextBlockContainer = ({ elements, color = "gray" }) => {
  return (
    <div className={`textBlockContainer ${color}`}>
      {elements && (
        <div className="textBlockContainer__wrapper container">
          <div className="textBlockContainer__content">
            {elements.map((element) => (
              <div
                className="textBlockContainer__element"
                key={element.headline}
              >
                <TextBlock
                  size={element.size}
                  info={element.info}
                  headline={element.headline}
                  description={element.description}
                  text={element.text}
                  buttonText={element.buttonText}
                  buttonLink={element.buttonLink}
                ></TextBlock>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default TextBlockContainer;
