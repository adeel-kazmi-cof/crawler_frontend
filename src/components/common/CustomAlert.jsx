import React, { useState, useEffect } from 'react';
import { clickboxgreen } from '../../helper/Icons/Icon';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ handleClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      handleClose(); // Call handleClose function after auto close
    }, 1000); // 4 seconds

    return () => clearTimeout(timer);
  }, [handleClose]);

  return (
    <>
      <Alert
        show={show}
        variant="success"
        onClose={handleClose}
        className='alert'
       
      >
       {clickboxgreen } Video interview successfully downloaded !
      </Alert>
    </>
  );
};

export default CustomAlert;
