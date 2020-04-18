// Write your Character component here
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';

export default function Character(props) {
    return (
   
        <Card className='card'>
          <CardImg top width="100%" src={props.item.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>name:{props.item.name}</CardTitle>
            <CardSubtitle>species:{props.item.species}</CardSubtitle>
            <CardText>status:{props.item.status}</CardText>
           
          </CardBody>
        </Card>
    
        
    )
}
