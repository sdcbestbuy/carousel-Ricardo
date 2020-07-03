import React, {useState} from 'react';
import Item from './Item.jsx';
 
const ItemCarousel = (props) => {

    // index variable for helping to control what items are currently being viewed
    let itemArray = Array.from(props.data);
    itemArray = itemArray.slice(0, 9);

    const [index, setIndex] = useState(0);
    const [endIndex, setendIndex] = useState(3);
    const [carouselData, setCarouselData] = useState(itemArray.slice(index, endIndex));

//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {
        
        if (endIndex <= itemArray.length - 4) {
            setIndex(index + 3);
            setendIndex(endIndex + 3);
        } else {
            setIndex(6);
            setendIndex(9);
        }
        setCarouselData(itemArray.slice(index, endIndex));
    }

    const previousItems = () => {

        if (index >= 3) {
            setIndex(index - 3);
            setendIndex(endIndex - 3);
        }
        setCarouselData(itemArray.slice(index, endIndex));
    }

    return (
        <div className="carouselWrapper">
            <div className="carouselContent">
                <div className="carouselHeader">
                    <h2 className="peopleViewed">People also viewed<span className="xItems">{'(' + props.data.length + ')'}</span></h2>
                </div>
                <div className="bottomLine"></div>
                    <button className="previousButton" onClick={() => previousItems()}>
                        <svg className="svgLeft"><path className="pathLeft"></path></svg>
                    </button>
                <div className="ulWrapper">
                    <ul className="carouselList">
                    {carouselData.map((item, i) => {
                        return (

                            <Item key={i} data={item} rating={item.customer_review_AVG} getId={props.getId} />
                        )
                    })}
                    </ul>
                </div>
                    <button className="nextButton" onClick={() => nextItems()}>
                        <svg className="svgRight"><path className="pathRight"></path></svg>
                    </button>
            </div>
        </div>
    )
}

export default ItemCarousel;


