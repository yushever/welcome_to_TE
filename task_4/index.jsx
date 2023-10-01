import { useState } from "react";

const DefaultBlock = (mouseEnterCallbak, data) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {data}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  let data = <img src={imgSrc} alt={imgAlt} />;

  return DefaultBlock(mouseEnterCallbak, data);
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  let data = <p>{content}</p>;

  return DefaultBlock(mouseEnterCallbak, data);
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  let data = (
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  );

  return DefaultBlock(mouseEnterCallbak, data);
};
