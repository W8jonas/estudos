import './styles.scss'
import CopyImg from '../../assets/images/copy.svg'

type ButtonProps = {
    code: string
}

export function RoomCode(props: ButtonProps) {
    
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={CopyImg} alt="Copiar room code" />
            </div>
            <span>Sala {props.code}</span>
        </button>
    )
}
