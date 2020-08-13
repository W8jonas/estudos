import React, {useState, useEffect, FormEvent} from 'react'

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
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

function TeacherForm() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')
    
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to:"" }
    ])
    
    function handleCreateClass(event: FormEvent) {
        event.preventDefault()
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso!')
            history.push('/')
        }).catch(()=>{
            alert('Erro ao cadastrar')
        })

    }

    function setScheduleItemValue(posiiton:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
            if (index == posiiton){
                return {...scheduleItem, [field]: value}
            }else {
                return scheduleItem
            }
        })

        setScheduleItems(updatedScheduleItems)
    }

    function addNewScheduleItem() {
        setScheduleItems([
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
                <form onSubmit={handleCreateClass}>
                        
                    <fieldset>
                        <legend> Seus dados </legend>
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e)=>setName(e.target.value)} 
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e)=>setAvatar(e.target.value)}
                        />
                        <Input
                            name="Whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e)=>setWhatsapp(e.target.value)}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e)=>setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend> Sobre a aulas </legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            options={subjectOptions}
                            value={subject}
                            onChange={(e)=> setSubject(e.target.value)}
                        />

                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={subject}
                            onChange={(e)=> setSubject(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis

                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        { scheduleItems.map((scheduleItem, index)=> (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="subject"
                                    label="Matéria"
                                    options={subjectOptions}
                                    onChange={(e)=> setScheduleItemValue(index, 'week_day', e.target.value)}
                                />

                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e=> setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e=> setScheduleItemValue(index, 'to', e.target.value)}
                                />
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
                    
                </form>
            </main>
        </div>
    )
}

export default TeacherForm