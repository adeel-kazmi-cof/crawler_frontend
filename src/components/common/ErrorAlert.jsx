import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ErrorAlert = ({ errorMessage }) => {
  useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }, [errorMessage]);


  return null;
};

export default ErrorAlert;
