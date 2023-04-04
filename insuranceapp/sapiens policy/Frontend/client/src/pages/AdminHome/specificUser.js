import { ButtonToggle, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
function SpecificUser()
{
    return(
        <div>
     <h1 align="center">User Details</h1>
     <br>
     </br>
            
    <div align="center">
    <Toast>
        <ToastHeader icon="primary">
          ID
        </ToastHeader>
        <ToastBody>
        {sessionStorage["id1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">
          Email
        </ToastHeader>
        <ToastBody>
        {sessionStorage["email1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">
          First Name
        </ToastHeader>
        <ToastBody>
        {sessionStorage["firstName1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="danger">
          Last Name
        </ToastHeader>
        <ToastBody>
        {sessionStorage["lastName1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="warning">
          Address
        </ToastHeader>
        <ToastBody>
        {sessionStorage["address1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="info">
          Age
        </ToastHeader>
        <ToastBody>
        {sessionStorage["age1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">
          Mobile Number
        </ToastHeader>
        <ToastBody>
        {sessionStorage["mobileNo1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="dark">
        ID Proof Type
        </ToastHeader>
        <ToastBody>
        {sessionStorage["idProofType1"]}
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">
          ID Proof Details
        </ToastHeader>
        <ToastBody>
        {sessionStorage["idProofDetails1"]}
        </ToastBody>
      </Toast>
      <br>
      </br>
      <Link to='/adminhome'>
      <ButtonToggle color="primary">Back To Home</ButtonToggle>{' '}</Link>
    </div>

    </div>
    )

}
export default SpecificUser;