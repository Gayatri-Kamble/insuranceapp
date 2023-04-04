import { useState } from 'react';
import axios from 'axios';
import { URL } from '../../config';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Package = () => {
    const [gpackage, setPackage] = useState([])
    // const sessionStorage["packageId"] = id;
    const setData = (id,packagePrice,heading,ImageLink,country,description,name,noOfDays,packageType,places,type,inclusionType,adventureName)=>{
        sessionStorage["packageId"] = id;
        sessionStorage["totalPrice"] = packagePrice;
        sessionStorage["heading"] = heading;
        sessionStorage["image_link"]= ImageLink;
        sessionStorage["country"]=country;
        sessionStorage["description"]=description;
        sessionStorage["package_name"]=name;
        sessionStorage["no_of_days"]=noOfDays;
        sessionStorage["package_type"]=packageType;
        sessionStorage["places"]=places;
        sessionStorage["type"]=type;
        sessionStorage["inclusionType"]=inclusionType;
        sessionStorage["adventureName"]=adventureName;
        
      }
    const {id}= sessionStorage
    const getPackage = () => {
        axios.get(`${URL}/package/${sessionStorage["packageId"]}`).then((response) => {
            console.log(response);
            const result = response.data
            if (result['status'] === 'success') {
                toast.success('data fetched')
                setPackage(response.data.data)
            }
            else {
                toast.warning('data not fetched')
            }
        })
    }
    useEffect((e) => {
        getPackage()
    }, [])

    return (
        <div class='package'>
            <div class="sticky-top"></div>
            <div class="p-3 mb-2 bg-dark text-dark"><h1><b>{gpackage.heading}</b></h1></div>
            <div>
                <div>
                    <Card>
                        <CardImg top width="100%" src={gpackage.imageLink} />
                        <div class="sticky-top">
                            <div class="p-2 mb-2 bg-dark text-dark">{gpackage.description}</div>
                        </div>
                        
                        <CardBody>
                            <div><h2>   For <b>{gpackage.noOfDays}</b> days...</h2></div>
                            <div className="row">
                                 <div className="col">
                                    <Card body outline color="secondary">
                                        <CardTitle><h3>Package Includes</h3></CardTitle>
                                        <div className="col">
                                    <div className="col"><h4>{gpackage.inclusionType}</h4></div>
                                </div>
                                    </Card>
                                </div> 
                                <div className="col">
                                     <div>
                                        <Card body outline color="secondary">
                                            <CardTitle><h3>Adventures</h3></CardTitle>
                                            <div className="col">
                                    <div className="col"><h4>{gpackage.adventureName}</h4></div>
                                </div>
                                            
                                        </Card>
                                    </div> 
                                </div>
                                <div className="col">
                                    <div className="col"><h1><span class="badge"><b>₹ {gpackage.packagePrice}</b></span></h1></div>
                                </div>
                            </div><br />

                            <h3>Places You'll See</h3>

                            <div>{gpackage.places}</div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col"></div>
                                        <div className="col">
                                            <h1><button type="button" class="btn btn-outline-dark btn-lg ">Enquire Now</button></h1>
                                        </div>
                                        <div className="col"><Link to='/addbooking'>
                                            <h1><button type="button" class="btn btn-warning btn-lg" onClick={() => setData(gpackage.id,gpackage.packagePrice,gpackage.heading)}>Book now</button></h1></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

    )



}

export default Package




// import { useState } from 'react';
// import axios from 'axios';
// import { URL } from '../../config';
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import './index.css'
// import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';


// const Package = () => {



//     const [gpackage, setPackage] = useState([])
//     // const sessionStorage["packageId"] = id;
//     const {id}= sessionStorage
//     const getPackage = () => {
//         axios.get(`${URL}/package/1`).then((response) => {
//             console.log(response);
//             const result = response.data
//             if (result['status'] === 'success') {
//                 toast.success('data fetched')
//                 setPackage(response.data.data)
//             }
//             else {
//                 toast.warning('data not fetched')
//             }
//         })
//     }
//     useEffect((e) => {
//         getPackage()
//     }, [])

//     return (
//         <div class='package'>
//             <div class="sticky-top"></div>
//             <div class="p-3 mb-2 bg-dark text-dark"><h1><b>{gpackage.heading}</b></h1></div>
//             <div>
//                 <div>
//                     <Card>
//                         <CardImg top width="100%" src={gpackage.imageLink} />
//                         <div class="sticky-top">
//                             <div class="p-2 mb-2 bg-dark text-dark">{gpackage.description}</div>
//                         </div>
                        
//                         <CardBody>
//                             <div><h2>   For <b>{gpackage.noOfDays}</b> days...</h2></div>
//                             <div className="row">
//                                 <div className="col">
//                                     <Card body outline color="secondary">
//                                         <CardTitle><h3>Package Includes</h3></CardTitle>
//                                         <CardText>{gpackage.inclusion.map((e) => {
//                                             return (
//                                                 <div>
//                                                     <div>{e.type}</div>
//                                                 </div>
//                                             )
//                                         })}</CardText>
//                                     </Card>
//                                 </div>
//                                 <div className="col">
//                                     <div>
//                                         <Card body outline color="secondary">
//                                             <CardTitle><h3>Adventures</h3></CardTitle>
//                                             <CardText>{gpackage.adventure.map((e) => {
//                                                 return (
//                                                     <div>
//                                                         <div>{e.name}</div>
//                                                     </div>
//                                                 )
//                                             })}</CardText>
//                                         </Card>
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <div className="col"><h1><span class="badge"><b>₹ {gpackage.packagePrice}</b></span></h1></div>
//                                 </div>
//                             </div><br />

//                             <h3>Places You'll See</h3>

//                             <div>{gpackage.places}</div>
//                             <div className="row">
//                                 <div className="col"></div>
//                                 <div className="col"></div>
//                                 <div className="col">
//                                     <div className="row">
//                                         <div className="col"></div>
//                                         <div className="col"></div>
//                                         <div className="col">
//                                             <h1><button type="button" class="btn btn-outline-dark btn-lg ">Enquire Now</button></h1>
//                                         </div>
//                                         <div className="col">
//                                             <h1><button type="button" class="btn btn-warning btn-lg">Book now</button></h1>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </CardBody>
//                     </Card>
//                 </div>
//             </div>
//         </div>

//     )



// }

// export default Package