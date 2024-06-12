import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChangePassword from '../../pages/ChangePassword';
import Profile from '../../pages/Profile';
import NavLinks from './NavLinks';



function LeftSidebar() {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showProfile, setProfileShow] = useState(false);

  const handleShowChangePasswordModal = (url) => {
    if (url === "/change-password") {
      setShowChangePasswordModal(true);
    } else if (url === "/Profile") {
      setProfileShow(true);
    }
    else if (url === "/logout") {
      //  alert("dd")
    }
  }

  const handleHideChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  }

  const handleClose = () => {
    setProfileShow(false);
  }

  const CustomLink = ({ children, title, to, id }) => {
    return (
      <OverlayTrigger
        overlay={
          <Tooltip id={id} style={{ minWidth: '100px', padding: '5px', fontSize: '16px', backgroundColor: 'black', color: 'white' }}>
            {title}
          </Tooltip>
        }
        placement="right"
      >
        {/* || to=="/logout" */}
        {to === '/change-password' || to === '/Profile' ? (
          <span className='cursor' style={{ padding: "10px", color: "black" }} onClick={() => handleShowChangePasswordModal(to)}>
            {children}
          </span>
        ) : (
          <Link to={to}>
            {children}
          </Link>
        )}
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Nav className="  d-flex flex-column align-items-center justify-content-center custom-sidebar">
        {NavLinks.map((data, index) => (
          <CustomLink to={data.url} id={data.id} title={data.title} key={index}>
            <span>{data.icon}</span>
          </CustomLink>
        ))}
      </Nav>
      {showChangePasswordModal && <ChangePassword handleClose={handleHideChangePasswordModal} />}
      {showProfile && <Profile handleClose={handleClose} />}
    </>
  );
}

export default LeftSidebar;