import React, { useRef } from "react";
import useImageObserver from "../../../hooks/useImageObserver";

const Image = ({ alt, className, type, src }) => {
  const image = useRef();
  useImageObserver(image);

  return type === "div" ? (
    <div className={className} data-src={src} ref={image}></div>
  ) : (
    <img alt={alt} className={className} data-src={src} ref={image} />
  );
};

export default Image;
