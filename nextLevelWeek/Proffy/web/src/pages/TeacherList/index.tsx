import React from 'react'

// assets
import './styles.css'

// Functions

// Components
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                
                <form id="search-teachers">
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
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>

            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>

        </div>
    )
}

export default TeacherList