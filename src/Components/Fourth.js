import React from 'react'
import "./Fourth.css"
import img1 from "../assets/Polygon 1.png"
import img2 from "../assets/Polygon 5.png"
import img3 from "../assets/Polygon 4.png"
import img4 from "../assets/Polygon 3.png"
import img5 from "../assets/Vector 18.png"
import vector from "../assets/Vector 10.png"

function Fourth() {
    return (
        <div className='Fourth'>
            <div className="card">
                <h1>What’s SabioTrade?</h1>
                <span>SabioTrade is a prop trading firm that supplies talented traders with funded accounts. The company works on a win-win scheme — your skills, firm’s money.</span>
                <div className="double">
                    <div className="rectang">
                        <img src={img1} alt="..." />
                        <img src={img2} alt="..." />
                        <img src={img3} alt="..." />
                        <img src={img4} alt="..." />
                        <img src={img5} alt="..." className='vector' />
                        <img src={vector} alt="..." className='vector1' />
                    </div>
                    <div className="cart">
                        <span>Pay a one-time fee</span>
                        <span>Pass the assessment</span>
                        <span>Get a fully funded account</span>
                        <span>Take up to 90% your profit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fourth