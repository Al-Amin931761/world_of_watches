import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <section className='grid grid-cols-2'>
            <div className='m-10'>
                <h2 className='font-bold text-2xl mb-5 text-sky-600'>Month Wise Sell</h2>
                <div>
                    <LineChart width={600} height={400} data={data}>
                        <Line type="monotone" dataKey={'sell'} stroke="#8884d8" strokeWidth={2}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis ></YAxis>
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
            </div>

            <div className='m-10'>
                <h2 className='font-bold text-2xl mb-5 text-sky-600'>Investment VS Revenue</h2>
                <div >
                    <BarChart width={600} height={400} data={data}>
                        <Bar dataKey={'investment'} fill="#8884d8" stackId="a"></Bar>
                        <Bar dataKey={'revenue'} fill="#82ca9d" stackId="a"></Bar>
                        <Tooltip></Tooltip>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Legend></Legend>
                    </BarChart>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;