import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { useNavigate } from 'react-router'
import { URL } from './../../config';

const Signup = () => {
  const [firstName, setFirstName] = useState('')

  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const [mobileNo, setMobileNo] = useState('')
  const [idProofDetails, setIdProofDetails] = useState('')
  const [idProofType, setIdProofType] = useState('')

  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  //used to navigate frm one component to n]another
  const navigate = useNavigate()

  const signupUser = () => {
    if (firstName.length === 0) {
      toast.warning("Please enter your First Name!")
    } else if (lastName.length === 0) {
      toast.warning("Please enter your Last Name!")
    }
    else if (email.length === 0 && (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2)(email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2)) {
      toast.warning("Please enter your Email!")
    }
    else if (age.length === 0) {
      toast.warning("Please enter your Age!")
    }
    else if (gender.length === 0) {
      toast.warning("Please enter your Gender!")
    }
    else if (mobileNo.length === 0) {
      toast.warning("Please enter your Mobile Number!")
    }
    else if (idProofDetails.length === 0) {
      toast.warning("Please enter your Id Proof Details!")
    }
    else if (idProofType.length === 0) {
      toast.warning("Please enter your Id Proof Type!")
    }
    else if (password.length === 0) {
      toast.warning("Please enter your Password!")
    }
    else if (password !== confirmpassword) {
      toast.warning("Password doesn't match, please check your password and confirm it!")
    } else {
      const body = {
        firstName,
        lastName,
        email,
        age,
        gender,
        mobileNo,
        idProofDetails,
        idProofType,
        password,
      }

      const url = `${URL}/user/signup`


      axios.post(url, body).then((response) => {
        const result = response.data

        if (result['status'] === 'success') {
          toast.success("Account created successfully!")
          navigate('/signin')
        } else {
          console.log()
          toast.error("User already exists!")
        }

      })

    }

  }







  return (
    <div>
      <h1>Signup</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="row">

            <div className="col">
              <form>

                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">First Name</label>
                  <input onChange={(e) => {
                    setFirstName(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="First Name" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Last Name</label>
                  <input onChange={(e) => {
                    setLastName(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="Last Name" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Email</label>
                  <input onChange={(e) => {
                    setEmail(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Age</label>
                  <input onChange={(e) => {
                    setAge(e.target.value)
                  }} type="number" id="disabledTextInput" className="form-control" placeholder="99" />
                </div>
               
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Gender</label>
                  <select onChange={(e) => {
                    setGender(e.target.value)
                  }} className="form-select" aria-label="Default select example">
                    <option selected>Select Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Mobile No.</label>
                  <input onChange={(e) => {
                    setMobileNo(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="0000-000-000" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Password</label>
                  <input onChange={(e) => {
                    setPassword(e.target.value)
                  }} type="password" id="disabledTextInput" className="form-control" placeholder="********" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Confirm Password</label>
                  <input onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }} type="password" id="disabledTextInput" className="form-control" placeholder="********" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Id Proof Type</label>
                  <select onChange={(e) => {
                    setIdProofType(e.target.value)
                  }} className="form-select" aria-label="Default select example">
                    <option selected>Select Document Type</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="PAN">PAN</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Id Proof Details</label>
                  <input onChange={(e) => {
                    setIdProofDetails(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="0000-0000-0000" />
                </div>
                <div className="mb-3">
                  Already have account?? <Link to="/login">Login here</Link>
                </div>

                <div className="mb-3">
                  <button onClick={signupUser} type="button" className="btn btn-dark">Signup</button>
                </div>


              </form>
            </div>

          </div>
        </div>
        <div className="col"></div>
      </div>


    </div>
  )
}

export default Signup