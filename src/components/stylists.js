import React, { useState } from 'react'
import { Image, Container, Card, Row } from 'react-bootstrap';


export default function stylists() {
    const [stylist, setStylist] = useState([{ name: 'Megan Levish', image: "", instagram: "" }]);
    return (
        stylist.map((person) =>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{person.name}</Card.Title>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{person.instagram}</small>
                </Card.Footer>
            </Card>)
    )
}
