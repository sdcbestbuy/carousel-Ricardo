import React, {useState} from 'react';

const App = () => {

  return (

    <div>
      <div>
        <h2>Nintendo Switch</h2>
        <span>15 items</span>
      </div>
        <div>
          <ul>
          <div className="itemContainer">

{/* this is the individual item components */}
            <li>
              <div className="imageHalf">
                <img className="itemImage" src="./assets/switch.jpg"></img>
                <div className="imageDivFiller"></div>
                
              </div>
              <div className="detailsHalf">
                <div className="itemTitle">item title</div>
                <div className="itemReviews">item reviews</div>
                <div className="itemPrice">item price</div>
                <div className="itemCompare">compare</div>
              </div>
            </li>
{/* this is the individual item components */}

          </div>
        </ul>
      </div>
    </div>
  )
}

export default App;
