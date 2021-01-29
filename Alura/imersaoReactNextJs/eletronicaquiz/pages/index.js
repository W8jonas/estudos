import React, { useState } from 'react'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'
import { useRouter } from 'next/router'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const router = useRouter()
  const [name, setName] = useState('Jonas')

  function onHandleSubmit(event) {
    event.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Alura Quiz - Modelo Base</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={onHandleSubmit}>
              <input
                placeholder="Digite seu nome"
                onChange={(event) => { setName(event.target.value) }}
              />

              <button type="submit" disabled={!name}>
                Jogar {name}
              </button>

            </form>
          </Widget.Content>
        </Widget>
      </QuizContainer>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Projeto</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Em dev</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/W8jonas" />
    </QuizBackground>
  )
}
