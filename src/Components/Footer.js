import React from 'react'
import "./Footer.css"
import img from "../assets/social icons (1).png"
import img1 from "../assets/social icons (2).png"
import img2 from "../assets/social icons.png"
import img3 from "../assets/discrord.png"

function Footer() {
    return (
        <div className='Footer'>
            <div className="inline">
                <div className="inline-first">
                    <h1>Risk Warning</h1>
                    <p>The content on this website is for general information and educational purposes only and is not (and cannot be construed or relied upon as) personal advice nor as an offer to buy/sell/subscribe to any of the financial products mentioned herein. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation or delivery of the content. <br /><br />
                        Financial products are complex, entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in CFD instruments is suitable for your circumstances, and ensure you obtain, read and understand any applicable terms and conditions.</p>
                </div>
                <div className="inline-second">
                    <span><a href="...">Terms & Conditions</a>  <a href="...">Privacy policy</a> </span>
                    <div className="icons">
                        <button><img src={img} alt="..." /></button>
                        <button><img src={img1} alt="..." /></button>
                        <button><img src={img2} alt="..." /></button>
                        <button><img src={img3} alt="..." /></button>
                    </div>
                </div>

                <div className="inline-third">
                    <a href="...">support@sabiotrade.com</a>
                    <span>Sabio Trade, 2021–2022</span>
                </div>
            </div>
        </div>
    )
}

export default Footer