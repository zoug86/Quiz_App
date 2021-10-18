import React, { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';
import { Link } from 'react-router-dom'

const Answers = () => {
    const { questions, answers } = useContext(QuestionContext);
    console.log(answers)

    return (
        <div>
            <ul>
                {questions?.map((question, i) => (
                    <li key={i}>
                        {question.question} <strong> - {question.correct_answer?.toLowerCase() === answers[i]?.toLowerCase() ? 'Correct!' : 'Wrong!'} </strong>
                    </li>

                ))}
            </ul>
            <p>Your Score is: {answers.filter((answer, i) => answer === questions[i]?.correct_answer?.toLowerCase()).length}</p>
            <Link to='/'>Home</Link>
        </div>

    )
}

export default Answers
