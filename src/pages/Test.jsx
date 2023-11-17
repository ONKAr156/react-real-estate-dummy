import React, { useState } from 'react'

const Test = () => {
    const Light = ['bg-red-600', 'bg-green-600', 'bg-yellow-600']
    const [num, setNum] = useState(1)

    return <div className='flex justify-center items-center '>
        <h3>{}</h3>
        <div className='my-2 h-96 w-20 bg-slate-800 rounded-lg flex justify-center items-center p-5 '>
            <div className='text-slate-200 flex flex-col'>{

                Light.map((item, id) => <div className={`rounded-full px-4 py-3 my-2 ${num ? item : 'bg-black'}`}>dd</div>)

            }</div>
        </div>
        <button onClick={e => setNum(num + 1)}>click</button>
    </div>
}

export default Test