import React from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import WarningImage from '../../assets/icons/warning.svg'
import Textarea from '../../components/Textarea'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend> Seus dados </legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="Whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend> Sobre a aulas </legend>
                    <Input name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo da sua hora por aula"/>

                </fieldset>

                <footer>
                    <p>
                        <img src={WarningImage} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>

                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm