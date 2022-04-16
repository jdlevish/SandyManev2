import React from 'react'
import { Container } from 'react-bootstrap'
import glyph from '../images/glyph-logo_May2016.png'


export default function SalonInfo() {
    return (
        <div>

            <Container>

                <p className='salon pt-3 mt-3 '>
                    The Sandy Mane  is located at <a href='https://www.google.com/maps/place/73640+El+Paseo+suite+%236,+Palm+Desert,+CA+92260/@33.7200728,-116.3821735,17z/data=!4m13!1m7!3m6!1s0x80dafe7b3de97821:0x2d5eba70e02a3c9!2s73640+El+Paseo+suite+%236,+Palm+Desert,+CA+92260!3b1!8m2!3d33.7200728!4d-116.3799848!3m4!1s0x80dafe7b3de97821:0x2d5eba70e02a3c9!8m2!3d33.7200728!4d-116.3799848'><address>73640 El Paseo suite  #6 Palm Desert Ca</address></a>
                    Call or Text :<a href="tel:17602858849"> 760.285.8849</a>
                    <br></br>
                    <img src={glyph} className="instaLogo p-2 salon"></img><a href="https://www.instagram.com/the.sandy.mane/">@the.sandy.mane</a>
                </p>


            </Container>

        </div >


    )
}
