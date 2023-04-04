import React from 'react'

//import { useNavigate } from "react-router";

import ReadList from './readList';
//import AddClient from '../Client/AddClient';


function AdminHome() {

  return(
      <div>

      <h1>List of Clients</h1>

      <ReadList/>

          
                <div className='btn-group'>
                <div className='center'>
                    <a href="/addClient" class="btn btn-primary ">Add Client</a>
                </div>
                </div>
      </div>
  )
}


export default AdminHome