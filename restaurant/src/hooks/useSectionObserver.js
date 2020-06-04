import {useEffect} from "react";
import highlightSectionOnScroll from "../helpers/sectionsObserver";

const useSectionObserver = (ref) => {
  useEffect(() => {
    highlightSectionOnScroll(ref);
    return () => highlightSectionOnScroll(ref).unobserve(ref);
  }, [ref]);
}

export default useSectionObserver;