import React from "react";

export function QuestionsList({ questions, delete_question }) {

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">All Questions</h3>
      <ul>
        {questions.map((q) => (
          <li
            key={q.QuestionID}
            className="bg-gray-800 p-4 mb-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <p className="font-bold text-white text-lg">{q.Question}</p>

            <ul className="ml-4 mt-2 space-y-1">
              {q.Answers.map((a, index) => (
                <li
                  key={index}
                  className="px-2 py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                >
                  {a.Answer}
                </li>
              ))}
            </ul>

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
  );
}
