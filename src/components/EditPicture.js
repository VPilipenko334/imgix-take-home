import React, { useState } from 'react';

const EditPicture = () => {

    const data = {
        ImageUrl: "",
        ImageColor: "",
        ImageText: ""
    };

    const [backgroundColor, setBackgroundColor] = useState('bg-teal-50')
    const [formInput, setFormInput] = useState(data)
    const [imagePreview, setImagePreview] = useState('')
    
    const handleBackgroundColorChange = (event) => {
        setBackgroundColor(event.target.value)
    }

    return (
        <div className="outer-wrapper">
            <div className="outer-container">

                <div className={`h-screen ${backgroundColor}`}>
                    <h1>Welcome to our form:</h1>

                    Please fill out all of the information below and you should 
                    see immediate changes to your pictures on the right!     
                    <br/>
                    <br/>

                    Choose a background color:
                    <br/>
                    <select 
                    value={backgroundColor}
                    onChange={handleBackgroundColorChange} >
            
                    <option value="bg-teal-50">Color A</option>
                    <option value="bg-indigo-200">Color B</option>
                    <option value="bg-purple-100">Color C</option>
                    </select>
                
                <br/><br/>
            
            <form className="form-container">
                    <input
                        type="text"
                        placeholder="Enter your Image URL" />
            </form>

            <form className="form-container">
                    <input
                        type="color"
                        placeholder="Select your color" />
            </form>

            <form className="form-container">
                    <input
                        type="text"
                        placeholder="Enter text" />
            </form>

            <div className="image-preview">
                <img src={imagePreview} />
            </div>

            <button className="submit-button"
                        type="submit">
                            Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditPicture; 