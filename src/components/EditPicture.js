import React, { useState } from 'react';

const EditPicture = () => {
    
    return (
        <div className="outer-container">
           <form className="form-container">
                <input
                    type="text"
                    placeholder="Enter your Image URL" />
           </form>

           <form className="form-container">
                <input
                    type="text"
                    placeholder="Select your color" />
           </form>

           <form className="form-container">
                <input
                    type="text"
                    placeholder="Enter text" />
           </form>
        </div>
    )
}

export default EditPicture; 