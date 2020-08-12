import React, {useState, useEffect} from 'react'

// assets
import './styles.css'
import WarningImage from '../../assets/icons/warning.svg'

// components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

// functions
import {subjectOptions} from '../../extras/index'

function TeacherForm() {

    const [scheduleItems, setScheduleItem] = useState([
        { week_day: 0, from: "", to:"" }
    ])

    function addNewSheduleItem() {
        setScheduleItem([
            ...scheduleItems, 
            { week_day: 0, from: "", to:"" }
        ])
    }

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
                        options={subjectOptions}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis

                        <button type="button" onClick={addNewSheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    { scheduleItems.map((scheduleItem)=> (
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <Select
                                name="subject"
                                label="Matéria"
                                options={subjectOptions}
                            />

                            <Input name="from" label="Das" type="time" />
                            <Input name="to" label="Até" type="time" />
                        </div>
                    ))
                    }
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