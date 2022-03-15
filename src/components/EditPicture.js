import React, { useState } from 'react';

const EditPicture = () => {

    const [backgroundColor, setBackgroundColor] = useState('bg-teal-50')
    
    const handleBackgroundColorChange = (event) => {
        setBackgroundColor(event.target.value)
    }

    return (
        <div className="outer-container">

            <div className={`h-screen ${backgroundColor}`}>
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

           <button className="submit-button"
                    type="submit">
                        Submit</button>
            </div>
        </div>
    )
}

export default EditPicture; 