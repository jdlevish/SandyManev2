import React, { useState } from 'react'
import JSONData from "../../content/stylists.json"
import { Image, Container, Card, Row } from 'react-bootstrap';
import images from '../components/images'
import glyph from '../images/glyph-logo_May2016.png'


export default function Stylists() {
    const [stylist, setStylist] = useState(JSONData.stylists);
    return (

        stylist.map((person) =>

            <Card className="col-md-4 mt-4  ml-md-3 pr-sm-1 float-left card" >
                <Card.Img variant="top" src={person.image} className="cardOver pt-3" />
                <Card.Body className="cardOver">
                    <Card.Title>{person.name}</Card.Title>


                </Card.Body>
                <Card.Footer className="cardOver">
                    <img src={glyph} className="instaLogo p-2"></img><a className=" cardOver" href={person.instagramLink}> {person.instagram}</a>
                </Card.Footer>
            </Card >


        )



    )
}
