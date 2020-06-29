import React, {useState} from 'react';
// import Star from './Star.jsx';
import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

const Item = (props) => {

    const [stars, setStars] = useState(props.rating);
    console.log(stars)
    return (

        <div className="itemContainer">
            <div className="itemBlock">

                <div className="image">
                    <img className="itemImage" src={props.data.product_image}></img>
                </div>

                <div className="name">
                    <p className="itemName">{props.data.product_name}</p>
                </div>

                <ul className="review">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" 
                                value={props.data.customer_review_AVG} readOnly />
                    </Box>
                </ul>

                <div className="price">
                    <span className="itemPrice">{props.data.regularPrice}</span>
                </div>

                <div type="compare">
                    <label className="checkbox">
                        <input type="checkbox"></input>
                        <span></span>
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Item;
