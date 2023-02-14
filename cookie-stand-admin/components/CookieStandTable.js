import {hours} from '@/data';
import CookieStandRow from './CookieStandRow';
// import TableBody from './TableBody';

export default function CookieStandTable({ stands, deleteStand }) {
    
  return (
    <>
      <table className="w-11/12 my-4 bg- m-auto ">
          <thead>
              <tr className='bg-cyan-400 '>
                  <th className="pl-2 text-white">Location</th>
                  {hours.map((hour) => {
                      return (
                          <th key={Math.random()} className="pl-2  text-white">
                              {hour}
                          </th>
                      );
                  })}
                  <th className="pl-2 text-white">Totals</th>
              </tr>
          </thead>
          <tbody>
              {stands?.map(stand => (

                  <CookieStandRow key={stand.id} cookieStand={stand} deleteStand={deleteStand} />
              ))}
              <tr className='bg-cyan-400'>
                  <th className="pl-2 text-white'bg-cyan-400">Totals</th>
                  {(() => {
                      let sum = Array(stands[0]?.hourly_sales.length).fill(0);
                      for (let i = 0; i < stands.length; i++) {
                          for (let j = 0; j < stands[i].hourly_sales.length; j++) {
                              sum[j] += stands[i].hourly_sales[j];
                          }
                      }
                      let total = sum.reduce((acc, val) => acc + val, 0);
                      return [
                          ...sum.map((s, i) => {
                              return <td className="pl-2 border border-gray-400 text-blue-900" key={i}>{s}</td>;
                          }),
                          <td key={sum.length}>{total}</td>,
                      ];
                  })()}
              </tr>
          </tbody>
      </table>
      {/* <p>{stands}</p> */}
                      </>

  );
}