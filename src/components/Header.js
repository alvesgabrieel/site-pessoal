import React from 'react';
//images
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between it
        ems-center'>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <button className='btn btn-sm'>Trabalhe comigo</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
