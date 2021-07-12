import { useState, useEffect } from "react";

const useWindowWidth = () => {
    alert(31);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  let checkScreenSize = () => {
      alert(37);
    setIsScreenSmall(!(isScreenSmall));
  };
  alert(33);
  useEffect(() => {
    alert(34);
    checkScreenSize();
    alert(35);
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  alert(36);
  return isScreenSmall;
};

export default useWindowWidth;