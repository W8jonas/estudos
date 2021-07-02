import {ButtonHTMLAttributes} from 'react'

import './styles.scss'
import CopyImg from '../../assets/images/copy.svg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function RoomCode(props: ButtonProps) {
    return (
        <button className="room-code" {...props}>
            <div>
                <img src={CopyImg} alt="Copiar room code" />
            </div>
            <span>Sala -Md_D_FAbOShTeYEEas8</span>
        </button>
    )
}
