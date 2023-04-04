import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const firstName1 = sessionStorage["firstName"]
const lastName1 = sessionStorage["lastName"]
const email1 = sessionStorage["email"]
const age1 = sessionStorage["age"]
const gender1 = sessionStorage["gender"]
const mobileNo1 = sessionStorage["mobileNo"]
const idProofDetails1 = sessionStorage["idProofDetails"]
const idProofType1 = sessionStorage["idProofType"]

const Profile = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [idProofDetails, setIdProofDetails] = useState('')
  const [idProofType, setIdProofType] = useState('')

  // used to navigate from one component to another
  const navigate = useNavigate()



  const profile = () => {
    if (firstName.length === 0) {
      toast.warning('Please enter First Name')
    } else if (lastName.length === 0) {
      toast.warning('Please enter Last Name')
    } else if (email.length === 0) {
      toast.warning('Please enter Email')
    } else if (password.length === 0) {
      toast.warning('Please enter Password')
    } else if (age.length === 0) {
      toast.warning('Please enter your Age')
    } else if (gender.length === 0) {
      toast.warning('Please enter your Gender')
    } else if (mobileNo.length === 0) {
      toast.warning('Please enter your Mobile Number')
    } else if (idProofDetails.length === 0) {
      toast.warning("Please enter your Id Proof Details!")
    }
    else if (idProofType.length === 0) {
      toast.warning("Please enter your Id Proof Type!")
    }
    //  else if (password != confirmPassword) {
    //   toast.warning('Password does not match')
    //   } 
    else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
        mobileNo,
        idProofDetails,
        idProofType,
      }

      // url to call the api
      const url = `${URL}/user/userProfile/`

      // http method: post
      // body: contains the data to be sent to the API
      axios.get(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Successfully signed up new user')

          // navigate to the signin page
          navigate('/signin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div>
      <br></br>
      <h1>Your Profile</h1>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={firstName1}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={lastName1}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={email1}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Age
              </label>
              <input
                type="password"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={age1}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Gender
              </label>
              <input
                type="number"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={gender1}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={mobileNo1}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                ID Proof Type
              </label>
              <input
                type="text"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={idProofType1}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                ID Proof Details
              </label>
              <input
                type="text"
                className="form-control"
                required={true}
                readOnly={true}
                placeholder={idProofDetails1}
              />
            </div>


            <div className="mb-3">
              Already have account?? <Link to="/login">Login here</Link>
            </div>

            <div className="mb-3">
              <div>
                for home page<Link to="/home">click here</Link>
              </div>
              <br></br>
              <div>
                Proposal Form <Link to="/proposalform">click here</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Profile
