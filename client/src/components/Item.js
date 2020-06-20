import React, {useState} from 'react';
import Star from './Star';

const Item = (props) => {

    const [stars, setStars] = useState(props.data.customerReviewAverage);

    return (

        <div className="itemContainer">
            <li>
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
                    <div id="itemPriceDiscount">
                        <span className="itemPriceDiscount">{props.data.regularPrice}</span>
                    </div>
                    <div type="itemCompare">
                        <i type="checkbox"></i>
                        <label className="compareLabel">compare</label>
                    </div>
                </div>
            </div>
            </li>
        </div>

    )
}

export default Item;
