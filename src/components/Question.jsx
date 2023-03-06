import React, { useState } from 'react';
import './Question.css'

export default function MainQuestion() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    answer: '',
    owner: '',
  });
  const [editing, setEditing] = useState(null);

  const addQuestion = (e) => {
    e.preventDefault();
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
    <div className="question-container">
      <h1 className="question-heading">Ask Your Questions</h1>
      <form onSubmit={addQuestion}>
        <input
          type="text"
          name="owner"
          placeholder="Your Name (Optional)"
          value={newQuestion.owner}
          onChange={handleChange}
          className="question-input"
        />
        <textarea
          name="text"
          placeholder="Your Question"
          value={newQuestion.text}
          onChange={handleChange}
          className="question-input"
        ></textarea>
        <textarea
          name="answer"
          placeholder="Answer"
          value={newQuestion.answer}
          onChange={handleChange}
          className="question-input"
        ></textarea>
        <button type="submit" className="question-button">
          Ask Question
        </button>
      </form>
      <ul className="question-list">
        {questions.map((q) => (
          <li key={q.id} className="question-item">
            <div className="question-item-header">
              <h3 className="question-item-heading">{q.text}?</h3>
              <div className="question-item-actions">
                <button onClick={() => handleEdit(q.id)} className="question-item-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(q.id)} className="question-item-button">
                  Delete
                </button>
              </div>
            </div>
            {editing === q.id && (
              <form onSubmit={(e) => handleSubmitEdit(e, q.id)}>
                <textarea
                  name="text"
                  value={newQuestion.text}
                  onChange={handleChange}
                  className="question-input"
                ></textarea>
                <button type="submit" className="question-item-button">
                  Submit
                </button>
              </form>
            )}
            <div className="question-item-footer">
              <p className="question-item-owner">Created By: {q.owner}</p>
              <p className="question-item-answer">Answer: {q.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
