import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopButton = () => {
  const [state, setState] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {state && (
        <FontAwesomeIcon icon={faChevronUp} size="2x" onClick={scrollToTop} />
      )}
    </div>
  );
};

export default ScrollTopButton;
