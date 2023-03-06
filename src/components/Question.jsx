import React, { useState } from 'react';

export default function MainQuestion() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    answer: '',
    owner: '',
  });
  const [editing, setEditing] = useState(null);

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ text: '', answer: '', owner: '' });
  };

  const handleChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleSubmitEdit = (e, id) => {
    e.preventDefault();
    const editedQuestion = questions.map((q) => {
      if (q.id === id) {
        return {
          ...q,
          text: newQuestion.text,
        };
      } else {
        return q;
      }
    });
    setQuestions(editedQuestion);
    setEditing(null);
  };

  const handleDelete = (id) => {
    const remainingQuestions = questions.filter((q) => q.id !== id);
    setQuestions(remainingQuestions);
  };

  return (
    <div>
      <h1>Enter Your Questions Below</h1>
      <form onSubmit={addQuestion}>
        <input
          type="text"
          name="owner"
          placeholder="Add Name (optional)..."
          value={newQuestion.owner}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          placeholder="Ask Question..."
          value={newQuestion.text}
          onChange={handleChange}
        />
        <input
          type="text"
          name="answer"
          placeholder="Add Answer..."
          value={newQuestion.answer}
          onChange={handleChange}
        />
        <button type="submit">Ask A Question</button>
      </form>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <p>Question: {q.text}?</p>
            <p>Answer: {q.answer}</p>
            <p>Created By: {q.owner}</p>
            <button onClick={() => handleEdit(q.id)}>Edit</button>
            {editing === q.id && (
              <form onSubmit={(e) => handleSubmitEdit(e, q.id)}>
                <input
                  type="text"
                  name="text"
                  value={newQuestion.text}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            )}
            <button onClick={() => handleDelete(q.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
