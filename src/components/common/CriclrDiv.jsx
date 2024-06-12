import React from 'react';



function CriclrDiv({ clrName ,icon,onclick}) {
  return (
    <>
    <div className='number-wrap-cricle'>
      <div className={`${clrName}`} onClick={onclick ? onclick : undefined}>
   
         <span className="icon">{icon}</span>
      
       
      </div>
    </div>
    </>
  );
}

export default CriclrDiv;