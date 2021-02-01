/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'

const ExternalQuiz = ({ externalDb }) => {
    return <ThemeProvider theme={externalDb.theme}>
        <QuizScreen externalQuestions={externalDb.questions} backgroundImage={externalDb.bg} />
    </ThemeProvider>
}

export default ExternalQuiz

export async function getServerSideProps(context) {

    const [projectName, githubUser] = context.query.id.split('___')

    const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`) // https://aluraquiz-css.omariosoutoapidb.vercel.app/api/db
        .then(response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error('Falha ao receber dados')
        })
        .then(responseJson => {
            return responseJson
        })
        .catch(error => {
            console.error(error)
        })

    console.log('externalDb: ', externalDb)
    return {
        props: {
            externalDb,
        }
    }
}