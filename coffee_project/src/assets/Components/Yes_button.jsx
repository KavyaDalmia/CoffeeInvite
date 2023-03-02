import { useState } from 'react'
import "./Yes_button.css"
import plsImg from '../../Images/please_img.jpg';




function Yes_button() {
    const [buttonText, setButtonText] = useState("Yes, ofc!")

    function handleClick() {
        console.log('yes button clicked!')
        {alert("woooo!! We will have an amazing time!")}
    }

    return(
        <div className="container">
      
      <div className="image-container">
      <h1 className="title">Do you wanna have coffee with me?</h1>
        <img src={plsImg} alt="My Image" />
        <button className="image-button" onClick={handleClick}>YES! I'D LOVE TO</button>
      </div>
    </div>
    )
  
}
export default Yes_button
