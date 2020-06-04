import { useEffect } from "react";
import lazyLoadImages from "../helpers/imagesObserver";

const useImageObserver = (ref) => {
  useEffect(() => {
    const imageNode = ref.current;
    lazyLoadImages(imageNode);
    return () => lazyLoadImages(imageNode).unobserve(imageNode);
  }, [ref]);
};

export default useImageObserver;
