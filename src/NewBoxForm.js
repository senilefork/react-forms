import React, { useState } from "react"
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addNewBox }) => {

    //create an initial state obj for form resetting
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    };

    //create state for our form values
    const [formData, setFormData] = useState(INITIAL_STATE);

    //create handle change function so we can update our form
    const handleChange = (e) => {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    }

    //handle submit function needs to create a new box on click and reset form values
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
              <label htmlFor="width">Width</label>
              <input 
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
                id="width"
                />
              <label htmlFor="height">Height</label>
              <input 
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                id="height"
                />
              <label htmlFor="backgroundColor">Background Color</label>
              <input 
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                id="backgroundColor"
                />
              <button>Add box</button>
           </form>
        </div>
    )


};

export default NewBoxForm;

