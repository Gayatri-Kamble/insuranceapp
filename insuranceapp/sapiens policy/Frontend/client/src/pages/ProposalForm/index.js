import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const id = sessionStorage["id"]
const firstName1 = sessionStorage["firstName"]
const lastName1 = sessionStorage["lastName"]
const email1 = sessionStorage["email"]
const age1 = sessionStorage["age"]
const gender1 = sessionStorage["gender"]
const mobileNo1 = sessionStorage["mobileNo"]
const address1 = sessionStorage["address"]
const idProofDetails1 = sessionStorage["idProofDetails"]
const idProofType1 = sessionStorage["idProofType"]

const ProposalForm = () => {

  const [age, setAge] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [idProofDetails, setIdProofDetails] = useState('')
  const [idProofType, setIdProofType] = useState('')
  const [mobileNo, setMobileNo] = useState('')

  const navigate = useNavigate()

  const proposalform = () => {
    if (age.length === 0) {
      toast.warning('please enter your New Age')
    } else if (mobileNo.length === 0) {
      toast.warning('please enter your New Mobile Number')
    } else {
      const body = {
        id,
        firstName,
        lastName,
        email,
        age,
        gender,
        mobileNo,
        address,
        idProofDetails,
        idProofType
      }

      // url to make proposalform api call
      const url = `${URL}/user/proposalform/${id}`

      // make api call using axios
      axios.put(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Profile Updated')
          console.log(body)
          // get the data sent by server
          const { age, mobilenumber } = result['data']



          // persist the logged in user's information for future use
          // sessionStorage['age'] = age
          // sessionStorage['mobilenumber'] = mobilenumber

          // navigate to home component
          navigate('/home')
        } else {
          toast.error('Data not get updated')
        }
      })
    }
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Proposal Form</h1>
      <br></br>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                required={true}
                // readOnly={true}
               

              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                className="form-control"
                
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                type="text"
                className="form-control"
                
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Age
              </label>
              <input
                onChange={(e) => {
                  setAge(e.target.value)
                }}
                type="number"
                className="form-control"
                
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile Number
              </label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value)
                }}
                type="text"
                className="form-control"
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address
              </label>
              <input
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
                
              />
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">Id Proof Type</label>
              <select onChange={(e) => {
                setIdProofType(e.target.value)
              }} className="form-select" aria-label="Default select example">
                <option selected>{idProofType1}</option>
                <option value="Aadhaar">Aadhaar</option>
                <option value="PAN">PAN</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                ID Proof Details
              </label>
              <input
                onChange={(e) => {
                  setIdProofDetails(e.target.value)
                }}
                type="text"
                className="form-control"
                
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="" className="label-control">
                Type of Insurance
              </label>
              <input
                onChange={(e) => {
                  setIdProofDetails(e.target.value)
                }}
                type="text"
                className="form-control"
                
              />
            </div>
            <div className="mb-3">
              <button onClick={ProposalForm} className="btn btn-primary">
                Proposal Form
              </button>
              <br></br>
              <br></br>

              <br></br>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default ProposalForm