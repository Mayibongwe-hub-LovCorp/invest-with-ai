import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Footer from '../../Footer'
import { TfiShiftLeft } from "react-icons/tfi"
import { useNavigate } from "react-router"
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'

import bot1 from '../../images/image1.png'



import { useUserAuth } from '../../../context/UserAuthContext'



function Dashboard() {

  const [gender, setGender] = React.useState('male')

  const handleChange = (event) => {
    setGender(event.target.value)
  }

  const resetRadioState = () => {
    setGender('');
  }

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`)
  const { logOut, user } = useUserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  }



  return (
    <div style={{ width: '100%', }}>
      <div>
        <Navbar bg="light" expand="lg" id='navbar' >
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll variant="pills" activeKey="1" onSelect={handleSelect}>
                <div style={{ alignItems: "center", display: "flex", border: "2px black solid", borderRadius: "5px", width: "100%" }}>
                  <div style={{ backgroundColor: "black", width: "30px", height: "30px", borderRadius: "50%", margin: " 4px 7px " }}>

                  </div>
                  <NavDropdown id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1"><div style={{ backgroundColor: "black", width: "100px", height: "100px", borderRadius: "50%", margin: "auto", alignItems: "center", justifyContent: "center" }}></div></NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" style={{ fontSize: "14px" }}>{user && user.email}</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">
                      <div>
                        <p>Account Balance : <span>$ 5340.00</span></p>
                        <p>Average Profit : <span>$ 1575.00</span></p>
                        <p>Activated Models: <span>2 out of 8</span></p>
                      </div>
                      <div>
                        <Button variant="">Deposit</Button>
                        <Button variant="danger">Withdraw</Button>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4"><TfiShiftLeft onClick={handleLogout} /> log out</NavDropdown.Item>
                  </NavDropdown>
                  <p style={{ fontSize: "14px", margin: " 5px 10px" }}>{user && user.email}</p>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Dashboard
          </ListGroup.Item>
          <ListGroup.Item as="li">Alpha</ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Terminator
            <div>

            </div>
          </ListGroup.Item>
          <ListGroup.Item as="li">Knight Fury</ListGroup.Item>
        </ListGroup>




        <div className='d-flex justify-content-center mb-8 mt-8 pt-4 pb-4 px-5 py-5' style={{ padding: "30px", }}>

          <CardGroup className='pt-10' style={{ margin: '8px', justifyContent: "space-between", gap: "8px" }} >
            <Card style={{ animate: "0.8s" }}>
              <Card.Img variant="top" src={bot1} style={{ height: "200px", backgroundClip: "black" }} />
              <Card.Body>
                <Card.Title>Alpha Bot</Card.Title>
                <Card.Text>
                  Alpha
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"><input type="radio" value="Activated" name="use" />
                <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={bot1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Atom</Card.Title>
                <Card.Text>
                  Atom
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={bot1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Black Cat</Card.Title>
                <Card.Text>
                  Black Cat
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={bot1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Godzilla</Card.Title>
                <Card.Text>
                  Godzilla
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>

        </div>

        <div className='d-flex justify-content-center mb-8 mt-8 pt-4 pb-4 px-5 py-5' style={{ padding: "30px", }}>

          <CardGroup className='pt-10' style={{ margin: '8px', justifyContent: "space-between", gap: "8px" }} >
            <Card style={{ animate: "0.8s" }}>
              <Card.Img variant="top" src={bot1} style={{ height: "200px", backgroundClip: "black" }} />
              <Card.Body>
                <Card.Title>Knight Fury</Card.Title>
                <Card.Text>
                  Knight Fury
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={bot1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Pip Zombie</Card.Title>
                <Card.Text>
                  Pip Zombie
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={bot1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Sophia</Card.Title>
                <Card.Text>
                  Sophia
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                </small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={bot1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Terminator</Card.Title>
                <Card.Text>
                  Terminator
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">                  <form>
                    <p>Activation</p>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                      /> Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                      /> De-Activate
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="transgender"
                        checked={gender === 'transgender'}
                        onChange={handleChange}
                      /> Mantainance
                    </div>
                    <div>
                      <button
                        type="reset"
                        onClick={resetRadioState}
                      />
                    </div>
                  </form>
                  </small>
              </Card.Footer>
            </Card>

          </CardGroup>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard