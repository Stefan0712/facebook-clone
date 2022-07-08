import React from "react"
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from 'react-bootstrap'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import '../app.css'

function App() {
  return (
    <div className="main-container">
        
          <Router>
            <AuthProvider>
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route path="/update-profile" element={<UpdateProfile />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/forgot-password' element={<ForgotPassword />} />
                </Routes>
            </AuthProvider>

          </Router>
        
      </div>
  )
}
  


export default App;
