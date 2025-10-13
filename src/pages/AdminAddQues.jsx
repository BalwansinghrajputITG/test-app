import React from "react";
import { useAdminFunctions } from "../provider/AdminProvider";

function AdminAddQues() {
  const {
    handleOptionChange,
    // handleAddQuestion,
    activeTab,
    setActiveTab, // ✅ toggle tabs
    question,
    setQuestion,
    options,
    correctOption,
    setCorrectOption,
    setOptions,
    fetchAllQuestions,
    questions,
    deleteQuestionById,
    example,
    fetchAllQuestionForDelete,
    delete_question
  } = useAdminFunctions();

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("add-question")}
          className={`px-4 py-2 rounded ${
            activeTab === "add-question" ? "bg-blue-700" : "bg-gray-700"
          } hover:bg-blue-800`}
        >
          Add Question
        </button>
        <button
          onClick={() => {
            setActiveTab("all-questions");
            fetchAllQuestionForDelete();  // fetch when switching tab
          }}
          className={`px-4 py-2 rounded ${
            activeTab === "all-questions" ? "bg-blue-700" : "bg-gray-700"
          } hover:bg-blue-800`}
        >
          All Questions
        </button>
      </div>

      {/* Add Question Form */}
      {activeTab === "add-question" && (
        <form onSubmit={(e)=>{
          e.preventDefault()
          console.log(example)
          example()
          setQuestion("")
          setOptions(["","","",""])
          setCorrectOption(0)}} className="space-y-4">
          <div>
            <label>Question:</label>
            <br />
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={3}
              className="w-full p-2 text-white border-2 border-black rounded-2xl outline-none"
            />
          </div>

          {options.map((opt, index) => (
            <div key={index}>
              <label>Option {index + 1}:</label>
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full p-2 text-white border-2 border-black rounded-2xl outline-none"
              />
            </div>
          ))}

          <div>
            <label>Correct Option (1-4):</label>
            <input
              type="number"
              value={correctOption}
              onChange={(e) => setCorrectOption(parseInt(e.target.value))}
              className="w-full p-2 text-white border-2 border-black rounded-2xl outline-none"
              min={1}
              max={4}
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800"
          >
            Submit Question
          </button>
        </form>
      )}

      {/* All Questions List */}
      {activeTab === "all-questions" && questions.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">All Questions</h3>
         <ul>
  {questions.map((q) => (
    <li
      key={q.QuestionID}
      className="bg-gray-800 p-4 mb-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
      {/* Question */}
      <p className="font-bold text-white text-lg">{q.Question}</p>

      {/* Options */}
      <ul className="ml-4 mt-2 space-y-1">
        {q.Answers.map((a, index) => (
          <li
            key={index}
            className="px-2 py-1 rounded 
             bg-gray-700 text-gray-200 hover:bg-gray-600 cursor-pointer transition-colors duration-200
            "
          >
            {a.Answer}
          </li>
        ))}
      </ul>

      {/* Delete Button */}
      <button
        onClick={() => delete_question(q.QuestionID)}
        className="mt-3 ml-3.5 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-200"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

        </div>
      )}
    </div>
  );
}

export default AdminAddQues;
