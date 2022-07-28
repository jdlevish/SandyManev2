import JSONData from "../../content/products.json"
import React, { useState } from 'react'
import { Image, Container, Card, Row, Collapse } from 'react-bootstrap';
export default function Products() {
    const [products, setproducts] = useState(JSONData.products);
    // const [open, setOpen] = useState(false);
    return (

        products.map((products) =>

            < Card className="col-md-4 mt-4  ml-md-3 pr-sm-1 float-left card" >
                <Card.Img

                    aria-controls={products.name}

                    variant="top" src={products.image} className="cardOver pt-3" />
                <Card.Body className="cardOver float-right">
                    <Card.Title className="ProductsTitle">{products.name}</Card.Title>

                    <div id={products.number} className="productsText">
                        {products.description}
                    </div>



                </Card.Body>

            </Card >


        )



    )
}