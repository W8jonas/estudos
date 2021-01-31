/* eslint-disable react/prop-types */
import React from 'react'
import db from '../db.json'
import Widget from '../src/components/widget'
import QuizBackground from '../src/components/QuizBackground'
import Button from '../src/components/Button'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'


function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
			</Widget.Header>

            <Widget.Content>
                Desafio do Loading
			</Widget.Content>
        </Widget>
    )
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
    const questionId = `question_${questionIndex}`

    function onHandleSubmit(event) {
        event.preventDefault()
        onSubmit()
    }

    return (
        <Widget>
            <Widget.Header>
                <h1>{`Pergunta ${questionIndex} de ${totalQuestions}`}</h1>

            </Widget.Header>

            <img
                alt="Descrição"
                styled={{ width: '100%', height: '150px', objectFit: 'cover' }}
                src={question.image}
            />

            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>

                <form onSubmit={onHandleSubmit}>
                    {question.alternatives.map((alternative, index) => {
                        const alternativeId = `${alternative}_${index}`
                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                htmlFor={alternativeId}
                            >
                                <input
                                    id={alternativeId}
                                    type="radio"
                                    name={questionId}
                                />
                                {alternative}
                            </Widget.Topic>
                        )
                    })}

                    <Button type="submit">
                        Confirmar
                    </Button>

                </form>


            </Widget.Content>
        </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const totalQuestions = db.questions.length
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const questionIndex = currentQuestion
    const question = db.questions[questionIndex]

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 1000)
    }, [])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ &&
                    <QuestionWidget
                        question={question}
                        totalQuestions={totalQuestions}
                        questionIndex={questionIndex}
                        onSubmit={handleSubmitQuiz}
                    />
                }
                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && <div>Você acertou x questões! Parabéns!</div>}
            </QuizContainer>
        </QuizBackground >
    )
}
