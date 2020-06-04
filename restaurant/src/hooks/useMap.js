import { useEffect } from "react";
import setMap from "../helpers/map";

const useMap = () => {
  useEffect(() => {
    setMap();
  }, []);
};

export default useMap;
