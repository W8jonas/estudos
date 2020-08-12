import React from 'react'

// assets
import './styles.css'
import WarningImage from '../../assets/icons/warning.svg'

// components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

// functions


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
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: "Português", label: "Português"},
                            {value: "Matemática", label: "Matemática"},
                            {value: "Física", label: "Física"},
                            {value: "Química", label: "Química"},
                            {value: "Biologia", label: "Biologia"},
                            {value: "História", label: "História"},
                            {value: "Literatura", label: "Literatura"},
                            {value: "Inglês", label: "Inglês"},
                            {value: "Artes", label: "Artes"},
                            {value: "Filosofia", label: "Filosofia"},
                            {value: "Sociologia", label: "Sociologia"},
                            {value: "Geografia", label: "Geografia"},
                            {value: "Educação Física", label: "Educação Física"},
                        ]}
                    />
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