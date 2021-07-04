import React from 'react'
import { Image, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-slideshow-image';
import salon from '../images/salon.jpg'
import salon1 from '../images/salon1.jpg'
import salon2 from '../images/salon2.jpg'

const properties = {
    duration: 6000,
    transitionDuration: 700,
    infinite: true,
    prevArrow: <div> </div>,
    nextArrow: <div ></div>
};


export default function Hero() {
    return (
        <div className="">
            <Fade {...properties}>

                <img className='img-fluid each-fade ' src={salon} ></img>


                <img className=' img-fluid each-fade ' src={salon1} ></img>
                <img className=' img-fluid each-fade ' src={salon2} ></img>
            </Fade>
        </div>
    )
}
