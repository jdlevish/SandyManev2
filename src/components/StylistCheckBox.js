import React, { useState } from 'react'
import JSONData from "../../content/stylists.json"



export default function StylistsCheckBox(props) {
    const [stylist, setStylist] = useState(JSONData.stylists);

    return (

        stylist.map((person) =>
            <div>
                <label for={person.name}
                    className="StylistCheckBox">{person.name}  </label>
                <input
                    className="pl-2" type="radio" id={person.name} name="stylist" value={person.name}
                    onChange={props.handleChange} />


            </div>

        )



    )
}
