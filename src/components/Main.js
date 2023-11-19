import React from 'react';
import Header from './Header';

class Main extends React.Component {
  render() {
    const list = [];
    for (let idx = 0; idx < 10; idx++ ){
      list.push(<>
      <div style={{backgroundColor: `rgb(${idx * 2}, ${idx * 0.1}, ${255 - idx * 2})`}}>
      <div className='number_id_incident'>{list}</div>
        <div className='text_id_incident'>fdasfzvcuhucvohcvoph</div>
      </div>
    </>);
    }
    return (
    <>
    <Header />
    <div className='divs_incident'>
      <div className='number_id_incident'>{list}</div>
      <div className='text_id_incident'>fdasfzvcuhucvohcvoph</div>
    </div>
    </>
    );
}
      }

      // componentDidMount() {
      //   return () => {fetch('https://jsonplaceholder.typicode.com/posts')
      //     .then(response => response.json())
      //     .then(data => setData(data));}, []
      // }
      
      //   componentDidUpdate() {
      //   document.title = `You clicked ${this.state.count} times`;
      // }

export default Main