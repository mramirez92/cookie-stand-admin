import {hours} from '@/data';
// import {sales} from '@/data';
import TableBody from './TableBody';

export default function ReportTable({locationInfo}){
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
      {/* <tbody>
        {sales.map((city_data, idx)=>{
          const city = Object.keys(city_data)[0];
          const sale_nums =city_data[city];
          return(
              <tr key ={idx} >
                <td>{city}</td>
                {sale_nums.map((values, idx)=>{
                  return(
                    <td key={idx}>{values}</td>
                  )       
                })}
              </tr>
          )
        })}
    
      </tbody> */}
      <tfoot>

      </tfoot>
    </table>
  )








  return(
    <div className='flex justify-center flex-col'>
    <p className='flex justify-center basis-1 p-2'>Report Table Coming Soon...</p>
    <div className='flex justify-center basis-1 p-2'>
      {locationInfo.map((cookieStand, idx) => {
        return (
          <p key={idx}>
            {JSON.stringify({ cookieStand })}
          </p>
        )
      })}
    </div>
  </div>
  )
}