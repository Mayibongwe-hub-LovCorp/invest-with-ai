import React from 'react'
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit'


function Footer() {
  return (
    <>
      <div style={{
        display: 'block',
        margin: '40px',
        padding: 'auto',
        justifyContent: 'center',
        alingItems: 'center',
        fontSize: '12px',

      }}>
          <p style={{
            display: 'block',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '40px 10px',
            padding: 'auto',
            fontSize: '24px'
          }}> Follow us on our Social Media :</p>
          <div className='d-flex justify-content-between mx-auto' style={{width: ' 40px'}}>
            <MDBBtn tag='a' color='none' className='m-3' style={{color:'#1266f1'}} >
              <MDBIcon fab icon='twitter' size='sm'/>
            </MDBBtn> 

            <MDBBtn tag='a' color='none' className='m-3' style={{color:'#1266f1'}} >
              <MDBIcon fab icon='facebook-f' size='sm'/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-3' style={{color:'#1266f1'}} >
              <MDBIcon fab icon='github' size='sm'/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-3' style={{color:'#1266f1'}} >
              <MDBIcon fab icon='instagram' size='md'/>
            </MDBBtn>
          </div>
        

          <span
          style={{
            display: 'block',
            fontSize: '12px',
            
          }}
          >Created by Mayibongwe Thomson Sinyonde. Invest With AI</span>

      </div>
    </>
  )
}

export default Footer