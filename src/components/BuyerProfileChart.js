import React from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data01 = [
    {
        "name": "Group A",
        "value": 400
    },
    {
        "name": "Group B",
        "value": 300
    },
    {
        "name": "Group C",
        "value": 300
    },
    {
        "name": "Group D",
        "value": 200
    },
    {
        "name": "Group E",
        "value": 278
    },
    {
        "name": "Group F",
        "value": 189
    }
];
const data02 = [
    {
        "name": "Group A",
        "value": 2400
    },
    {
        "name": "Group B",
        "value": 4567
    },
    {
        "name": "Group C",
        "value": 1398
    },
    {
        "name": "Group D",
        "value": 9800
    },
    {
        "name": "Group E",
        "value": 3908
    },
    {
        "name": "Group F",
        "value": 4800
    }
];

export default function BuyerProfileChart() {
    return (
        <div className='w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
            <strong> Transactions</strong>
            <div className='w-full mt-3 flex-1 text-xm'></div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={250}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
