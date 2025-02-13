import { useState } from 'react';
import QuestionList from'./QuestionList';
import  './Quiz.css'

 const Quiz = () => {
 const Questions = [
    {
        Question:"what is 2+2",
        options:['2','4','7','9'],
        answer:'4'

    },
    {
        Question:"Banglore famous food is",
        options:['briyani','Paratha','Roti-sabji','Dosa'],
        answer:'Dosa' 
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