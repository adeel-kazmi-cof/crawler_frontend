import React from 'react';
import { Link } from 'react-router-dom';


function Analytics({ className ,icon ,link,activeNumber,text}) {




  return (
    <>
    <div className='y-center'>
      <div className={`Circlediv-wrap ${className}`}>
      {link === "" ? (
  <span className="icon">{icon}</span>
) : (
  <Link to={link} target="_blank" className="icon">
    {icon}
  </Link>
)}
      
       
      </div>
      <div className="active-status-company">
       <span className='number-circle'>{activeNumber}</span><span className='text-circle'>{text}</span>
      </div>
      </div>
    </>
  );
}

export default Analytics;