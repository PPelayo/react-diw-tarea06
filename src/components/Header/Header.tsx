import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "@/css/icons.css";
import Person from "../logo/Person";
import SubModdingIcon from "@res/logo-claro-opt.svg";

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
              <img
                src={SubModdingIcon}
                alt="SubModding"
                style={{ width: "42px" }}
              />
            </Navbar.Brand>
            <Nav.Item className="d-lg-none">
              {" "}
              {/* Solo visible en pantallas pequeñas */}
              <Person css="col-auto link" sty={{ width: "42px" }} />
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
              className=""
              navbarScroll
            >
              <Nav.Link className="link pages-nav" href="#action1">
                <h4 className="transition">Juegos</h4>
              </Nav.Link>
              <Nav.Link className="link pages-nav" href="#action2">
                <h4 className="transition">Merchandasing</h4>
              </Nav.Link>
              <Nav.Item className="d-none d-lg-flex">
                {/* Oculto en pantallas pequeñas */}
                <Person css="col-auto link" sty={{ width: "42px" }} />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
