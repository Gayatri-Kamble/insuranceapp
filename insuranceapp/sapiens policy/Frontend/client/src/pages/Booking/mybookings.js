import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Table,ButtonToggle } from 'reactstrap';

import FetchUserHistory from '../../components/FetchUserHistory';
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from './../../config';

const MyBookings = (props) => {
    const [Booking, setBooking] = useState([]);
    const navigate = useNavigate();
    const user =(name,pname)=>{
        sessionStorage["name"]=name;
        sessionStorage["pname"]=pname;
        // sessionStorage["email"]=email;
    }
   
   const {email}= sessionStorage

    const searchBookings= () => {
        const url = `${URL}/user/userHistory/${email}`;
              axios.get(url).then((response) => {
                const result = response.data
                if (result['status'] == 'success') {
                  setBooking(result.data)
                  console.log(result)
                } else {
                  toast.error(result['error'])
                }
              })
            }
    useEffect(() => {
                      searchBookings()
                      console.log('getting called')
                      console.log()
                    }, [])



  return (
    <div className="row">
        <div className="col">
                <h2>My Bookings</h2>
        </div>
        <div className="">
            {Booking.map((e,index) => {
                    console.log(e[0]+"sdfsdf ")
            return <FetchUserHistory 
            
            id={e.id}
            firstName={e[0]}
            lastName={e[1]}
            gender={e[2]}
            name={e[3]}
            totalPrice={e[4]}
            bookingDate={e[5]}
            personCount={e[6]}
            pname={e[7]}
            pgender={e[8]}
            />
            


            })}
        </div>
    </div>
  );
}

export default MyBookings;
