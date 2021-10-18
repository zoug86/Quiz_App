import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const QuestionContext = createContext();
export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const { data } = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean');
            setQuestions(data.results)
        }
        getQuestions();
    }, [])

    return (
        <QuestionContext.Provider value={{ questions, setQuestions, answers, setAnswers }}>
            {children}
        </QuestionContext.Provider>
    )
}
