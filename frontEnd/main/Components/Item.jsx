import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import Typography from '@material-ui/core/Typography';

const Item = (props) => {

    const [stars, setStars] = useState(props.data.customer_review_AVG);

    return (

        <div className="itemContainer">
            <div className="itemBlock">

                <div className="image">
                    <img className="itemImage" src={props.data.product_image} onClick={() => props.getId(props.data.id)}></img>
                </div>

                <div className="name">
                    <p className="itemName" onClick={() => props.getId(props.data.id)}>{props.data.product_name}</p>
                </div>

                <ul className="review">

                    <li className="liReviews">
                        <div className="liDiv">
                            <i className="stars">
                                <Rating name="half-rating-read" 
                                        value={props.data.customer_review_AVG}
                                        precision={0.1} 
                                        size="small"
                                        emptyIcon={<GradeOutlinedIcon fontSize="inherit" />}
                                        readOnly 
                                />
                            </i>
                        <span className="totalReviews">{'(' + props.data.customerReviewCount + ')'}</span>
                        </div>
                    </li>
                </ul>

                <div className="price">
                    <span className="itemPrice">{'$' + props.data.regularPrice}</span>
                </div>

                <div type="compare">
                    <label className="checkbox">
                        <input type="checkbox"></input>
                        <span></span>
                    </label>
                    <span className="compareSpan">Compare</span>
                </div>
            </div>
        </div>
    )
}

export default Item;
