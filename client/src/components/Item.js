import React, {useState} from 'react';

const Item = () => {

    const [currentItem, setCurrentItem] = useState('');

    return (

        <div>
            <h1>Here is a current Item</h1>
        </div>
    )
}

export default Item;