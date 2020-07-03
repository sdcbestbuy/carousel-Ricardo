import React, {useState} from 'react';
import Item from './Item.jsx';
import $ from 'jquery';
 
const ItemCarousel = (props) => {

    // index variable for helping to control what items are currently being viewed
    let itemArray = Array.from(props.data);
    itemArray = itemArray.slice(0, 9);

    const [index, setIndex] = useState(1);
    var scrollIndex = index;
    // const [endIndex, setendIndex] = useState(9);
    const [carouselData, setCarouselData] = useState(itemArray);
    // const [carouselData, setCarouselData] = useState(itemArray.slice(index, endIndex));
    const spot = [0, 1065, 2130];
    const spot2 = [0, 1065, 2130];
    const [scroll, setScroll] = useState(spot[1]);
    const [scroll2, setScroll2] = useState(spot2[1]);
//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {
        // starts at 0 but is otherwise equal to 'index'
        
        $(".carouselList").animate({scrollLeft: scroll});

        scrollIndex++;
    
        if(scrollIndex > 2) {
    
            scrollIndex = 1;
        }
    
        setScroll(spot[scrollIndex]);
        console.log('index value 1', scrollIndex);
        
        setIndex(scrollIndex);
        console.log('scroll value', scroll);
    }

    const previousItems = () => {

        scrollIndex--;
        
        if(scrollIndex < 0) {
            
            scrollIndex = 1;

        } 
        setScroll(spot[scrollIndex]);
        console.log('index value 1', scrollIndex);

        setIndex(scrollIndex);
        console.log('scroll value', scroll);

        $(".carouselList").animate({scrollLeft: scroll});

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
                    <button id="next" className="nextButton" onClick={() => nextItems()}>
                        <svg className="svgRight"><path className="pathRight"></path></svg>
                    </button>
            </div>
        </div>
    )
}

export default ItemCarousel;


        // if (endIndex <= itemArray.length - 4) {
        //     setIndex(index + 3);
        //     setendIndex(endIndex + 3);
        // } else {
        //     setIndex(6);
        //     setendIndex(9);
        // }
        // setCarouselData(itemArray.slice(index, endIndex));

        // if (index >= 3) {
        //     setIndex(index - 3);
        //     setendIndex(endIndex - 3);
        // }
        // setCarouselData(itemArray.slice(index, endIndex));