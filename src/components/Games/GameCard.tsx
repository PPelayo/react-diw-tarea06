import "@/css/section-games.css";
import "@/css/icons.css";
import CartButton from "@/components/Buttons/CartButton";
import useAddGameToCard from "@/hooks/useAddGameToCard";

interface Props {
  route : string,
  game : Game,
}

function GameCard({game, route}: Props) {

  const addGameToCard = useAddGameToCard();

  const handleAddCard = () => {
    addGameToCard(game)
  }

  return (
    <>
      <article className="game-article">
        <a className="aside-info-game img-info-game" href={route}>
          <div className="img-info-game">
            <img src={game.img} alt={game.title} />
            <span className="info-game info-game-precio">{game.price}€</span>
            <span className="info-game info-game-descuento">
              {game.discount === 0 ? "" : game.discount + "%"}
            </span>
          </div>
        </a>
        <div className="title-game">
            <h3>{game.title}</h3>
            <CartButton onClick={handleAddCard}/>
          </div>
      </article>
    </>
  );
}


export default GameCard;

