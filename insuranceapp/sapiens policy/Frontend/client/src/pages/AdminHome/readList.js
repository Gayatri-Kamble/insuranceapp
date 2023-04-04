
import { Table,ButtonToggle } from 'reactstrap';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import SpecificUser from './specificUser';

const ReadList = (props) => {
  const navigate = useNavigate();
    const [li, setLi] = useState([])
    const setData = (id,email,firstName,lastName,address,age,gender,mobileNo,idProofType,idProofDetails) => {
      sessionStorage["id1"] = id;
      sessionStorage["email1"] = email;
        sessionStorage["firstName1"] = firstName;
        sessionStorage["lastName1"] = lastName;
        sessionStorage["address1"] = address;
        sessionStorage["age1"] = age;
        sessionStorage["gender1"] = gender;
        sessionStorage["mobileNo1"] = mobileNo;
        sessionStorage["idProofType1"] = idProofType;
        sessionStorage["idProofDetails1"] = idProofDetails;
     
  }
    
    const fetchList = () => {
    axios.get("http://localhost:8080/userList")
      .then((response) => {
        console.log(response);
        setLi(response.data.data)
      })
    }
  return (
    <div>
      <div>
      <h1><ButtonToggle color="primary" onClick={fetchList}>View list</ButtonToggle>{' '}</h1>
      </div>
      <div>

      </div>
    <div>
    <Table dark>
      <thead>
        <tr>
          
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
      {li.map((data) => {
                        return (
        <tr>
          <th scope="row">{data.id}</th>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.mobileNo}</td>
          <td>
          <Link to='/adminhome/specificuser'>
          <ButtonToggle color="primary" onClick={() => setData(data.id,data.email,data.firstName,data.lastName,data.address,data.age,data.gender,data.mobileNo,data.idProofDetails,data.idProofType)}>More Details</ButtonToggle>{' '}
          </Link>
          </td>
        </tr>
         )
        })}
      </tbody>
    </Table>
    </div>
    
  </div>
  
  );
}

export default ReadList;