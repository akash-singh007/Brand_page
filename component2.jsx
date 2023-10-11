
import React from 'react';
import './component2.css';
function Footer() {
  return (
    <div>
      <div className='bg'>
        <div className='left'>
          <p className='left-h1'>YOUR FEET DESERVES THE BEST</p>
          <p className='left-h6'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='left-content'>
            <div className='left-shopNow'>Shop Now</div>
            <div className='left-category'>Category</div>
          </div>
          <p className='left-available'>Also Available On</p>
          <div className='left-img'>
            <img src="img1" alt="img1" />
            <img src="img2" alt="img2" />
          </div>
        </div>
        <div className='right'>right</div>
      </div>
    </div>
  );
}

export default Footer;
