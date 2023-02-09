import {sales} from '@/data';

export default function TableBody(){
  return(
    <tbody>
    {sales.map((city_data, idx)=>{
      const city = Object.keys(city_data)[0];
      const sale_nums =city_data[city];
      return(
          <tr key ={idx} className= {idx % 2 === 0 ? "border odd:border-slate-500 bg-gray-50" : "border border-slate-500"}>
            <td className="p-2 border border-slate-500">{city}</td>
            {sale_nums.map((values, idx)=>{
              return(
                <td key={idx} className="p-2 border border-slate-500">{values}</td>
              )       
            })}
          </tr>
      )
    })}
    </tbody>
  )
}
