import { Accordion, Tab, Tabs } from "react-bootstrap";
import BasePage from "./BasePage";
import { useEffect, useState } from "react";
import "@/css/cart-header.css";
import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/cardSlice";

function CartPage() {
  const items = useSelector(cartSelector);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    );

  },[items])

  return (
    <>
      <BasePage>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "3rem",
            justifyContent: "space-between",
          }}
        >
          <DetalleVenta items={items} />
          <Resumen total={total} />
        </div>
      </BasePage>
    </>
  );
}

function DetalleVenta({ items = [] }: { items: ItemCart[] }) {
  const [key, setKey] = useState("articulos");

  return (
    <>
      <section className="detalle-venta-sect">
        <h4>Detalle de la venta</h4>
        <Tabs activeKey={key} onSelect={(k) => setKey(k as string)}>
          <Tab eventKey="articulos" title="Artículos">
            <ul className="cart-items">
              {items.map((item) => (
                <li className="cart-item">
                  <h5>{item.title}</h5>
                  <span className="item-price">
                    {item.price}€ x {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="envio" title="Detalles de envío">
            Introduzca los datos de la direccion de envio
          </Tab>
          <Tab eventKey="pagos" title="Formas de pago">
            <Accordion
              style={{
                marginTop: "1rem",
              }}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Tarjeta de crédito</Accordion.Header>
                <Accordion.Body>
                  Introduzca su tarjeta de credito
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>PayPal</Accordion.Header>
                <Accordion.Body>
                  Introduzca aqui los datos de paypal
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Contro reembolso</Accordion.Header>
                <Accordion.Body>
                  El contrareembolso tiene un coste adicional del 4%
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
        </Tabs>
      </section>
    </>
  );
}

function Resumen({ total = 0 }: { total?: number }) {
  return (
    <>
      <section className="resumen-sect">
        <h4>Resumen</h4>

        <div
          className="resumen-total"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h6 style={{ fontWeight: "normal", fontSize: "1.1rem" }}>
            Total (Impuesto incluidos)
          </h6>
          <h2>{total}€</h2>
        </div>

        <button className="btn-confirm">Confirmar</button>
      </section>
    </>
  );
}

export default CartPage;
