/* eslint-disable react/prop-types */
import React from 'react'
// import db from '../../../db.json'
import Widget from '../../components/widget'
import QuizBackground from '../../components/QuizBackground'
import Button from '../../components/Button'
import QuizLogo from '../../components/QuizLogo'
import QuizContainer from '../../components/QuizContainer'
import AlternativeForm from '../../components/AlternativeForm'
import BackLinkArrow from '../../components/BackLinkArrow'

function ResultWidget({ results }) {

    // const countAnswer = results.reduce((contadorDeRespostas, respostaAtual) => {
    //     if (respostaAtual === true) {
    //         return contadorDeRespostas + 1
    //     }
    //     return contadorDeRespostas
    // }, 0)

    const countAnswer = results.filter(answer => answer).length

    return (
        <Widget>
            <Widget.Header>
                Carregando...
			</Widget.Header>

            <Widget.Content>
                <p>Você acertou {countAnswer} perguntas</p>
                <ul>
                    {results.map((response, index) => (
                        <li key={index}>
                            {`#${index + 1} Resultado: ${response ? 'acertou' : 'errou'}`}
                        </li>
                    ))}
                </ul>
            </Widget.Content>
        </Widget>
    )
}

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

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
    const questionId = `question_${questionIndex}`

    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
    const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false)
    const isCorrectAnswer = selectedAlternative === question.answer
    const hasAlternativeSelected = !selectedAlternative

    function onHandleSubmit(event) {
        event.preventDefault()
        setIsQuestionSubmitted(true)

        setTimeout(() => {
            setIsQuestionSubmitted(false)
            setSelectedAlternative(undefined)
            addResult(isCorrectAnswer)
            onSubmit()
        }, 1000)

    }

    return (
        <Widget>
            <Widget.Header>
                <BackLinkArrow href="/" />
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

                <AlternativeForm onSubmit={onHandleSubmit}>
                    {question.alternatives.map((alternative, index) => {
                        const alternativeId = `${alternative}_${index}`
                        const selectedAlternativeStatus = isQuestionSubmitted && isCorrectAnswer ? 'SUCCESS' : 'ERROR'
                        const isSelected = selectedAlternative === index
                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={selectedAlternativeStatus}
                            >
                                <input
                                    id={alternativeId}
                                    style={{ display: 'none' }}
                                    type="radio"
                                    name={questionId}
                                    onChange={() => setSelectedAlternative(index)}
                                />
                                {alternative}
                            </Widget.Topic>
                        )
                    })}

                    <Button type="submit" disable={!hasAlternativeSelected}>
                        Confirmar
                    </Button>
                    {isQuestionSubmitted && isCorrectAnswer && <p> Você acertou a questão </p>}
                    {isQuestionSubmitted && !isCorrectAnswer && <p> Você errou a questão </p>}
                </AlternativeForm>

            </Widget.Content>
        </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

export default function QuizPage({ externalQuestions, backgroundImage }) {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [results, setResults] = React.useState([])

    const totalQuestions = externalQuestions.length
    const questionIndex = currentQuestion
    const question = externalQuestions[questionIndex]

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 100)
    }, [])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    function addResult(result) {
        setResults([...results, result])
    }

    return (
        <QuizBackground backgroundImage={backgroundImage}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ &&
                    <QuestionWidget
                        question={question}
                        totalQuestions={totalQuestions}
                        questionIndex={questionIndex}
                        onSubmit={handleSubmitQuiz}
                        addResult={addResult}
                    />
                }
                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && <ResultWidget results={results} />}
            </QuizContainer>
        </QuizBackground >
    )
}
