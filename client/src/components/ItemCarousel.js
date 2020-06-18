import React, {useState} from 'react';
import Item from './Item';

const ItemCarousel = (props) => {

    // const [carouselData, setCarouselData] = useState(props.data);

    // console.log('itemCarousel props', props.data)
    // console.log('carousel data', carouselData)
    return (

        <div className="carousel">

            {props.data.map((item, i) => {

                return (

                    <Item 
                        key={i}
                        data={item}/>
                )
            })}
        </div>
    )
}

export default ItemCarousel;