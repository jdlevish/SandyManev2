import React from 'react'
import { Image, Container, Row } from 'react-bootstrap';
import cactusLogo from '../images/cactusLogo.png';
export default function SalonText() {

    return (
        <div className='container-fluid bottomStyle text-main'>
            <div className='row '>
                <img className='col-md-6 cactusLogo  float-left pt-5 img-fluid' src={cactusLogo} ></img>


                <Container className='text-main col-md-6  pt-5'>

                    <article ><p>Located in the heart of palm desert, off of beautiful el Paseo. The sandy mane is a new high end salon that offers a bright welcoming vibe with talented, on trend, down to earth stylists ready to help you relax, knowing your looking and feeling your best.</p>
                        <br></br>

                        <p>The sandy mane feels like sunshine, Good vibes, bright colors and Smiling faces. Here we believe in giving our guests the highest quality experience and with that high quality eco friendly hair products are all we use/carry in the salon. We want you to not only love your hair when you leave us but continue loving your locks with your custom prescribed home care regiment. We’re happy to educate so you get the most out of your hair and products.
                        </p>
                        <br></br>
                        <p>
                            All of our stylists here at the sandy mane know the importance of staying on top of the latest trends and techniques. We thrive on exceeding our guests expectations and We look forward to sharing our second home with you. Come spend some time with us at the sandy mane where it always feels like endless summer.</p></article>
                </Container>
            </div>

        </div >
    )
}
