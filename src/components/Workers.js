import React from 'react';
import data from '../join.json'
import Header from './Header';

class Workers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: null,
      persons: data.persons
    };
  }

  handleSelectChange = (event) => {
    this.setState({ selectedPerson: event.target.value });
  }

  render() {
    const { selectedPerson, persons } = this.state;
    const selectedPersonData = persons.find(person => person.name === selectedPerson);
    const { selectedAbout, about } = this.state;
    const selectedAboutDate = persons.find(person => person.about === selectedAbout);

    return (
      <div>
        <select onChange={this.handleSelectChange}>
          {persons.map(person => (
            <option key={person.name} value={person.name}>
              {person.name}
            </option>
          ))}
        </select>

        {persons.map(person => (
          <div>
            <h2>{data[person.name]}</h2>
            <p>{data[person.about]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Workers
{/*
{constructor(props) {
  super(props);
  this.state = {
    data: data,
    name: ""
  };
}

handleSubmit(event) {
  let list = [];
  let mat = Object.keys(this.state.data)
  for (let i = 0; i < mat.lenght; i++) {
    if (mat[i] === event.target.value){
      list.push(this.state.data[i])
    }
  }
  return (
    <div>{list.map((item, index) => (
      <div key={index} className='divs_incident'>
        <div className='div_name_person'>{item.name}</div>
        <div className='div_about_idcidents'>{item.about}</div>
      </div>))});
    </div>)
};

render() {
  return (
    <>
    <Header />
    <form className="form_loging" onSubmit={this.handleSubmit}>
      <input
          className='input_name'
          type="text"
          placeholder="Имя пользователя"
          value={this.username}
          onChange={(e) => e.target.value}
      />
      <button type="submit">Поиск</button>
    </form>
    </>
  );
}*/}