import React, { useState, useEffect, useContext } from 'react'
import { QuestionContext } from '../context/QuestionContext';

const Question = ({ question }) => {
    const { answers, setAnswers } = useContext(QuestionContext);

    const [answer, setAnswer] = useState('');
    useEffect(() => {
        setAnswers([...answers.filter(answer => answer === 'false' || answer === 'true'), answer]);
    }, [answer])

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    return (
        <div>
            <li>
                {question}
            </li>
            <input type="text" value={answer} onChange={handleChange} />
        </div>
    )
}

export default Question
