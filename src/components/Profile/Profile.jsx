import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import cuteAvatar from '../../assets/cute-avatar.svg'
import '../Profile/Profile.css'

function Profile() {
    return (
        <>
            <img src={cuteAvatar} className='avatar' alt='José Javier Martínez Cano' title='José Javier Martínez Cano' loading='lazy' aria-hidden="true" />
            <div>
                <h2>José Javier Martínez Cano</h2>
                <h3>Mi Viaje Frontend te espera en cada Píxel.</h3>
                <div className='social-networks'>
                    <a className='bk-w semi-bold round border-light ' href="https://www.linkedin.com/in/javssmarc/">
                        <FontAwesomeIcon className='btn-icon-text' icon={faLinkedinIn} />
                        LinkedIn
                    </a>
                    <a className='bk-w semi-bold round border-light ' href="https://github.com/JVSMC">
                        <FontAwesomeIcon className='btn-icon-text' icon={faGithub} />
                        GitHub
                    </a>
                    <a className='bk-w semi-bold round border-light ' href="mailto:javssmar@gmail.com?subject=Oportunidad%20de%20Colaboraci%C3%B3n&body=Hola%20Javier%20Mart%C3%ADnez%2C%0A%0AEspero%20que%20este%20mensaje%20te%20encuentre%20bien.%20Mi%20nombre%20es%20%5BTu%20Nombre%5D%20y%20soy%20%5BTu%20Cargo%5D%20en%20%5BNombre%20de%20la%20Empresa%5D.%20Hemos%20revisado%20tu%20portafolio%20y%20quedamos%20impresionados%20con%20tu%20experiencia%20en%20desarrollo%20web.%0A%0AActualmente%2C%20estamos%20explorando%20oportunidades%20de%20colaboraci%C3%B3n%20y%20creemos%20que%20tu%20habilidad%20en%20%5Bmenciona%20una%20habilidad%20espec%C3%ADfica%5D%20ser%C3%ADa%20un%20gran%20aporte%20para%20nuestros%20proyectos.%20%C2%BFEstar%C3%ADas%20interesado%2Fa%20en%20discutir%20m%C3%A1s%20sobre%20c%C3%B3mo%20podr%C3%ADamos%20trabajar%20juntos%3F%0A%0ASi%20est%C3%A1s%20disponible%20para%20una%20breve%20llamada%20o%20reuni%C3%B3n%2C%20nos%20encantar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20tu%20trabajo%20y%20compartir%20m%C3%A1s%20sobre%20nuestros%20proyectos.%20Por%20favor%2C%20h%C3%A1zmelo%20saber%20si%20hay%20un%20momento%20conveniente%20para%20ti.%0A%0A%C2%A1Esperamos%20tener%20noticias%20tuyas%20pronto!%0A%0ASaludos%2C%0A%5BTu%20Nombre%5D%0A%5BTu%20Cargo%5D%0A%5BNombre%20de%20la%20Empresa%5D%0A%5BTu%20Informaci%C3%B3n%20de%20Contacto%5D%22">
                        <FontAwesomeIcon className='btn-icon-text' icon={faEnvelope} />
                        Correo
                    </a>
                </div>
            </div>
        </>
    );
}

export default Profile;