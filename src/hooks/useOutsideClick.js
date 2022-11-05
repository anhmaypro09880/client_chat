import { useRef, useState, useEffect } from "react";

const useOutsideClick = (initialValue) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(initialValue);

  const handleClickOutside = (event) => {
    console.log(ref);
    if (ref.current && !ref.current.contains(event.target)) setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { isActive, setIsActive, ref };
};

export default useOutsideClick;
