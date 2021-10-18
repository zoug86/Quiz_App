import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Answers from './components/Answers';
import { QuestionProvider } from './context/QuestionContext'


function App() {
  return (
    <QuestionProvider>
      <Router>
        <Route exact path='/answers' component={Answers} />
        <Route exact path='/' component={Home} />
      </Router>
    </QuestionProvider>

  );
}

export default App;
