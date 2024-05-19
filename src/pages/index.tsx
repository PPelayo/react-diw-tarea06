import GameCard from "../components/Games/GameCard";
import "../css/index.css";
import arkImg from "@res/ark.jpg";
import gta460 from "@res/gtav-460.png";
import gta1080 from "@res/gtav-1080.jpg";
import miles460 from "@res/miles-morales460.png";
import miles1080 from '@res/miles-morales.jpg'
import payday from "@res/payday.jpg";
import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
import MainCarousel from "@/components/Carousel/Carousel";
import BasePage from "./BasePage";
function Index() {

  const favGames : Array<Game> = [
    {
      title : "GTA V",
      descripcion : "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games.",
      price : 22.99,
      img : gta460,
      discount : 20
    },
    {
      title : "Spider-Man: Miles Morales",
      descripcion : "",
      price : 22.99,
      img : miles460,
      discount : 20
    },
    {
      title : "ARK: Survival Evolved",
      descripcion : "",
      price : 22.99,
      img : arkImg,
      discount : 20
    }
  ]

  return (
    <>
      <BasePage>
        <main>
          <section
            id="sec-main-game"
            style={{
              marginTop: "2rem",
            }}
          >
            <MainCarousel
              images={[
                <img
                  className="img-main-game"
                  src={gta1080}
                  alt="Grand Theft Auto 5"
                />,
                <img
                  className="img-main-game"
                  src={miles1080}
                  alt="Spider-Man: Miles Morales"
                />,
                <img className="img-main-game" src={payday} alt="Pay Day 3" />,
              ]}
            />
          </section>

          <div className="barra"></div>

          <section className="favs-games-sect">
            <div className="games-title-sect">
              <h2>Ofertas</h2>
            </div>
            <section className="body-games-sect">
              {favGames.map((game, index) => (
                <GameCard key={index} game={game} route="/notImplemented" />
              ))}
            </section>
          </section>
        </main>
        <ScrollToTopButton />
      </BasePage>
    </>
  );
}

export default Index;
