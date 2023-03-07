import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnavbar from "./Topnavbar";
import Forex from './pages/Forex';
import Crypto from './pages/Crypto'
import Stocks from './pages/Stocks';
import NFTs from './pages/NFTs';
import Login from "./Login";
import Signup from "./Signup";
import Userprofile from "./Userprofile"
import ProtectedRoute from "./ProtectedRoute";
import Marketview from './userprofileComponents/userprofilePages/Marketview'
import Payments from './userprofileComponents/userprofilePages/Payments'
import Products from './userprofileComponents/userprofilePages/Products'
import Dashboard from './userprofileComponents/userprofilePages/Dashboard'
import Sidebar from "./userprofileComponents/Sidebar"
import { UserAuthContextProvider } from "../context/UserAuthContext"


function App() {

  return (
    <>
      <div>
        <Router>
          <UserAuthContextProvider>
            <Routes>
              <Route exact path="/" element={<div> <Topnavbar /> <Home /> </div>} />
              <Route path="/forex" element={<div> <Topnavbar /> <Forex /> </div>} />
              <Route path='/crypto' element={<div> <Topnavbar /> <Crypto /> </div>} />
              <Route path="/stocks" element={<di> <Topnavbar /> <Stocks /> </di>} />
              <Route path="/nfts" element={<div> <Topnavbar /> <NFTs /> </div>} />
              <Route path="/login" element={<div> <Topnavbar /> <Login /> </div>} />
              <Route path="/signup" element={<div> <Topnavbar /> <Signup /> </div>} />
              <Route exact path="/userprofile" element={
                <ProtectedRoute>
                      <Userprofile />
                </ProtectedRoute>
              } />
              <Route path="/userprofile/dashboard" element={<div style={{ display: 'flex' }}><Sidebar /><Dashboard /></div>} />
              <Route path="/userprofile/marketview" element={<div style={{ display: 'flex' }}><Sidebar /><Marketview /></div>} />
              <Route path="/userprofile/payments" element={<div style={{ display: 'flex' }}><Sidebar /><Payments /></div>} />
              <Route path="/userprofile/products" element={<div style={{ display: 'flex' }}><Sidebar /><Products /></div>} />
            </Routes>
          </UserAuthContextProvider>

        </Router>

      </div>
    </>

  )
}

export default App;
