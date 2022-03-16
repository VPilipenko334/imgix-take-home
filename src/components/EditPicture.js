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
                 <div className={`h-screen ${backgroundColor}`} id="screen" >
                    <div className="inner-left">
                        <div className="inner-container">
                            <h1>Welcome to our form:</h1>
                            <br/>

                            <p id="description">
                            Please fill out all of the information below and you should 
                            see immediate changes to your pictures on the right!     
                            </p>

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
                
                Choose a picture to edit:
                <br/>
                <select
                value={formInput.ImageUrl}
                onChange={updateUrl}
                > 
                    <option value="examples/butterfly">Butterfly</option>
                    <option value="unsplash/bridge">Bridge</option>
                    <option value="unsplash/pineneedles">Pine Needles</option>
                    <option value="unsplash/motorbike">Motorbike</option>
                    <option value="unsplash/mountains">Mountains</option>
                </select>
                <br/>
                <br/>
            Choose a color overlay:
            <br/>
                <form className="form-container">
                        <input
                            type="color"
                            placeholder="Select your color"
                            value={formInput.ImageColor}
                            onChange={updateColor} />
                </form>

            Enter text on the photo:
            <br/>
                <form className="form-container">
                        <input
                            type="text"
                            placeholder="Write text here"
                            value={formInput.ImageText}
                            onChange={updateText} />
                </form>

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