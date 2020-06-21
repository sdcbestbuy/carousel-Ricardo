import React, {useState} from 'react';
import Star from './Star';

const Item = (props) => {

    const [stars, setStars] = useState(props.data.customerReviewAverage);

    return (

        <div className="itemContainer">
            <div className="itemBlock">
                <div>
                    <img className="itemImage" src={props.data.image}></img>
                </div>
                <div>
                    <p className="itemName">{props.data.name}</p>
                    <ul className="reviewBox">
                        <Star rating={props.data.customerReviewAverage}/>
                    </ul>
                    <div id="itemPrice">
                        <span className="itemPrice">{props.data.regularPrice}</span>
                    </div>
                    <div type="itemCompare">
                        <label className="checkbox">
                            <input type="checkbox"></input>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
