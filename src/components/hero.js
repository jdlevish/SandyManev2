import React from 'react'
import { Image, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-slideshow-image';
import salon from '../images/salon.jpg'
import salon1 from '../images/salon1.jpg'
import salon2 from '../images/salon2.jpg'
import everyone from '../images/everyone2.jpg'


const properties = {
    duration: 2000,
    transitionDuration: 700,
    infinite: true,
    prevArrow: <div> </div>,
    nextArrow: <div ></div>
};


export default function Hero() {
    return (
        <div className="bottomStyle">

            {/* <img className='img-fluid each-fade ' height='auto' width='100%' src={salon} ></img> */}
            <img className='img-fluid each-fade ' height='60vh' width='100%' src={everyone} ></img>
            {/* <img className=' img-fluid each-fade ' height='auto' width='100%' src={salon1} ></img>
                <img className=' img-fluid each-fade ' height='auto' width='100%' src={salon2} ></img> */}

        </div>
    )
}
