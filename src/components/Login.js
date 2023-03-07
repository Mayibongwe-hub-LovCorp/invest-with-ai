import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Form, Alert } from "react-bootstrap"
import GoogleButton from "react-google-button"
import { useUserAuth } from '../context/UserAuthContext';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/Userprofile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/userprofile");
    } catch (error) {
      console.log(error.message);
    }
  };




  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant='danger'>{error}</Alert>}
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h2>Login</h2>
        <hr/>

        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" type='Submit'>Sign in</MDBBtn>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm" />
            </MDBBtn>

          </div>
        </div>

      </MDBContainer>
       <div>
         <GoogleButton
           className='g-btn'
           type='dark'
           onClick={handleGoogleSignIn}
         />
       </div>
       <div className='p-4 box mt-3 text-center'>
         Dont't have an account <Link to="/Signup">Sign up</Link>
       </div>
    </Form>

  );
}

export default Login;