import CookieStandTable from "./CookieStandTable";
import {useAuth} from '../contexts/auth'
import useResource from "@/hooks/useResource";


export default function CookieStandForm() {
  const {user} = useAuth()
  const {createResource} = useResource();

  function inputHandler(event) {
    event.preventDefault();
    
    const cookieStand = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum_customers_per_hour.value),
      maximum_customers_per_hour: parseInt(event.target.average_cookies_per_sale.value),
      average_cookies_per_sale: parseFloat(event.target.average_cookies_per_sale.value),
      owner: user.id,
    }
    createResource(cookieStand)
  }

  return (
    <>
      <form onSubmit={inputHandler} className="w-4/5 p-4 mx-auto my-4 bg-cyan-100 rounded-xl" >
        <h1 className='text-2xl flex flex-row justify-center'>Create Cookie Stand</h1>
        <fieldset className="flex flex-row p-1">
          <label className=' p-2 mx-auto text-lg'>Location</label>
          <input name='location' className='flex-auto pl-1 shadow-inner focus:outline-none focus:ring focus:border-blue-500/75 rounded-md'></input>
        </fieldset>
        <div class="min" className='flex flex-row justify-around  gap-1 p-2'>
          <fieldset className='basis-1/4 flex-wrap p-1'>
            <label className='flex w1/2 p-2 mx-auto text-lg text-center	'>Minimum Customers per Hour</label>
            <input name='minimum_customers_per_hour' className='flex-auto pl-1 shadow-inner focus:outline-none focus:ring focus:border-blue-500/75 rounded-md'></input>
          </fieldset>

          <fieldset class="max" className='basis-1/4 flex-wrap p-1'>
            <label className='flex w1/2 p-2 mx-auto text-lg '>Maximum Customers per Hour</label>
            <input name='maximum_customers_per_hour' className='flex-auto pl-1 shadow-inner focus:outline-none focus:ring focus:border-blue-500/75 rounded-md'></input>
          </fieldset>

          <fieldset class="avg" className='basis-1/4 p-1'>
            <label className='flex w1/2 p-2 mx-auto text-lg '>Average cookie Sales</label>
            <input name='average_cookies_per_sale' className='flex-auto pl-1 shadow-inner focus:outline-none focus:ring focus:border-blue-500/75 rounded-md'></input>
          </fieldset>
          <button className='basis-1/4 p-2 rounded-2xl text-lg w-3/4 transition ease-in-out delay-150  bg-cyan-500 hover:-translate-y-1 hover:scale-105 hover:bg-amber-400 hover:font-semibold duration-300 '>Add Location</button>
          {/* <button className='basis-1/4 bg-cyan-500 rounded-2xl text-lg w-full hover:bg-sky-700'>Add Location</button> */}
        </div>
      </form>
    </>
  )
}
