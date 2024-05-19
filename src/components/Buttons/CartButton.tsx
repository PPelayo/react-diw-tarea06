import CartIcon from "../icons/CartIcon";

interface Props {
  onClick: () => void;
}

function CartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px",
        borderRadius: "8px",
        backgroundColor: "var(--secundary-color)",
      }}
    >
      <CartIcon sty={{
        width: "3rem",
        height: "3rem",
  
      }}/>
    </button>
  );
}

export default CartButton;
