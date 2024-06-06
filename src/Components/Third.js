import React from 'react'
import "./Third.css"
import img1 from "../assets/vga-glitchcore-export (1).png"
import img2 from "../assets/vga-glitchcore-export (2).png"
import img3 from "../assets/vga-glitchcore-export.png"

function Third() {
    return (
        <div className='Third'>
            <div className="middle-card">
                <div className="first">
                    <h1>50% off for premium, gold and platinum plans</h1>
                    <span>Buy the assessment at half the price</span>
                    <img src={img3} alt="" />
                </div>

                <div className="second">
                    <h1>100% refund</h1>
                    <img src={img2} alt="" />
                </div>

                <div className="third">
                    <h1>Up to 90% payout</h1>
                    <h2>The most beneficial profit sharing scheme</h2>
                    <img src={img1} alt="" />
                </div>

                <div className="fourth">
                    <h1>+ extra 20% discount with the coupon </h1>
                </div>
            </div>
        </div>
    )
}

export default Third