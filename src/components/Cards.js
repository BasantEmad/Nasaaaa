import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import './Cards.css';
import Select from 'react-select';
import {transformDateForAPIRequest , dateDiff} from '../NasaAPI';

 function Images({nasaData}) {
   const [result , ddlvalue]=useState(7);
 
  const  arr= [
    {value: 7, label: "Last week" },
   { value: 14, label: "Last 2 weeks"} ,
   {value: 30, label: "Last month" },
   {value: 'all', label: "All Results" },
  ];
 

  console.log(result)
  const ddhand = e=> {
    ddlvalue(e.value)
  }

  
   let filteredData = nasaData.filter(data => {
    if(result === 'all') {
      return data
    }
      return dateDiff(data?.date) <= result
   })
  
  return(
    <>
    
<h1>LOOK AT OUR WORK</h1>


<div className="selectt">

  <Select options={arr} onChange={ddhand}/>
 
</div>

<div className="container">
  <div className="cards-container" >

   {filteredData && filteredData.map(cardItem=>( <Card className="card"  key={cardItem?.title} style={{ width: '18rem' }} >
      <Card.Img variant="top" src={cardItem?.url} width="200px"/>
      <Card.Body>
      <Card.Title> {cardItem?.title} <span className="spann">{cardItem?.copyright}</span> </Card.Title>
      
      <h6 className="date">{cardItem?.date}</h6>
      
     
    </Card.Body>

    
  </Card>))}

 
  {filteredData.length === 0 && <p className="select2">  PLEASE SELESCT OPTION</p>}
  
  </div>

  
  </div>
  

  </>

  );
  }

export default Images;