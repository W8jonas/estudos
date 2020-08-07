import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import TeacherList from '../pages/TeacherList'
import TeacherForm from '../pages/TeacherForm'


function Routes(){
    return (
        <BrowserRouter>
            <Route path='/' component={Landing} exact/>
            <Route path='/estudar' component={TeacherList}/>
            <Route path='/dar-aulas' component={TeacherForm}/>
            <Route />
        </BrowserRouter>
    )
}

export default Routes