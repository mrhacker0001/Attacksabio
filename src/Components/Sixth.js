import React from 'react'
import "./Sixth.css"
import img from "../assets/Group 28.png"

function Sixth() {
    return (
        <div className='Sixth'>
            <h1>☠️ Hack on for an extra 20% discount </h1>
            <span>Enter your email and get 20% off any Sabio tariff.</span>
            <div className="div">
                <span>Enter your email:</span>
                <input type="email" name='email' placeholder=' your email' />
                <button>Get extra discount</button>
            </div>
            <img src={img} alt="..." />
        </div>
    )
}

export default Sixth