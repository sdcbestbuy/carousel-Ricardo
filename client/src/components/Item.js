import React, {useState} from 'react';

const Item = (props) => {

    const [currentItem, setCurrentItem] = useState('');

    return (

        <div className="itemBlock">
            <div className="imageHalf">
                <img className="itemImage" src={props.data.image}></img>
            </div>
            <div className="infoHalf">
                <h3>{props.data.name}</h3>
                <h3>{props.data.rating}</h3>
                <h5>{props.data.price}</h5>
                <div type="radio">compare</div>
            </div>
        </div>
    )
}

export default Item;