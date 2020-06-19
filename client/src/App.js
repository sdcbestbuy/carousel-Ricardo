import React, {useState} from 'react';
import ItemCarousel from './components/ItemCarousel';
import data from '../../bestBuyScrape';
// import data from '../../dummyData';

console.log(data);

const App = () => {

  
  return (

    <div className="mainContainer">
      <ItemCarousel data={data.data}/>
    </div>
  )
}

export default App;
