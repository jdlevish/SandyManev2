import React from 'react'
import { Image, Container, Row } from 'react-bootstrap';
import salon from '../images/salon.jpg'

export default function Hero() {
    return (
        <div >
            {/* <Container fluid className='covid-notice'>

                <p className=" p-1 pt-2 pb-2  m-auto">Following all Covid-19 Safety Requirements For Your Safety and Ours</p>

            </Container> */}
            {/* <Image className='hero-image' src={salon} fluid></Image> */}

            < Container fluid className="background-hero " style={{ backgroundImage: `url(${salon})` }
            }>
                <div className="overlay"><Container fluid className='text-main'>

                </Container></div></Container>



        </div >
    )
}
