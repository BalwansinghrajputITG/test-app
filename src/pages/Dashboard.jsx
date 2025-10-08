import React from 'react'

const Dashboard = () => {
    return (
        <div className='test-wrapper bg-[#2a1e55] w-full h-screen'>
            <div className='dashboard border-1 border-white h-screen rounded-3xl '>
                <div className='box-heading'>
                    <h2 className='text-4xl text-center font-bold text-white'>Dashboard</h2>
                </div>
                <div className='dash-content'>
                    <div className='person-details flex gap-20'>
                        <div className='person-photo h-50 w-50 bg-zinc-500 rounded-3xl '>
                        </div>
                        <div className='details text-2xl font-semibold text-white flex flex-col gap-5 self-center'>
                            <div className='person-name'>
                                Name : 
                            </div>
                             <div className='person-email'>
                                Email : 
                            </div>
                             <div className='person-class'>
                                Class : 
                            </div>
                        </div>
                    </div>
                    <div className='scores'>
                        <div className='heading font-bold text-2xl text-white'>Scores</div>
                        <div className='scores-content'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
