import Link from "next/link";
import { useAuth } from '../contexts/auth';

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className='flex items-center justify-between p-4 text-gray-50 bg-cyan-900'>
        <h1 className="text-4xl font-bold">
          Cookie Stand Admin🍪
        </h1>
        <div className="flex">
          {user && (
            <>
              <h2 className="rounded-lg border-2 bg-cyan-300 p-1 mr-4" >{user.username}</h2>
              <a href=" " className="rounded-lg border-2 bg-cyan-400 p-1 mr-4" onClick={logout}>
                Sign Out
              </a>
            </>
          )}
          <Link href="./Overview" className="rounded-lg border-2 bg-cyan-300 p-1">Overview</Link>
        </div>
        {/* <button className='underline text-gray-50 p-2  hover:bg-amber-400 duration-300 hover:text-black hover:font-bold hover:no-underline hover:rounded-xl'>Overview</button> */}
      </header>
    </>
  )
}

