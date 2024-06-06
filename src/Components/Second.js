import React from 'react'
import "./Second.css"
import img from "../assets/Group 24.png"
import img1 from "../assets/Frame 586.png"

function Second() {
    return (
        <div className='Second'>

            <div className="second-cartt">
                <h1>Sabio Price Attack</h1>
                <p>Happy Cyber Monday, trader! SabioTrade’s conditions were hacked by unknown intruders. All users are to receive extra
                    benefits — hurry up before it’s fixed.
                </p>
                <span>You’re welcome.
                    <br />
                    <br />
                    Yours,<br />
                    Unknown intruders ☠️
                </span>
                <button>SNATCH HACKED OFFERS</button>
            </div>

            <img src={img} alt="..." className='img1' />
            <img src={img1} alt="..." className='img2' />
        </div>
    )
}

export default Second