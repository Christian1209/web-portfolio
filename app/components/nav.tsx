import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { GiCubes } from "react-icons/gi";

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Projects',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                   {name === 'Home' ?  <div className='mt-2 mr-2'> <FaHome className='w-9 h-9' / > </div> : <div className='mt-2 mr-2'> <GiCubes className='w-9 h-9' /> </div> }
                  <p className="font-bold text-lg  mt-4 mr-5">{name}</p>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
