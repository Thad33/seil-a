import React, {useReducer} from 'react'


 function Question () {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <div id='takeInp'>
        <h1>Write your Questions</h1>
        <span>
          <h1 id='labQuestion'>Add your name:</h1>
          <span>
            <input type="text" placeholder='Add Name (optional)...' value={owner} onChange={addName}/>
          </span>
        </span>
        <span>
          <h1 id='labQuestion'>Question:</h1>
          <span>
            <input id='questionInp' placeholder='Add Question...' type="text" value={question} onChange={takeQuestion} />
          </span>
        </span>
      </div>
      <button id='addQuestionBtn' onClick={addQuestion}>Add Question</button>
      <button id='hideQuestionsBtn' onClick={hideQuestions}>Hide Questions</button>
      <button id="showQuestionsBtn" onClick={showQuestions}>Show Questions</button>
     
      {show && arr.map((item) =>
      
     <div id='displayQuestions' key={item.id}>
         
          <p>Question: {item.Question}?</p>
          <p>Answer: {item.Answer}</p>
          <p>Created By: {item.Owner}</p>
          <button id='answerBtn' onClick={() => handleAnswer(item.id)}>Answer</button>
         
          {answerInp && answerId === item.id &&
            <>
              <h3>Answer the Question</h3>
              <input type="text" onChange={handleAnswering} value={answer} />
              <button onClick={() => handleSubmitAns(item.id)}>Submit</button>
            </>
          }
          <button id='editBtn' onClick={() => handleEdit(item.id)}>Edit</button>
          {editInp && editId === item.id &&
            <>
              <h3>Edit the Question</h3>
              <input type="text" onChange={takeQuestion} value={question} />
              <button onClick={() => handleEditing(item.id)}>Submit</button>
            </>
          }
          <button id='deleteBtn' onClick={() => handleDelete(item.id)}>Delete</button>
         
    {deleteInp && deleteId === item.id && (
      <>
        <h3>Confirm Name to delete the Question</h3>
        <input type="text" onChange={takeName} value={deleteName} />
        <button onClick={() => handleDeleting(item.id)}>Submit</button>
      </>
    )}
        </div>
       
      )}
    </div>
  )
}

export default Question

const initialState = {
  arr: [],
  question: '',
  answer: '',
  answerInp: false,
  answerId: null,
  editInp: false,
  editId: null,
  show: true,
  owner: '',
  deleteName: '',
  deleteId: null,
  deleteInp: false,
};

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_QUESTION':
      return {
        ...state,
        arr: [...state.arr, action.payload],
        question: '',
        owner: '',
      };
    case 'SET_QUESTION':
      return {
        ...state,
        question: action.payload,
      };
    case 'SET_ANSWER':
      return {
        ...state,
        answer: action.payload,
      };
    case 'SET_ANSWER_INP':
      return {
        ...state,
        answerInp: action.payload,
        answerId: action.answerId,
      };
    case 'SET_EDIT_INP':
      return {
        ...state,
        editInp: action.payload,
        editId: action.editId,
      };
    case 'SET_SHOW':
      return {
        ...state,
        show: action.payload,
      };
    case 'SET_OWNER':
      return {
        ...state,
        owner: action.payload,
      };
    case 'SET_DELETE_NAME':
      return {
        ...state,
        deleteName: action.payload,
      };
    case 'SET_DELETE_ID':
      return {
        ...state,
        deleteId: action.payload,
      };
    case 'SET_DELETE_INP':
      return {
        ...state,
        deleteInp: action.payload,
      };
    case 'HANDLE_ANSWER':
      return {
        ...state,
        answerInp: true,
        answerId: action.payload,
      };
    case 'HANDLE_EDIT':
      return {
        ...state,
        editInp: true,
        editId: action.payload,
      };
    case 'HANDLE_DELETE':
      return {
        ...state,
        deleteInp: true,
        deleteId: action.payload,
        deleteName: '',
      };
    case 'HANDLE_SUBMIT_ANS':
      return {
        ...state,
        arr: state.arr.map(q => {
          if (q.id === state.answerId) {
            return {
              ...q,
              Answer: state.answer,
            };
          } else {
            return q;
          }
        }),
        answerInp: false,
        answer: '',
        answerId: null,
      };
    case 'HANDLE_EDITING':
      return {
        ...state,
        arr: state.arr.map(q => {
          if (q.id === state.editId) {
            return {
              ...q,
              Question: state.question,
            };
          } else {
            return q;
          }
        }),
        editInp: false,
        question: '',
        editId: null,
      };
    case 'HANDLE_DELETING':
      return {
        ...state,
        arr: state.arr.filter((q) => q.id !== state.deleteId || q.Owner !== state.deleteName),
        deleteInp: false,
        deleteName: '',
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}