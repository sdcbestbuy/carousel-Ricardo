import React, {useState} from 'react';
import ItemCarousel from './components/ItemCarousel';
import data from '../../dummyData';

const App = () => {
  return (

    <div className="mainContainer">
      <ItemCarousel data={data.data}/>
    </div>
  )
}

export default App;
