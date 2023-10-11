
import React from 'react';
import './component1.css'

function Nav() {
  return (
    <div className='first-container'>
      <div className='left-container'><img src="brand_logo.png" alt="brandlogo" /></div>
      <div className='middle-container'>
        <div>MENU</div>
        <div>LOCATION</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
      <div className='right-container'>Login</div>
    </div>
  );
}

export default Nav;
