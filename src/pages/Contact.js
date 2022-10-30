import React from "react";
import "../styles/Contact.css";

import ListGroup from 'react-bootstrap/ListGroup';


    function ActiveExample() {
      return (
        <div className="container">
          <div className="row">
          <div className="col-sm-6">
        <h3>OUR TOP LOCATIONS</h3>
    

        
        <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
      </div>
      <div className="col-sm-6">
        <div>
      
      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110515.02341493647!2d31.061840330666445!3d30.048489744745776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585a29f1b324d9%3A0xc5c5525706430b8d!2z2YXYr9mK2YbYqSDYp9mE2LTZitiuINiy2KfZitiv2Iwg2KfZhNis2YrYstip!5e0!3m2!1sar!2seg!4v1665830145172!5m2!1sar!2seg" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      </div>
      </div>
      );
    }
    
   
 

export default ActiveExample;
