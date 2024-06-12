import Calendar from 'react-calendar';
import { useState } from 'react';
const Customcalendar=()=>{
  const [date, setDate] = useState(new Date());
    return(<>
  
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    */}
    </>)
}

export default Customcalendar