import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../config";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinUser = () => {
    if (email.length === 0) {
      toast.warning("please enter your Email");
    } else if (password.length === 0) {
      toast.warning("please enter your Password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      const url = `${URL}/user/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        const {
          email,
          firstName,
          lastName,
          userId,
          dob,
          address,
          age,
          gender,
          mobileNo,
          role,
          idProofType,
          idProofDetails,
        } = result["data"];

        if (result["status"] === "success") {
          toast.success("Welcome to the application");

          if (role === "ADMIN") {
            navigate("/adminhome");
          } else {
            navigate("/home");
          }
        } else {
          toast.error("Invalid user name or password");
        }
        console.log(result);

        sessionStorage["email"] = email;
        sessionStorage["firstName"] = firstName;
        sessionStorage["lastName"] = lastName;
        sessionStorage["userId"] = userId;
        sessionStorage["dob"] = dob;
        sessionStorage["address"] = address;
        sessionStorage["age"] = age;
        sessionStorage["gender"] = gender;
        sessionStorage["mobileNo"] = mobileNo;
        sessionStorage["role"] = role;
        sessionStorage["idProofType"] = idProofType;
        sessionStorage["idProofDetails"] = idProofDetails;
        sessionStorage["loginStatus"] = "1";
      });
    }
  };

  return (
    <div>
      <div className="signin">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div>
              <br></br>
              <br></br>
              <br></br>

              <div className="row">
                <div className="col"></div>
                <div
                  className="col"
                  style={{
                    //  backgroundColor:'white',
                    border: "3px solid black", // it is not work.
                  }}
                >
                  <h1>
                    <i>Signin</i>
                  </h1>
                  <div className="form">
                    <div className="mb-3">
                      <label htmlFor="" className="label-control">
                        <b>
                          <i>Email address</i>
                        </b>
                      </label>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="label-control">
                        <b>
                          <i>Password</i>
                        </b>
                      </label>
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <div>
                        <b>
                          <i>
                            No account yet?{" "}
                            <Link to="/signup">Signup here</Link>
                          </i>
                        </b>
                      </div>
                      <br></br>
                      <div>
                        <b>
                          <i>
                            forgot password?{" "}
                            <Link to="/forgetpassword">
                              Enter your Id proof details
                            </Link>
                          </i>
                        </b>
                      </div>

                      <br></br>
                      <button onClick={signinUser} className="btn btn-primary">
                        <i>Signin</i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
