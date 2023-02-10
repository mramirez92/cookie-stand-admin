import {hours} from '@/data';

import TableBody from './TableBody';

export default function CookieStandTable({locationInfo}){
  return locationInfo.length < 0 ? (
    <h2>No Cookie Stands Available</h2>
  ):(
    <table className="w-4/5 p-4 mx-auto my-4">
      <thead className='text-left p-4 bg-cyan-100 border border-cyan-100 rounded-2xl'>
        <tr className='p-4'>
          <th className='px-4 py-2'> Location</th>
          {hours.map((hour, idx)=> {
            return(
              <th key={idx}>{hour}</th>
            )
          })}
          <th>Totals</th>
        </tr>
      </thead>
      <TableBody className="border border-slate-500"/>
      <tfoot>

      </tfoot>
    </table>
  );


  function CookieStandRow({ info, deleteStand }) {

    function clickHandler() {
        deleteStand(info.id);
    }

    if (info.hourly_sales.length == 0) {
        // bunk data
        info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr>
            <td>{info.location} <button onClick={clickHandler}>[x]</button></td>
            {info.hourly_sales.map((slot,index) => <td key={index}>{slot}</td>)}
            <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}


  };

