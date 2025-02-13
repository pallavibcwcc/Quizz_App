import { useState } from 'react';
import QuestionList from'./QuestionList';
import  './Quiz.css'

 const Quiz = () => {
 const Questions = [
  
    {
        "Question": "What is React?",
        "options": [
          "A JavaScript library for building user interfaces",
          "A JavaScript framework for server-side rendering",
          "A programming language",
          "A database management system"
        ],
        "answer": "A JavaScript library for building user interfaces"
      },
      {
        "Question": "Which of the following is a feature of React?",
        "options": [
          "Virtual DOM",
          "Direct DOM manipulation",
          "Global state management",
          "Server-side rendering"
        ],
        "answer": "Virtual DOM"
      },
      {
        "Question": "What is JSX in React?",
        "options": [
          "A templating engine for React",
          "JavaScript syntax extension that looks like HTML",
          "A method of writing CSS for React components",
          "A function to handle events"
        ],
        "answer": "JavaScript syntax extension that looks like HTML"
      },
      {
        "Question": "What is the purpose of the `useState` hook in React?",
        "options": [
          "To manage the component's lifecycle",
          "To manage the component's state",
          "To handle events",
          "To access the DOM"
        ],
        "answer": "To manage the component's state"
      },
      {
        "Question": "Which of the following is the correct way to create a function component in React?",
        "options": [
          "function MyComponent() {}",
          "const MyComponent = () => {}",
          "class MyComponent extends React.Component {}",
          "All of the above"
        ],
        "answer": "All of the above"
      },
      {
        "Question": "Which of the following is used to pass data to a component in React?",
        "options": [
          "state",
          "props",
          "context",
          "useEffect"
        ],
        "answer": "props"
      },
      {
        "Question": "What does the `map()` function do in JavaScript?",
        "options": [
          "Returns a new array with the results of calling a provided function on every element",
          "Filters the array based on a given condition",
          "Mutates the original array",
          "Creates a new object from an array"
        ],
        "answer": "Returns a new array with the results of calling a provided function on every element"
      },
      {
        "Question": "What is a closure in JavaScript?",
        "options": [
          "A block of code that is executed after an event",
          "A function that remembers the variables from its lexical scope even when executed outside that scope",
          "A type of loop",
          "A way to define functions inside objects"
        ],
        "answer": "A function that remembers the variables from its lexical scope even when executed outside that scope"
      },
    
      {
        "Question": "What does `this` refer to in JavaScript?",
        "options": [
          "The global object",
          "The current function",
          "The object from which the method was called",
          "The return value of the function"
        ],
        "answer": "The object from which the method was called"
      }
 ]   
    const[currentQuesIndex,setCurrentQuesIndex]=useState(0);
    const[currentans,setCurrentans]=useState(null);
    const[score,setScore]=useState(0);
    const HandleClick = (option) => {
        setCurrentans(option)
        if(option===Questions[currentQuesIndex].answer){
            setScore(score+1);
        }
    }

    const HandleNextQuest = () => {
        setCurrentQuesIndex(currentQuesIndex+1);
        setCurrentans(null);
    }
    
    return(
        <div>
            {currentQuesIndex<Questions.length ? <div>
           
           <QuestionList Question={Questions[currentQuesIndex].Question}
           options={Questions[currentQuesIndex].options} HandleClick={HandleClick} currentans={currentans}
           />
           <button disabled={currentans===null} className={currentans=== null? 'button-disable':'button'} onClick={HandleNextQuest}>Next Question</button>
           </div>:<div className='score'>Your Score is{score}</div>}
            
            </div>
            
        // </div>
    )

 }
 export default Quiz;