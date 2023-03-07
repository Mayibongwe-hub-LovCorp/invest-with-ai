import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import '../style.css';
import { useState} from 'react'
function TopNavbar() {

  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
    const nav = document.getElementById('navbar')
    nav.style.display = 'none'
    console.log("clicked away");
  };
  const handleClick = () => {
    setOpen(!open);
    console.log("clicked");
  };


  return (
    <>
      <Navbar bg="light" expand="lg" id='navbar'>
        <Container fluid>
          <Navbar.Brand href="#"><div>logo goes here</div><h1>Investing with AI</h1></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >

              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/Forex'>Forex</Nav.Link>
              <Nav.Link href='/Crypto'>Crypto</Nav.Link>
              <Nav.Link href='/Stocks'>Stocks</Nav.Link>
              <Nav.Link href='/NFTs'>NFTs</Nav.Link>

            </Nav>
            <Form className="d-flex m-auto">
              <Stack direction='horizontal' gap={4}>
                <Button
                   variant="outline-success" href='/Login' onClick={handleClickAway}>Log in</Button>
                <Button variant="outline-danger" href='/Signup' onClick={handleClick}>Sign Up</Button>
              </Stack>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}


export default TopNavbar