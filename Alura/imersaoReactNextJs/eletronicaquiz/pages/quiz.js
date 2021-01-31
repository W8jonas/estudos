import React from 'react'
import db from '../db.json'
import Widget from '../src/components/widget'
import Footer from '../src/components/Footer'
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

export default function QuizPage() {
    const question = db.questions[0]

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                        <h1>{`Pergunta 1 de ${db.questions.length}`}</h1>

                    </Widget.Header>

                    <img
                        alt="Descrição"
                        styled={{ width: '100%', height: '150px', objectFit: 'cover' }}
                        src={question.image}
                    />

                    <Widget.Content>
                        <h2>{question.title}</h2>
                        <p>{question.description}</p>

                        <Button type="submit">
                            Confirmar
                        </Button>

                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
        </QuizBackground >
    )
}