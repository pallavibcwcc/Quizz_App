const QuestionList=({Question,options,HandleClick,currentans}) => {
    return(
        <div>
            <h2>{Question}</h2>
      <ul>
        { options.map((option,index)=>(
            <li key={index} onClick={()=>HandleClick(option)} className={currentans===option? 'selected':''}>{option}</li>

        ))}
      </ul>
        </div>
    )
}
export default QuestionList