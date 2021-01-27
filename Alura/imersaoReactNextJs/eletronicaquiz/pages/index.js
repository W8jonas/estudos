import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/widget'
// import Footer from '../src/components/Footer'
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


// Saiba que eu vou te apoiar sempre sempre sempre sempre mesmo

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Boaa noitee Princesa!!!💗</h1>
            </Widget.Header>
            <p>Eu fiz isso aqui só para dizer que você é uma mulher incrível e muito especial pra mim! 💗</p>
            <p>Você é super inteligente, ter um sorriso lindo e ser super carinhosa, você tem uma personalidade muito divertida que me anima sempre para tudo. 💗</p>
            <p>Eu fico bobo e abismado pensando em como você pode me causar tantos sorrisos sinceros e memoráveis mandando somente algumas mensagens. 💗</p>
            <p>Você tem a magia de sempre me animar e me deixar feliz só por ser quem é, da forma e do jeitinho que sempre foi. 💗</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>

      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Princesa,</h1>
            </Widget.Header>
            <p>Meu dia está mega corrido hoje, pelos motivos que eu ja te falei, mas é tudo por uma boa causa. Enfim espero que tenha gostado da surpresinha que fiz para ti! 💗💗💗</p>
          </Widget.Content>
        </Widget>
        {/* <Footer /> */}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/W8jonas" />
    </QuizBackground>
  )
}
