import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'


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
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Aqui vem o titulo</h1>
            </Widget.Header>
            <p>Aqui vem um parágrafo para uma pergunta</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>

      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Aqui vem o titulo</h1>
            </Widget.Header>
            <p>Aqui vem um parágrafo para uma pergunta</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/W8jonas" />
    </QuizBackground>
  )
}
