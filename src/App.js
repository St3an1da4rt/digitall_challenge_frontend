import React from 'react';
// import Header from './components/Header';
import Workers from './components/Workers';
// import Header from './components/Header';
import Main from './components/Main';
import Incidents from './components/incidents';
import LoginPage from './components/loging';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/main.css'

class APP extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="workers" element={<Workers />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="main" element={<Main />} />
      </Routes>
      </BrowserRouter>
    );
  }
}

export default APP