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

    console.log(carouselData)

    return (
        <div className="carousel">
            <button onClick={() => previousItems(3)}></button>
            <div className="carousel">
                {carouselData.map((item, i) => {
                    return (
                        <Item key={i} data={item}/>
                    )
                })}
            </div>
            <button onClick={() => nextItems(3)}></button>
        </div>

    )
}

export default ItemCarousel;