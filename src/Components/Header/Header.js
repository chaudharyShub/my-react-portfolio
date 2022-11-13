import './Header.css'
import { useState } from 'react';
import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useStateValue } from '../Context/StateProvider';

function Header() {

  // Dark Mode 
  const [{ mode }, dispatch] = useStateValue();
  const [innerText, setInnerText] = useState('Dark');

  const changeTheme = () => {
    if (mode) {
      dispatch({
        type: "ENABLE_LIGHT_MODE"
      });
      setInnerText('Dark');
    } else {
      dispatch({
        type: "ENABLE_DARK_MODE"
      });

      setInnerText('Light');
    };
  }

  const dark = {
    color: 'white',
  };
  const light = {
    color: 'black',
  };

  return (
    <div className="header_main">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={mode ? "dark" : "light"}
        variant={mode ? "dark" : "light"}
      >
        <Container>
          <Link to="home" smooth={true} duration={0} offset={-100}>
            <Navbar.Brand id='logo_'>Shubham Chaudhary</Navbar.Brand>
          </Link>
          <span className="example-spacer"></span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='list_'>
            <Nav style={mode ? dark : light}>
              <Link to="home" spy={true} smooth={true} duration={0} offset={-100}>Home</Link>
              <Link to="about" spy={true} smooth={true} duration={0} offset={-50}>About</Link>
              <Link to="projects" spy={true} smooth={true} duration={0} offset={-50}>Projects</Link>
              <Link to="contact" spy={true} smooth={true} duration={0} offset={-50}>Contact</Link>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={innerText}
                  style={mode ? { "color": "white" } : { "color": "black" }}
                  className='toggle_switch'
                  onClick={changeTheme}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
