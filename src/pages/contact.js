import React from 'react'
import { navigate } from 'gatsby-link'
import NavBar from '../components/Nav'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Layout from '../layout'

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default function Contact() {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    console.log(state)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    return (

        <div className="App">
            <NavBar />

            <form
                name="newClient"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="pt-5 form-class"
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="newClient" />
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <div class="form-group col-md">
                    <label for="firstName" className="float-left">First name:</label>
                    <input class="form-control form-control-sm" type="text" id="firstName" name="firstName" placeholder="first name" onChange={handleChange} />
                    <label for="lastName" className="float-left">Last Name:</label>

                    <input type="text" id="lastName" class="form-control form-control-sm" name="lastName" placeholder="last name" onChange={handleChange} />
                </div>
                <div class="form-group col-md">
                    <label for="email" className="float-left">Email Address:</label>
                    <input for="email" id="email" placeholder="Email Address" name="email" class="form-control form-control-sm"
                        required onChange={handleChange} />
                    <label for="phoneNumber" className="float-left">Phone Number:</label>

                    <input type="tel" id="phoneNumber" name="phoneNumber" class="form-control form-control-sm" placeholder="xxxxxxxxxx" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required onChange={handleChange} />
                </div>
                <div class="form-group col-md">
                    <label for="hairColor" className="float-left">Hair Color:</label>
                    <input type="text" id="hairColor" name="hairColor" class="form-control form-control-sm" placeholder="sandy" onChange={handleChange} />
                    <label for="hairCondition" className="float-left">Hair Condition:</label>
                    <input type="text" class="form-control form-control-sm" name="hairCondition" id="hairCondition" placeholder="Healthy" onChange={handleChange} />
                </div>
                <div class="form-group col-md">
                    <label for="Service " className="float-left">Service Interested In:</label>
                    <input type="text" name="requestedService" id="Service" class="form-control form-control-sm" placeholder="Highlights" onChange={handleChange} />
                    <label for="currentHair" className="pt-2">Upload a picture of your hair in it's current state</label><input type="file" id="myFile" class="form-control-file" name="currentHair" />

                    <br />
                    <button type="submit" class="btn btn-outline-secondary"> Submit</button>
                </div>
            </form>
        </div>
    )
}