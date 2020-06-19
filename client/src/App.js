import React, {useState, Component} from 'react';
import ItemCarousel from './components/ItemCarousel';
import data from '../../bestBuyScrape';
import Axios from 'axios';
// import data from '../../dummyData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.seedDB = this.seedDB.bind(this);
  }

  componentDidMount() {

    this.seedDB();
  }

  seedDB() {

    Axios.get('/seed')
      .then( res => {

        console.log('database seeded');
      })
      .catch( err => {

        console.error('error with seeding database', err);
      })
  }

  render() {

    return (
      
      <div className="mainContainer">
        <ItemCarousel data={data.data}/>
      </div>
    )
  }
}

export default App;
