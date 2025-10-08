import React from 'react'

const Testpage = () => {
    return (
        <div className='test-wrapper bg-[#2a1e55] w-full h-screen'>
            <div className='test-box' >
                <div className='box-heading'>
                    <h2 className='text-4xl text-center font-bold text-white'>Start-test</h2>
                </div>
                <div className='test-content'>
                    <div className='question-box'>
                        <h3 className='text-3xl font-bold text-white'>Question 1</h3>
                    </div>
                    <div className='options'>
                        <div className='option flex flex-col'>
                            <p className='options-div text-[20px] font-bold text-white'>Option-one</p>
                            <p className='options-div text-[20px] font-bold text-white'>Option-two</p>
                            <p className='options-div text-[20px] font-bold text-white'>Option-three</p>
                            <p className='options-div text-[20px] font-bold text-white'>Option-four</p>
                        </div>
                    </div>
                    <div className='buttons flex justify-between'>
                        <div className='prev-btn cursor-pointer font-bold text-white '>◀ Previous</div>
                         <button className='sub-btn font-bold '>Submit</button>
                        <div className='next-btn cursor-pointer font-bold text-white '>Next ▶</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testpage
