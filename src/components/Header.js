import React from 'react';
import { Outlet } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <>
            <header className='header'>
                <div className='header_logo'></div>
                {/* <img src="../img/gazprom.png" alt="картинка"></img> */}
                <div className='hrefs_header'>
                    <a href="/" className="href1">sing in</a>
                    <a href="/workers" className='href2'>workers</a>
                    <a href="/incidents" className='href3'>incidents</a>
                    <a href="/main" className='href4'>data upload</a>
                </div>
            </header>
            {/* <hr /> */}
            <Outlet />
        </>
    )
  }
}

export default Header