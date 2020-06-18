import React, {useState} from 'react';
import Item from './Item';
import Arrow from './Arrow';

const ItemCarousel = (props) => {
    
    let index = 0;
    const [carouselData, setCarouselData] = useState(props.data.slice(index, index + 3));

    const nextItems = (numberInIncrementsOfThree) => {

        index = index + numberInIncrementsOfThree;
        if (index < 0) {
            index = 0;
        }

        setCarouselData(props.data.slice(index, index + 3))
        console.log(index)
    }

    const previousItems = (numberInIncrementsOfThree) => {


        index = index - numberInIncrementsOfThree;
        if (index < 0) {
            index = 0;
        }
        
        setCarouselData(props.data.slice(index, index + 3))
        console.log(index)
    }

    console.log(carouselData)

    return (
        <div className="carouselC">
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