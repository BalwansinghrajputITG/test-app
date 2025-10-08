import React, { useEffect, useState } from 'react'
import PopUp from '../components/PopUp'
import { useMyFunctions } from '../components/Context'
import TimerFunc from '../components/timer'
import axios from 'axios'

const Testpage = () => {
    const [showPopup, setShowPopup] = useState(false)
    const { onStart } = useMyFunctions('')
    const [Questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState({}) 

   
    useEffect(() => {
        setShowPopup(true)
    }, [])

  
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/question/all`)
                setQuestions(response.data)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching questions:', error)
            }
        }

        fetchQuestions()
    }, [])

    const handleStart = () => {
        setShowPopup(false)
    }

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, Questions.length - 1))
    }

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    const AnswerSelect = async (quesId, ansId) => {
        try {
            setSelectedAnswers(prev => ({
                ...prev,
                [quesId]: ansId
            }))

       
            const response = await axios.post(`http://localhost:3000/question/submit_answer`, {
                questionId: quesId,
                answerId: ansId,
            })

            console.log('Answer submitted:', response.data)
        } catch (error) {
            console.error('Error submitting answer:', error)
        }
    }

    const currentQuestion = Questions[currentIndex]

    return (
        <div className='test-wrapper bg-[#2a1e55] w-full h-screen p-4'>
            {/* {showPopup && <PopUp onStart={handleStart} />} */}

            <TimerFunc />

            <div className='test-box'>
                <div className='box-heading'>
                    <h2 className='text-4xl text-center font-bold text-white'>Start-test</h2>
                </div>

                <div className='test-content mt-4'>
                    {Questions.length > 0 && currentQuestion ? (
                        <>
                            <div className='question-box mb-4'>
                                <h3 className='text-3xl font-bold text-white'>
                                    Question {currentIndex + 1}: {currentQuestion.Question}
                                </h3>
                            </div>

                            <div className='options mb-4'>
                                <div className='option flex flex-col gap-2'>
                                    {currentQuestion.Answers.map((answer, i) => (
                                        <label
                                            key={answer.Id}
                                            className='options-div text-[20px] font-bold text-white bg-[#3a2e6a] p-2 rounded flex items-center cursor-pointer'
                                        >
                                            <input
                                                type="radio"
                                                name={`question_${currentQuestion.Id}`}
                                                value={answer.Id}
                                                checked={selectedAnswers[currentQuestion.Id] === answer.Id}
                                                onChange={() => AnswerSelect(currentQuestion.Id, answer.Id)}
                                                className="mr-2"
                                            />
                                            {i + 1}. {answer.Answer}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className='buttons flex justify-between items-center'>
                                <button
                                    className='prev-btn cursor-pointer font-bold text-white px-4 py-2 bg-[#443577] rounded'
                                    onClick={handlePrev}
                                    disabled={currentIndex === 0}
                                >
                                    ◀ Previous
                                </button>

                                <button className='sub-btn font-bold px-4 py-2 bg-green-600 text-black rounded'>
                                    Submit
                                </button>

                                <button
                                    className='next-btn cursor-pointer font-bold text-white px-4 py-2 bg-[#443577] rounded'
                                    onClick={handleNext}
                                    disabled={currentIndex === Questions.length - 1}
                                >
                                    Next ▶
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className='text-white text-center'>Loading questions...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Testpage
