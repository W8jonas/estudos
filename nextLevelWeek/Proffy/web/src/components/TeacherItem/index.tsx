import React from 'react'

// assets
import './styles.css'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher {
    id: string;
    bio:string;
    subject:string;
    cost: number;
    name:string;
    avatar:string;
    whatsapp:string;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) =>{
    
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teachers-item">
            <header>
                <img alt={teacher.name} src={teacher.avatar} />
                <div>
                    <strong>{teacher.subject}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{teacher.cost}</strong>
                </p>
                
                <a
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                >
                    <img src={WhatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem