import "@/css/about-us.css";
import BasePage from "./BasePage";

function AboutUsPage() {
  return (
    <BasePage>
      <div style={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h1 className="title-about-us">Sobre nosotros</h1>

        <p className="p-info">
          Bienvenido a <strong>SUB-MODDING</strong>, tu destino confiable para
          la mejor experiencia en videojuegos. Con una trayectoria de más de
          cinco años en la industria, nos enorgullece ser líderes en la venta
          oficial de videojuegos, ofreciendo la más amplia selección de títulos
          para todas las plataformas. En <strong>SUB-MODDING</strong>, no solo
          vendemos juegos, creamos experiencias. Nos apasiona conectar a
          jugadores con sus títulos favoritos, brindando acceso a la última
          tecnología y a emocionantes aventuras virtuales. Nuestra dedicación a
          la excelencia y el servicio al cliente ha establecido sólidas
          relaciones con la comunidad gamer. Únete a nosotros y descubre por qué{" "}
          <strong>SUB-MODDING</strong>
          es el hogar de los verdaderos amantes de los videojuegos. ¡Juega con
          nosotros!
        </p>

        <div className="frames-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iRQFV2AumA8?si=lPyoCEkQWa2WCKHb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1ET-9s0n1MToDIRD7uXwP0C6KIo8&hl=es&ehbc=2E312F"
            width="560"
            height="315"
          ></iframe>
        </div>
      </div>
    </BasePage>
  );
}

export default AboutUsPage;
