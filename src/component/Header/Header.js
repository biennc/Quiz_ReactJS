import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="">Bien</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          Bien
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  Log in
                </button>
                <button
                  className="btn-sign-up"
                  onClick={() => navigate("/register")}>
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleLogin()}>
                  Log in
                </NavDropdown.Item>
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
