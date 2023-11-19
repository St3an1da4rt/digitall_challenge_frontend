import React from 'react';
import Header from './Header';

class Incidents extends React.Component {
  render() {
    const list = [];
    for (let idx = 0; idx < 6; idx++ ){
      list.push(<div style={{backgroundColor: `rgb(${idx * 30}, ${idx * 10}, ${255 - idx * 20})`}}>{idx}</div>);
    }
    return (<><Header /><div className='divs_incident'>{list}</div></>);
};
}

export default Incidents