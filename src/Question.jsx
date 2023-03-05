import React, { useState } from 'react';

function Question() {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the question to the database
    setQuestion('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button type="submit">Ask Question</button>
      </form>
    </div>
  );
}

export default Question;
