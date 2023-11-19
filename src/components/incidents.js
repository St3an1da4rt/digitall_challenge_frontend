import React from 'react';
import data from '../join.json'
import Header from './Header';

class Incidents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <>
        <Header />
        <main>
        {this.state.data.map((item, index) => (
          <div key={index} className='divs_incident'>
            <div className='div_name_person'>{item.name}</div>
            <div className='div_about_idcidents'>{item.about}</div>
          </div>
        ))}
        </main>
      </>
    );
  }
}

export default Incidents