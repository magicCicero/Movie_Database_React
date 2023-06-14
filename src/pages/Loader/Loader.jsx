import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(navigate("/home"));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Audio
        height="120"
        width="120"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </>
  );
};

export default Loader;
