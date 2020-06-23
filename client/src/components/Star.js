import React, {useState} from 'react';

const Star = (props) => {
    
    return (

        <ul class="ulReviews">
            <li className="star">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <span className="totalReviews">(275)</span>
            </li>
        </ul>
    )
}

export default Star;
