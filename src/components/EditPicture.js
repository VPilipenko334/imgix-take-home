import React, { useState } from 'react';

const EditPicture = () => {

    const data = {
        ImageUrl: "examples/butterfly",
        ImageColor: "#000000",
        ImageText: ""
    };

    const [backgroundColor, setBackgroundColor] = useState('bg-teal-50')
    const [formInput, setFormInput] = useState(data)
    const [imagePreview, setImagePreview] = useState(`https://assets.imgix.net/${formInput.ImageUrl}.jpg?txt=${formInput.ImageText}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`)

    const handleBackgroundColorChange = (event) => {
        setBackgroundColor(event.target.value)
    }

    const updateUrl = (event) => {
        setFormInput({
            ...formInput, 
            ImageUrl: event.target.value
        })
        setImagePreview(`https://assets.imgix.net/${event.target.value}.jpg?txt=${formInput.ImageText}&blend=${formInput.ImageColor.substring(1)}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`)
    }

    const updateColor = (event) => {
            setFormInput({
                ...formInput,
                ImageColor: event.target.value
            })
            // console.log(formInput.ImageColor.substring(1))
            setImagePreview(`https://assets.imgix.net/${formInput.ImageUrl}.jpg?txt=${formInput.ImageText}&blend=${event.target.value.substring(1)}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`)
    }

    const updateText = (event) => {
        setFormInput({
            ...formInput,
            ImageText: event.target.value
        })
        // console.log(formInput)
        setImagePreview(`https://assets.imgix.net/${formInput.ImageUrl}.jpg?txt=${event.target.value}&blend=${formInput.ImageColor.substring(1)}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`)
    }


    return (
        <div className="outer-wrapper">
            <div className="outer-container">
                 <div className={`${backgroundColor}`} id="screen" >
                    
                        <div className="inner-left">
                            <center>Welcome to our form:
                                <br/>
                                Created by: Veronika Pilipenko
                            </center>

                            <br/>
                            <div className="form-container">
                                <p id="description">
                                Please fill out all of the information below and you should 
                                see immediate changes to your pictures on the right!     
                                </p>

                                <br/>

                                Choose form background color:
                                <br/>
                                <select 
                                value={backgroundColor}
                                onChange={handleBackgroundColorChange}
                                className="dropdown" >
                        
                                <option value="bg-teal-50">Blue</option>
                                <option value="bg-indigo-200">Purple</option>
                                <option value="bg-purple-100">Pink</option>
                                </select>
                        <br/><br/>
                <form className="form-container">
                    Choose a picture to edit:
                    <br/>
                    <select
                    value={formInput.ImageUrl}
                    onChange={updateUrl}
                    className="dropdown"
                    > 
                        <option value="examples/butterfly" className="dropdown-content">Butterfly</option>
                        <option value="unsplash/bridge">Bridge</option>
                        <option value="unsplash/pineneedles">Pine Needles</option>
                        <option value="unsplash/motorbike">Motorbike</option>
                        <option value="unsplash/mountains">Mountains</option>
                    </select>
                    <br/>
                    <br/>
                    Choose a color overlay:
                    <br/>
                        
                            <input
                                type="color"
                                placeholder="Select your color"
                                value={formInput.ImageColor}
                                onChange={updateColor} 
                                className="dropdown"/>
                                    <br/><br/>
                                    Enter text on the photo:
                                    <br/>
                            <input
                                 type="text"
                                 placeholder="Write text here"
                                 value={formInput.ImageText}
                                 onChange={updateText}
                                 className="dropdown" />

                    </form>

               
                <br/>

                    </div>
                
                    </div>

                    <div className="inner-right">
                        <div className="image-preview">
                            <img src={imagePreview} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EditPicture; 