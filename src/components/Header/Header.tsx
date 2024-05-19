import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "@/css/icons.css";
import Person from "../logo/Person";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "var(--header-color)",
        }}
      >
        <Container fluid className="d-flex gap-3 align-items-center">
        <div className="d-flex align-items-center justify-content-between flex-grow-1">
            <Navbar.Brand className="link" href="/">
              Sub-Modding
            </Navbar.Brand>
            <Nav.Item className="d-lg-none"> {/* Solo visible en pantallas pequeñas */}
              <Person
                css="col-auto link"
                sty={{ width: "42px" }}
              />
            </Nav.Item>
          </div>
          <Navbar.Toggle className="link" aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Nav
              // className="my-2 my-lg-0"
              className=""
              navbarScroll
            >
              <Nav.Link className="link" href="#action1">
                Juegos
              </Nav.Link>
              <Nav.Link className="link" href="#action2">
                Merchandasing
              </Nav.Link>
              <Nav.Item className="d-none d-lg-flex"> {/* Oculto en pantallas pequeñas */}
                <Person
                  css="col-auto link"
                  sty={{ width: "42px" }}
                />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <header>
        <nav className="header-nav">
          <button className="icon-nav-hamburguesa">Menu de opciones</button>
        </nav>
        <section className="main-header-sect">
          <section className="search-sect">
            <input type="text" name="search" placeholder="Buscar..." />
            <span className="icon-lupa"></span>
          </section>

          <nav className="pages-nav">
            <a href="./pages/merchandasing.html">MERCHANDASING</a>
            <a href="./pages/games.html">JUEGOS</a>
          </nav>

          <nav className="config-header-nav">
            <button className="icon-person">Menu de opciones personales</button>
            <button className="icon-cart"></button>
            <button className="icon-languaje">Cambio de idioma</button>
          </nav>
        </section>
      </header> */}
    </>
  );
}

export default Header;
