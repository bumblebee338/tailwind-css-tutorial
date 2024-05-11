import React from 'react'
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_NAVIGATION_ITEMS, FOOTER_NAVIGATION_ITEMS } from '../../libs/contants/navigation';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FcBullish />
        <span className='text-neutral-100 text-lg'>OpenShop</span>

      </div>
      <div className='flex-1 py-8'>
        {DASHBOARD_NAVIGATION_ITEMS.map(item => {
          console.log(pathname, item.path);
          return (
            <Link to={item.path} key={item.key} className={` ${item.path === pathname ? 'bg-neutral-700' : ''} flex items-center hover:bg-neutral-700 gap-2 font-light px-3 text-base py-2 cursor-pointer`}>
              <span className='mr-4 text-lg'>{item.icon}</span>
              <span>{item.label}</span>
            </Link>)
        })}
      </div>
      <div className='flex flex-col border-t border-neutral-700'>
      {FOOTER_NAVIGATION_ITEMS.map(item => {
          console.log(pathname, item.path);
          return (
            <Link to={item.path} key={item.key} className={` ${item.path === pathname ? 'bg-neutral-700' : ''} flex items-center hover:bg-neutral-700 gap-2 font-light px-3 text-base py-2 cursor-pointer`}>
              <span className='mr-4 text-lg'>{item.icon}</span>
              <span>{item.label}</span>
            </Link>)
        })}
      </div>
    </div>
  )
}
