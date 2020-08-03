import React from 'react';

//assets
import './styles.css'

import logoImg from '../../assets/logo.svg'
import landingImg from '../../assets/landing.svg'

import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'


function Landing() {
  return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online.</h2>
            </div>
            
            <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

            <div className="buttons-container">
                <a href="" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </a>

                <a href="" className="give-classes">
                    <img src={giveClassesIcon} alt="Dar aulas"/>
                    Dar aulas
                </a>
            </div>
            <span className="total-connections">
                Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
            </span>
        </div>
    </div>
  )
}

export default Landing