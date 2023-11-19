import React, {} from 'react';
import data from '../join.json';
import Header from './Header';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.slice(0, 5)
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

//   render() {
//     const list = [];
//     for (let idx = 0; idx < data; idx++ ){
//       list.push(<>
//       <div style={{backgroundColor: `rgb(${idx * 2}, ${idx * 0.1}, ${255 - idx * 2})`}}>
//         <div className='number_id_incident'>{list}</div>
//         <div className='text_id_incident'>fdasfzvcuhucvohcvoph</div>
//       </div>
//     </>);
//     }
//     return (
//     <>
//     <Header />
//     <div className='divs_incident'>
//       <div className='number_id_incident'>
//       {this.state.data.map((item, index) => (
//             <div key={index}>
//               <h1>{item.name}</h1>
//               <p>{item.about}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//     </>
//     );
// }
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