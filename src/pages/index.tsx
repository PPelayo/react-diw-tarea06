import GameCard from "../components/Games/GameCard";
import Header from "../components/Header/Header";
import "../css/index.css";
import arkImg from "@res/ark.jpg";
import gta460 from "@res/gtav-460.png";
import gta1080 from "@res/gta-v1080.png";
import miles460 from "@res/miles-morales460.png";
import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";

function Index() {
  return (
    <>
      <Header />
      <main>
        <section id="sec-main-game">
          <article className="borde-animado img-info-game">
            <img
              className="img-main-game"
              src={gta1080}
              alt="Grand Theft Auto 5"
            />
            <span className="info-game info-game-precio">39,99€</span>
            <span className="title-main-game">GTA V Dexluxe Edition</span>
          </article>
          <div>
            <ul className="puntos-imagen">
              <li className="punto"></li>
              <li className="punto"></li>
              <li className="punto"></li>
            </ul>
          </div>
        </section>

        <div className="barra"></div>

        <section className="favs-games-sect">
          <div className="games-title-sect">
            <h2>Ofertas</h2>
          </div>
          <section className="body-games-sect">
            <GameCard
              title="GTA V"
              img={gta460}
              price={22.99}
              discount={20}
            />

            <GameCard
              title="Spider-Man: Miles Morales"
              img={miles460}
              price={50.99}
              discount={10}
            />

            <GameCard
              title="ARK: Survival Evolved"
              img={arkImg}
              price={40.99}
              discount={10}
            />
          </section>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default Index;
