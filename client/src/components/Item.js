import React, {useState} from 'react';

const Item = (props) => {

    const [currentItem, setCurrentItem] = useState('');

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
                        <i className="stars"></i>
                        <span className="itemRating">{props.data.rating}</span>
                    </ul>
                    <div id="itemPrice">
                        <span className="itemPrice">{props.data.price}</span>
                    </div>
                    <div id="itemPriceDiscount">
                        <span className="itemPriceDiscount">{props.data.price}</span>
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