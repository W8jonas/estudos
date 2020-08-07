import React from 'react'

// assets
import backIcon from '../../assets/icons/back.svg'
import logoImg from '../../assets/logo.svg'
import './styles.css'

// Funções
import { Link } from 'react-router-dom'



function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="to-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong>Estes são os proffys disponíveis</strong>
                </div>
            </header>
        </div>
    )
}

export default TeacherList