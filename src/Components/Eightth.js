import React from 'react'
import "./Eightth.css"
import img from "../assets/Ellipse 22 copy.png"
import img1 from "../assets/Ellipse 22.png"
import img2 from "../assets/Ellipse.png"
import img3 from "../assets/Group 29.png"

function Eightth() {
    const data = [
        { tarifi: 'I picked Sabiotrade because they have a mobile app that is comparable to the desktop version. Very convenient and has all of the tools and indicators I need. I don’t like being tied to my computer and I usually trade on the go, so this was an easy choice for me.', img: img2, span: 'Felipe Da Silva  Brazil, São Paulo' },
        {
            tarifi: 'I was excited to sign up with Sabio because I was intrigued by the format. A one-time fee and no additional costs, plus no risk of a loss is a trader’s dream. I have successfully completed the training and I’ve already withdrawn a small profit.', img: img, span: 'Suzana Valentina Brazil, Rio de Janeiro'
        },
        {
            tarifi: 'I would rate this platform a 10/10. Smooth and fast, clear instructions. I will need to spend a bit more time on it, but so far, so good', img: img1, span: 'Diego Almeida Brazil, Salvador'
        },
    ]
    return (
        <div className='Eightth'>
            <img src={img3} alt="..." className='message' />
            <h1>Community feedback </h1>
            <div className="divs">
                {
                    data.map((item) => (
                        <div className="divv">
                            <p>{item.tarifi}</p>
                            <span><img src={item.img} alt="..." />{item.span}</span>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Eightth