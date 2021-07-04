import React, { useState } from 'react'
import { Image, Container, Card, Row } from 'react-bootstrap';
import images from '../components/images'
import glyph from '../images/glyph-logo_May2016.png'


export default function Stylists() {
    const [stylist, setStylist] = useState([{ name: 'Megan Levish', image: 'https://res.cloudinary.com/cvdevjl/image/upload/w_1000,c_fill,ar_1:1,g_auto/v1620263728/megan.jpg', instagram: "@hair_by_meganl", instagramLink: 'http://www.instagram.com/hair_by_meganl' }, { name: 'Tori', image: 'https://res.cloudinary.com/cvdevjl/image/upload/w_1000,c_fill,ar_1:1,g_auto/v1607575889/17.jpg', instagram: "@insta", instagramLink: 'http://www.instagram.com/hair_by_meganl' }, { name: 'Clair', image: 'https://res.cloudinary.com/cvdevjl/image/upload/w_1000,c_fill,ar_1:1,g_auto/v1607575889/17.jpg', instagram: "@insta", instagramLink: 'http://www.instagram.com/hair_by_meganl' }, { name: 'Tara', image: 'https://res.cloudinary.com/cvdevjl/image/upload/w_1000,c_fill,ar_1:1,g_auto/v1607575889/17.jpg', instagram: "@insta", instagramLink: 'http://www.instagram.com/hair_by_meganl' }]);
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
