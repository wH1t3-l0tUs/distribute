import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Quizz } from '../Object/Quizz';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentQuestion: 0,
            score: 0,
            showScore:false
        }
    }
    handleSubmit(correct){
        if(correct){
            this.setState(prevState => ({
                score: prevState.score +1,
            }))
        }
        const nextQuestion = this.state.currentQuestion + 1;    
        if (nextQuestion < Quizz.length) {
            this.setState({
                currentQuestion: nextQuestion
            })
        } else {
            this.setState({
                showScore: true
            })
        }
    }

    render() {
        return (
          <Container className='mt-5'>
            <Row className='justify-conten-center'>
                <Col md={8}>
                  <h1>Quiz App</h1>
                  {this.state.showScore ? (
                    <>
                       <h2>Your Score: {this.state.score}/{Quizz.length}</h2>
                       <Button onClick={() => window.location.reload()}>Restart</Button>
                    </>
                  ):(
                    <>
                       <h2>{Quizz[this.state.currentQuestion].question}</h2>
                        <ListGroup>
                            {Object.keys(Quizz[this.state.currentQuestion].answers).map((key) => (
                                <ListGroup.Item
                                    key={key}
                                    action
                                    onClick={() => this.handleSubmit(Quizz[this.state.currentQuestion].correctAnswer === key)}
                                >
                                    {key}: {Quizz[this.state.currentQuestion].answers[key]}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </>
                  )
                  }
                  
                </Col>
            </Row>
          </Container>
        )
    }
}

export default App;
