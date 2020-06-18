import React, {useState} from 'react';

const Item = (props) => {

    const [currentItem, setCurrentItem] = useState('');

    return (

        <div className="itemBlock">
            <div className="imageHalf">
                <img className="itemImage" src={props.data.image}></img>
            </div>
            <div className="infoHalf">
                <p className="itemName">{props.data.name}</p>
                <ul className="itemRating">
                    <i className="stars"></i>
                    <span>{props.data.rating}</span>
                </ul>
                <p className="itemPrice">{props.data.price}</p>
                <div type="itemCompare">
                    <input type="checkbox"></input>
                    <label>compare</label>
                </div>
            </div>
        </div>
    )
}

export default Item;