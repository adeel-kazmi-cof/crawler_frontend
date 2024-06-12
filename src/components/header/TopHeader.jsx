import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/images/rbmp-new-logo.png';
import { Profile } from '../../helper/Icons/Icon';

import NavLinks from './NavLinks';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../form';

function TopHeader({ postjob }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const  navigate=useNavigate()
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const changeRoute=()=>{
    navigate("/interviews")
  }
  return (
    <>
      <Navbar.Brand href="dashboard" className="brand-logo">
        <div className='top-menu-logo'>Company Name</div>
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end custom-nav">
       

        <div className='header-profile-image ml-10' onClick={toggleDropdown} ref={dropdownRef}>
          <Image src={Profile} roundedCircle />

          {dropdownVisible && (
            <div className='profile-dropdown'>
              <ul className='profile-dropdown-user'>
                {
                  NavLinks.map((link, index) => (
                    <li key={index}> <Link to={link.url}><span>{link.icon}</span><span>{link.title}</span></Link></li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
      </Navbar.Collapse>
    </>
  );
}

export default TopHeader;
