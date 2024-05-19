import "@/css/section-games.css";
import "@/css/icons.css";
import CartButton from "@/components/Buttons/CartButton";

interface Props {
  title: string;
  price: number;
  discount: number;
  img: string;
  route: string;
}

function GameCard(props: Props) {
  return (
    <>
      <article className="game-article">
        <a className="aside-info-game img-info-game" href={props.route}>
          <div className="img-info-game">
            {/* <a className="aside-info-game" href={props.route}> */}
            <img src={props.img} alt={props.title} />
            <span className="info-game info-game-precio">{props.price}€</span>
            <span className="info-game info-game-descuento">
              {props.discount}%
            </span>
            {/* </a> */}
          </div>
        </a>
        <div className="title-game">
            <h3>{props.title}</h3>
            <CartButton onClick={() => {}}/>
          </div>
      </article>
    </>
  );
}

export default GameCard;
