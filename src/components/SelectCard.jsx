import React from 'react'
import { NavLink } from 'react-router-dom'

const SelectCard = () => {
    return (
        <div className='absolute w-full bottom-0'>
            <div className='card-list flex gap-20 justify-center'>
                <NavLink to={"/"} >
                    <div className='card w-130 h-80 rounded-3xl relative'>
                        <div className='bg-image w-full h-full rounded-3xl'>
                            <img className="rounded-3xl w-full h-full" src='./public/images/5690878.jpg' />
                        </div>
                        <div className='content bg-white rounded-3xl absolute w-full bottom-0'>
                            <h3 className='text-black font-bold text-3xl text-center' >📝 Start Quiz</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink>
                    <div className='card w-130 h-80 rounded-3xl relative'>
                        <div className='bg-image w-full h-80 '>
                            <img className="rounded-3xl h-full w-full" src='./public/images/59254.jpg' />
                        </div>
                        <div className='content  bg-white rounded-3xl absolute w-full bottom-0'>
                            <h3 className='text-black font-bold text-3xl text-center' >📊 Dashboard</h3>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default SelectCard