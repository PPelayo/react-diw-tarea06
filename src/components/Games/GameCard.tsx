import '@/css/section-games.css'

interface Props {
    title : string,
    price : number,
    discount : number,
    img : string
}

function GameCard(props : Props) {
    return(
        <> 
            <article className="game-article">
              <div className="img-info-game">
                <img src={props.img} alt={props.title} />
                <a
                  className="penlace-info-game"
                  href="./pages/notImplemented.html"
                ></a>
                <span className="info-game info-game-precio">{props.price}€</span>
                <span className="info-game info-game-descuento">{props.discount}%</span>
              </div>
              <div className="title-game">
                <h3>{props.title}</h3>
              </div>
            </article>
        </>
    )
}

export default GameCard;