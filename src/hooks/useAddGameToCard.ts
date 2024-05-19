import { addItem } from "@/redux/cardSlice";
import { useDispatch } from "react-redux";

const useAddGameToCart = () => {
    const dispatch = useDispatch();

    const addGameToCart = (game: Game) => {
        const itemCart: ItemCart = {
            id: game.id,
            title: game.title,
            img: game.img,
            price: game.price,
            discount: game.discount,
            quantity: 1,
        };

        dispatch(addItem(itemCart));
    };

    return addGameToCart;
};

export default useAddGameToCart;