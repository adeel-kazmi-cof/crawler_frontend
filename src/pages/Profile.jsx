import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CustomButton } from '../components/form';
import { adduser, crossicon } from '../helper/Icons/Icon';
import BasicInfo from '../components/profile/BasicInfo';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/common/Spinner';
import { getProfile } from '../store/actions/userActions';

const Profile = ({ handleClose, profileId }) => {
  const dispatch = useDispatch();
  
  const { userProfile, loading, error } = useSelector((state) => state.user);
  const id=profileId ? profileId:"";

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch]);
console.log(userProfile)
  return (
    <>
      <Offcanvas show={true} onHide={handleClose} placement='end' className="bg-ligte-gray custom-offcanvas" style={{ width: "80%" }}>
        <Offcanvas.Header className="model-header bg-white">
          <Offcanvas.Title><span className="svg mr-10">{adduser}</span>Profile & Preferences</Offcanvas.Title>
          <div className="text-end"><CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} /></div>
        </Offcanvas.Header>
        {loading && <Spinner />}
   
        {!userProfile ? <Spinner/>:<>
          <Offcanvas.Body className='mt-10'>
            <Row className="row-pad-0">
              <Col md={12}>
                <BasicInfo userBasicInfo={userProfile} />
                
              </Col>
              
            </Row>
          </Offcanvas.Body>
          </>}
      </Offcanvas>
    </>
  );
}

export default Profile;
