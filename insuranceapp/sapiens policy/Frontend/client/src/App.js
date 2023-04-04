import "./App.css";

import img1 from "../src/assets/icons8-instagram-100.png";
import img2 from "../src/assets/icons8-facebook-circled-100.png";
import img3 from "../src/assets/icons8-twitter-circled-100.png";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import SpecificUser from "./pages/AdminHome/specificUser";
import Client from "./pages/Client";
import AddClient from "./pages/Client/AddClient";
import ForgotPassword from "./pages/ForgotPassword";
import ProposalForm from "./pages/ProposalForm";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from "reactstrap";


function App() {
  const mystyle = {
    color: "darkorange",
    fontFamily: "Dancing Script",
  };

  const logOutUser = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("age");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("mobileNo");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("idProofType");
    sessionStorage.removeItem("idProofNo");
    sessionStorage.loginStatus = "0";
    toast.success("Logged out successfully");
  };

  const { firstName, loginStatus } = sessionStorage;
  const getTitle = () => {
    if (loginStatus != "1") {
      return "My Account";
    } else return firstName;
  }

  const title = getTitle()

  return (
    <div>
      {/* <div className="container"> */}
      <section class="Navbar">
        <Navbar collapseOnSelect expand="lg">
          {/* <Container> */}
          <Navbar.Brand href="home"><img src="https://licindia.in/CorporateSiteDemo/media/LIC_Media/NewLogo.png"></img></Navbar.Brand>
          {/* <Navbar.Brand href="#home">Packages</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              
              
              
              <Nav.Link href="AboutUs">Contact Us</Nav.Link>
              <NavDropdown title="Signin/Signup" id="collasible-nav-dropdown">
                <NavDropdown.Item href="signin">Signin</NavDropdown.Item>
                <NavDropdown.Item href="signup">Signup</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title={title} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/proposalform">Proposal Form</NavDropdown.Item>
                <NavDropdown.Item onClick={logOutUser}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </section>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/proposalform" element={<ProposalForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminhome/specificuser" element={<SpecificUser />} />
          <Route path="/client" element={<Client />} />
          <Route path="/addclient" element={<AddClient/>}/>
          
       
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
      <div>
        <div class="shadow p-1 mb-3 bg-body rounded">
          <footer class="site-footer">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <br></br>
                  <h6>About</h6>
                  <p class="text-justify">
                    Booking a travel package when it comes to travelling to new
                    parts of the country or the world is a practice that has
                    slowly gained a lot of popularity. Today, whenever it is
                    about planning a holiday trip, many people have a preferred
                    travel portal in India that is best for their specific
                    needs.
                  </p>
                </div>

                <div class="col-6 col-md-3">
                  <br></br>
                  <h6>Quick Links</h6>
                  <ul class="footer-links">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/aboutus">About us</a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-md-3">
                  <br></br>
                  <h6>Contact Us</h6>
                  <ul class="footer-links">
                    <h6>Mobile : 1800 77 1718</h6>
                    <h6>Email : explore@travelworld.com</h6>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                      <p>
                        Copyright &copy; 2021 All Rights Reserved By PuneTours
                      </p>
                    </div>
                    <div class="col-md-4 col-sm-9 col-12">
                      <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">
                          <img class="img-responsive2" src={img2} alt="none" />
                        </li>
                        <br></br>
                        <li class="list-group-item">
                          <img class="img-responsive2" src={img1} alt="none" />
                        </li>
                        <br></br>
                        <li class="list-group-item">
                          <img class="img-responsive2" src={img3} alt="none" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
       </div>
  );
}

export default App;
