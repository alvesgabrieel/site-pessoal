import React from 'react';
//images
import Logo from '../assets/logo.png'
//link
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between it
        ems-center'>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <Link to="about" activeClass='active' smooth={true} spy={true}>
            <button className='btn btn-sm'>Trabalhe comigo</button>
          </Link>          
        </div>
      </div>
    </div>
  );
};

export default Header;
