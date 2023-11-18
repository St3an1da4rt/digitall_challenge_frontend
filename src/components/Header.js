import React from 'react';
import { Outlet } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <>
            <header className='header'>
                <img src="../img/gazprom.png"></img>
                <div className='hrefs_header'>
                    <a href="/">main</a>
                    <a href="/workers">workers</a>
                    <a href="/incidents">incidents</a>
                    <a href="/main">data upload</a>
                </div>
            </header>
            {/* <hr /> */}
            <Outlet />
        </>
    )
  }
}

export default Header