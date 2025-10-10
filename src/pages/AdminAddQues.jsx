import React from "react";
import { useAdminFunctions } from "../provider/AdminProvider";

function AdminAddQues() {
  const {
    handleOptionChange,
    handleAddQuestion,
    activeTab,
    question,
    setQuestion,
    options,
    correctOption,
    setCorrectOption,
  } = useAdminFunctions();

  return (
    <>
      {activeTab === "add-question" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Add New Question</h2>
          <form onSubmit={handleAddQuestion} className="space-y-4">
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
                  className="w-full p-2 text-white border-2 border-black rounded-2xl outline-none "
                />
              </div>
            ))}
            <div>
              <label>Correct Option (1-4):</label>
              <input
                type="number"
                value={correctOption}
                onChange={(e) => setCorrectOption(parseInt(e.target.value))}
                className="w-full p-2 text-white border-2 border-black rounded-2xl outline-none "
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
        </div>
      )}
    </>
  );
}

export default AdminAddQues;
