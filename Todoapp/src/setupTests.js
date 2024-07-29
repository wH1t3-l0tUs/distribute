import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Quizz } from './Object/Quizz';
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < Quizz.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Quiz App</h1>
          {showScore ? (
            <div>
              <h2>Your Score: {score} / {Quizz.length}</h2>
              <Button onClick={() => window.location.reload()}>Restart</Button>
            </div>
          ) : (
            <div>
              <h2>{Quizz[currentQuestionIndex].question}</h2>
              <ListGroup>
                {Object.keys(Quizz[currentQuestionIndex].answers).map((key) => (
                  <ListGroup.Item
                    key={key}
                    action
                    onClick={() => handleAnswerClick(Quizz[currentQuestionIndex].correctAnswer === key)}
                  >
                    {key}: {Quizz[currentQuestionIndex].answers[key]}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
