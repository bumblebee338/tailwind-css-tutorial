import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import TreeMap from './TreeMap'
import SimpleRadialBarChart from './SimpleRadialBarChart'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <DashboardStatsGrid />
      <div className='flex gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className='flex gap-4 w-full'>
        <TreeMap/>
        <SimpleRadialBarChart/>
      </div>
    </div>
  )
}

