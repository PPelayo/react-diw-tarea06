import { useEffect, useState } from "react";
import ArrowUp from "@res/arrow-up.svg";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar el scroll y mostrar u ocultar el botón
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop != 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Efecto para agregar y quitar el event listener al hacer scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para scrollear hacia arriba cuando se hace clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              backgroundColor: "#f9cf9e",
              color: "#ffffff",
              border: "5px solid black",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "16px",
              cursor: "pointer",
              padding: "8px",
              zIndex: 1000,
              // padding: "px", // Ajusta el padding a cero para que la imagen ocupe todo el espacio del botón
            }}
          >
            <img
              src={ArrowUp}
              alt="Arrow Up"
              style={{
                verticalAlign: "none",
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ajusta el tamaño de la imagen
              }}
            />
          </button>
        )}
      </div>
    </>
  );
}

export default ScrollToTop;
