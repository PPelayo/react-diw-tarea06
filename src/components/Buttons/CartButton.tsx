import carrito from "@res/carrito.png";

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
      <img
        src={carrito}
        alt="Agregar al carrito"
        style={{
          width: "42px",
          height: "42px",
          objectFit: "cover",
        }}
      />
    </button>
  );
}

export default CartButton;
