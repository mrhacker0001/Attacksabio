import React, { useState, useEffect, useCallback, useMemo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Seventh.css';
import right from '../assets/Vector 17.png';
import left from '../assets/Vector 16.png';

function Seventh() {
    const data = useMemo(() => [
        { nom: "Instant payouts", tarifi: "No minimum trading days — cash out whenever you make a profit" },
        { nom: "Easy 1-step assessment", tarifi: "No minimum trading days — cash out whenever you make a profit" },
        { nom: "Smart trading ecosystem", tarifi: "Track your targets in the dashboard and access a next-gen traderoom right from the main space" },
        { nom: "Another feature", tarifi: "Description for another feature" },
        { nom: "Yet another feature", tarifi: "Description for yet another feature" },
        { nom: "More features", tarifi: "Description for more features" },
        { nom: "Last feature", tarifi: "Description for the last feature" },
        { nom: "Additional feature 1", tarifi: "Description for additional feature 1" },
        { nom: "Additional feature 2", tarifi: "Description for additional feature 2" },
    ], []);

    const [groupedData, setGroupedData] = useState([]);
    const [index, setIndex] = useState(0);

    const groupData = useCallback(() => {
        let itemsPerGroup;
        if (window.innerWidth <= 780) {
            itemsPerGroup = 1;
        } else if (window.innerWidth <= 1100) {
            itemsPerGroup = 2;
        } else if (window.innerWidth <= 390) {
            itemsPerGroup = 1;
        } else {
            itemsPerGroup = 3;
        }

        const newGroupedData = [];
        for (let i = 0; i < data.length; i += itemsPerGroup) {
            newGroupedData.push(data.slice(i, i + itemsPerGroup));
        }
        setGroupedData(newGroupedData);
    }, [data]);

    useEffect(() => {
        groupData();
        window.addEventListener('resize', groupData);
        return () => window.removeEventListener('resize', groupData);
    }, [groupData]);

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex + 1) % groupedData.length);
    };

    const handlePrev = () => {
        setIndex(prevIndex => (prevIndex - 1 + groupedData.length) % groupedData.length);
    };

    return (
        <div className='Slider'>
            <h1>Why SabioTrade?</h1>
            <div className="middle-cart">
                <button onClick={handlePrev}><img src={left} alt="Previous" /></button>
                <SwipeableViews index={index} onChangeIndex={setIndex}>
                    {groupedData.map((group, idx) => (
                        <div className="cart-group" key={idx}>
                            {group.map((item, itemIdx) => (
                                <div className="carts" key={itemIdx}>
                                    <h1>{item.nom}</h1>
                                    <span>{item.tarifi}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </SwipeableViews>
                <button onClick={handleNext} className='next'><img src={right} alt="Next" /></button>
            </div>
            <button className='btn'>Trade with Sabio</button>
        </div>
    );
}

export default Seventh;
