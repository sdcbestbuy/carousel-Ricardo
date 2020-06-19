import React, {useState} from 'react';
import Item from './Item';
import Arrow from './Arrow';

const ItemCarousel = (props) => {
    
    // index variable for helping to control what items are currently being viewed
    let index = 0;
    // controls the current state of items being viewed
    const [carouselData, setCarouselData] = useState(props.data.slice(index, index + 3));

//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = (numberInIncrementsOfThree) => {

        index = index + numberInIncrementsOfThree;
        if (index < 0) {
            index = 0;
        }
        setCarouselData(props.data.slice(index, index + 3))
    }

    const previousItems = (numberInIncrementsOfThree) => {

        index = index - numberInIncrementsOfThree;
        if (index < 0) {
            index = 0;
        }
        setCarouselData(props.data.slice(index, index + 3))
    }

    return (
        <div className="carouselContainer">
            <div className="carouselHeader">
                <h2>People also viewed<span className="xItems">(15 items)</span></h2>
            </div>
            <div className="bottomLine"></div>
            <div className="carousel">
                <button className="previousButton" onClick={() => previousItems(3)}>
                    <svg className="svgLeft"><path className="pathLeft"></path></svg>
                </button>
                    {carouselData.map((item, i) => {
                        return (

                            <Item key={i} data={item}/>
                        )
                    })}
                <button className="nextButton" onClick={() => nextItems(3)}>
                    <svg className="svgRight"><path className="pathRight"></path></svg>
                </button>
            </div>
        </div>

    )
}

export default ItemCarousel;