import React from 'react'

// assets
import backIcon from '../../assets/icons/back.svg'
import logoImg from '../../assets/logo.svg'


// Funções
import { Link } from 'react-router-dom'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="to-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader