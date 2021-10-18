import React, { useContext } from 'react';
import Question from '../components/Question';
import { QuestionContext } from '../context/QuestionContext';

const Home = ({ history }) => {
    const { questions } = useContext(QuestionContext);

    const handleSubmit = () => {
        history.push('/answers')
    }
    return (
        <div>
            <ul>
                {questions.map((question, i) => (
                    <Question question={question.question} key={i} />

                ))}
            </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Home
