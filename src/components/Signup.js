import React, { useState } from 'react';
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from '../context/UserAuthContext';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate, Link } from 'react-router-dom';





function Signup() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const { signUp } = useUserAuth()

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
      navigate("/userprofile")
    } catch (err) {
      setError(err.massage)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <MDBContainer fluid className='p-4'>

        <MDBRow>

          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Invest with us <br />
              <span className="text-primary">Invest with AI</span>
            </h1>

            <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              Sign up, and let our Intelligent Models grow your Financial Portfolio.
            </p>

          </MDBCol>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <h2>Sign Up</h2>
                <hr/>

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
                  onChange={(e) => setEmail(e.target.value)
                  }
                />
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='w-100 mb-4' size='md'
                  type='Submit'
                >sign up</MDBBtn>
                {error && <Alert variant='danger'>{error}</Alert>}

                <div className="text-center">

                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                  </MDBBtn>

                </div>

                 <div>
                   Already have an account? <Link to={"/Login"}>Log In</Link>
                 </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </Form>

  );
}

export default Signup;