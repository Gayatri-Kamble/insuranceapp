import { useState } from 'react';
import axios from 'axios'
import { ButtonToggle,Card, CardBody } from 'reactstrap';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router'
import { Col, Button, Form, FormGroup, Label, Input, FormText, CardImg } from 'reactstrap';
function AddBooking() {
    const [personCount, setPersonCount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const packageId = sessionStorage["packageId"]
    const heading = sessionStorage["heading"]
    const totalPrice1 = sessionStorage["totalPrice"]
    const userEmail = sessionStorage["email"]
    const firstName = sessionStorage["firstName"]
    const lastName = sessionStorage["lastName"]
    const totalPrice = (personCount * totalPrice1 -(personCount * totalPrice1) *0.1 );
    const navigate = useNavigate()
    

    const sendDataToAPI = () => {
        axios.post(`http://localhost:8080/booking/add/${packageId}`, {
            userEmail,
            personCount,
            totalPrice,
            startDate,
            endDate
        }).then(() => {
            toast.success("Congratulations...Booking successful")
            navigate('/home')
        })
    }
    return (
        
       <div style={{
        backgroundColor:'grey'
        }}> 
      <div align="center" >
          <div className="row" >
                            <div className="col"  ></div>
                            <div className="col"  style={{
                                  backgroundColor:'white',
                                border: '1px solid grey' // it is not work.
                                }}>
      <br>
      </br><h1>Booking Page</h1> <br>
      </br>
      
      
      

      
      <h5>Package Name : {heading}</h5>
      <h5>Name : {firstName} {lastName}</h5>
      <h5>Amount/person : {totalPrice1} ₹</h5>
      <h5>Total Price</h5>(with 10% Festival Discount)<h5>{totalPrice}₹</h5>
      <h5>Enter number of Person</h5>
           <Form>
      <FormGroup row>
      <Col sm={2}>
          
        </Col>
        <Col sm={1}>
          
        </Col>
        <Col sm={2}>
          
          </Col>
        <Col sm={2}>
          <Input type="fname" name="fname" id="examplePerson" onChange={(e) => setPersonCount(e.target.value)}/>
          
        </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}>

        
        <Label for="exampleDate"><h5>Start From</h5></Label>
        <Input
          type="date"
          name="date1"
          id="exampleDate1"
          placeholder="date placeholder"
          onChange={(e) => setStartDate(e.target.value)}
        /></Col>

      <Col sm={6}>

        
      <Label for="exampleDate"><h5>Upto</h5></Label>
      <Input
      type="date"
      name="date2"
      id="exampleDate2"
      placeholder="date placeholder"
      onChange={(e) => setEndDate(e.target.value)}
      /></Col>
      </FormGroup>
      
      
    </Form>
    
    <ButtonToggle color="primary" onClick={sendDataToAPI}>Checkout</ButtonToggle>{' '}</div><div className="col"  ></div></div>
                            
            </div>
            </div>
    )

}

export default AddBooking;
