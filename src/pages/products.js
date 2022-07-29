import React from 'react'
import NavBar from '../components/Nav';
import '../App.css';



import { Component } from "react"
import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from '../components/products.js'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    return <div className="App">
        <NavBar />
        <Container>

            <div className="mt-4">
                <div className="productBrand mt-5  d-flex flex-row productBackground ">
                    <div className="col-7 mr-auto">
                        <h1 className='productBrandHeader pt-2'>Kevin.Murphy</h1>
                        <h4 className='productBrandDescription pt-2 pl-2'>Born from
                            the same philosophy as skincare, KEVIN.MURPHY products are weightlessly designed to deliver performance, strength and longevity.
                            Combining hi-tech scientific knowledge with the best natural ingredients available, KEVIN.MURPHY products provide the tools to recreate high-fashion runway looks in the salon or at-home, while always remaining kind to the environment.</h4>
                        <button class="btn btn-outline-secondary"><a href="/kevinMurphy"> Click here to view products</a></button>
                    </div>
                    <div className='col-5 '>
                        <img className="productBrandImage  " src="https://kevinmurphy.com.au/wp-content/uploads/2017/06/180403_KM_Social_6740-2048x1366.jpg"></img>
                    </div>
                </div>
                <div className=" productBackground mt-5   d-flex flex-row">
                    <div className='col-5 '>
                        <img className="productBrandImage" src="https://cdn.shopify.com/s/files/1/0052/8085/8198/files/become_a_davines_salon_picture-01_400x.jpg?v=1609952366"></img>
                    </div>
                    <div className=" col-7   ">
                        <h1 className='productBrandHeader pt-2'>Davines</h1>
                        <h4 className='productBrandDescription pt-2 '>Born from
                            the same philosophy as skincare, KEVIN.MURPHY products are weightlessly designed to deliver performance, strength and longevity.
                            Combining hi-tech scientific knowledge with the best natural ingredients available, KEVIN.MURPHY products provide the tools to recreate high-fashion runway looks in the salon or at-home, while always remaining kind to the environment.</h4>
                        <button class="btn btn-outline-secondary"><a href="/kevinMurphy"> Click here to view products</a></button>

                    </div>

                </div>
                <div className="productBrand mt-5  d-flex flex-row productBackground ">
                    <div className="col-7 mr-auto">
                        <h1 className='productBrandHeader pt-2'>Hair Accessories</h1>
                        <h4 className='productBrandDescription pt-2 pl-2'>.</h4>
                        <button type="submit" class="btn btn-outline-secondary"> Click here to view products</button>
                    </div>
                    <div className='col-5 '>
                        <img className="productBrandImage  " src="https://cdn.shopify.com/s/files/1/0101/3481/4783/products/tortoisecheck_540x.png?v=1647297271"></img>
                    </div>
                </div>
            </div>
        </Container >


    </div >
}
