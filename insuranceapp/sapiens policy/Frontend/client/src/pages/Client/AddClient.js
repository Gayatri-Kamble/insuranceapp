import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { useNavigate } from 'react-router'
import { URL } from '../../config';

const AddClient = () => {
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [mobileNo,setMobileNo] = useState('')
  const [age,setAge] = useState('')
  const [password, setPassword] = useState('')
  

 
  //used to navigate frm one component to n]another
  const navigate = useNavigate()

  const addClient = () => {
    if (firstName.length === 0) {
      toast.warning("Please enter your FirstName!")
     } 
     else if (lastName.length === 0) {
       toast.warning("Please enter your LastName!")
     }
     else if (email.length === 0 ) {
       toast.warning("Please enter your email!")
    }
    else if (mobileNo.length === 0) {
       toast.warning("Please enter your mobile number!")
     }
     else if (age.length === 0) {
       toast.warning("Please enter your age!")
     }
     else if (password.length === 0) {
      toast.warning("Please enter Initial Password!")
    }
  
    else {
      const body = {
        id,
        firstName,
        lastName,
        email,
        mobileNo,
        age,
        password
              }
    
      const url = `${URL}/addClient`

      

      axios.post(url, body).then((response) => {
        const result = response.data

        
        if (result['status'] === 'success') {
          toast.success("Client added successfully!")
          navigate('/adminhome')
        } else {
          console.log()
          toast.error("Client already exists!")
        }
      })

  }

  }


  return (
    <div>
      <h1>Add Client</h1>

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
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="Client First Name" />
                </div>
                 <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Last Name</label>
                  <input onChange={(e) => {
                    setLastName(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="Client Last Name" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Email</label>
                  <input onChange={(e) => {
                    setEmail(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="Please enter your email" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Mobile No.</label>
                  <input onChange={(e) => {
                    setMobileNo(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="mobileno." />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Age</label>
                  <input onChange={(e) => {
                    setAge(e.target.value)
                  }} type="text" id="disabledTextInput" className="form-control" placeholder="age" />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Password</label>
                  <input onChange={(e) => {
                    setPassword(e.target.value)
                  }} type="password" id="disabledTextInput" className="form-control" placeholder="********" />
                </div>

               
                <div className="mb-3">
                  <button onClick={addClient} type="button" className="btn btn-dark">Add Client</button>
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

export default AddClient
