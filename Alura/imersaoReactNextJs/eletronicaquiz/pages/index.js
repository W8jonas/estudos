import React, { useState } from 'react'
import db from '../db.json'
import { useRouter } from 'next/router'
import Widget from '../src/components/widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'
// import Head from 'next/Head'
import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'


export default function QuizPage() {

	const router = useRouter()
	const [name, setName] = useState('Jonas')

	function onHandleSubmit(event) {
		event.preventDefault()
		router.push(`/quiz?name=${name}`)
	}

	return (
		<QuizBackground backgroundImage={db.bg}>
			{/* <Head>
				<title>{db.title}</title>
			</Head> */}

			<QuizContainer>
				<QuizLogo />
				<Widget>
					<Widget.Header>
						<h1>Alura Quiz - Modelo Base</h1>
					</Widget.Header>
					<Widget.Content>
						<form onSubmit={onHandleSubmit}>
							<Input
								name="nome do usuário"
								placeholder="Digite seu nome"
								onChange={(event) => { setName(event.target.value) }}
								value={name}
							/>

							<Button type="submit" disabled={!name}>
								Jogar {name}
							</Button>

						</form>
					</Widget.Content>
				</Widget>

				<Widget>
					<Widget.Content>
						<h1>Projeto</h1>
						<p>Em dev</p>
					</Widget.Content>
				</Widget>
				<Footer />
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/W8jonas" />
		</QuizBackground>
	)
}
