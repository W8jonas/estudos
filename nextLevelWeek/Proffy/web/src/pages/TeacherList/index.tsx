import React from 'react'

// assets
import './styles.css'


// Components
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

// Functions
import {subjectOptions, weekDayOptions} from '../../extras/index'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={subjectOptions}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={weekDayOptions}
                    />
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