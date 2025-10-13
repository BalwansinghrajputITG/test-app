import React from "react";

export function AddQuestionForm({
  question,
  setQuestion,
  options,
  setOptions,
  correctOption,
  setCorrectOption,
  handleOptionChange,
  example,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        example();
        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectOption(0);
      }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-2">Add Questions</h3>

      <div>
        <label>Question:</label>
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
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-200 text-white"
      >
        Submit Question
      </button>
    </form>
  );
}
