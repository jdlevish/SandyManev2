import React from 'react'
import { Image, Container, Row } from 'react-bootstrap';
import cactusLogo from '../images/cactusLogo.png';
export default function SalonText() {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <img className='col-md-6 cactusLogo  float-left pt-5' src={cactusLogo} ></img>


                <Container className='text-main col-md-6  pt-3'>

                    <article>Located in the heart of palm desert, off of beautiful el Paseo, the sandy mane, a new high end salon, offers a bright welcoming vibe with talented on trend, down to earth stylists ready to help you relax, and leave looking and feeling your best.

                        The sandy mane feels like sunshine. Good vibes, bright colors, Smiling faces. Here we believe in giving our guests the highest quality experience. And with that high quality eco friendly hair products are all we use and carry in the salon as well. We want you to not only love your hair when you leave us but continue loving your locks with your custom prescribed home care regiment. We’re happy to educate so you get the most out of your hair and products.

                        All of our stylists here at the sandy mane know the importance of staying on top of the latest trends and techniques. We thrive on exceeding our guests expectations. We look forward to sharing our second home with you. Come spend some time with us at the sandy mane where it feels like endless summer.</article>
                </Container>
            </div>

        </div>
    )
}
