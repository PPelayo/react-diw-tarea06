import { cartSelector } from "@/redux/cardSlice";
import CartIcon from "../icons/CartIcon";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "@/css/cart.css"

function Cart() {
  const items = useSelector(cartSelector);
  const [showCart, setShowCart] = useState(false);

  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const numberOfItems = items.reduce((acc, item) => acc + item.quantity, 0);
    setNumberOfItemsToShow(numberOfItems);
    const newTotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(Math.round(newTotal * 100) / 100);
  }, [items]);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleClose = () => setShowCart(false);

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        {numberOfItemsToShow > 0 ? (
          <span
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "var(--secundary-color)",
              top: "0",
              right: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "0",
              margin: "0",
            }}
          >
            {numberOfItemsToShow > 9 ? "9+" : numberOfItemsToShow}
          </span>
        ) : (
          ""
        )}
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            margin: "0",
          }}
          onClick={handleCartClick}
        >
          <CartIcon
            sty={{
              width: "42px",
              height: "42px",
            }}
          />
        </button>
      </div>

      <Offcanvas className="panel-cart" show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}>
            <h3>Carrito</h3>

            <button className="go-to-cart">
              Ir al Carrito
            </button>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    gap: "0.7rem",
                    alignItems: "center",
                    padding: "0.5rem",
                    justifyContent: "space-between",
                  }}
                >
                  <h5
                    style={{
                      margin: "0",
                      flex: "1",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                  className="item-price"
                  >
                    {item.price}€ x {item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <h3>Total: {total}</h3>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
