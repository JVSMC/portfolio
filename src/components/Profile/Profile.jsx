import cuteAvatar from '../../assets/cute-avatar.svg'
import '../Profile/Profile.css'

function Profile() {
    return (
        <>
            <img src={cuteAvatar} className='avatar' alt='José Javier Martínez Cano' title='José Javier Martínez Cano' loading='lazy' aria-hidden="true" />
            <div>
                <h2>José Javier Martínez Cano</h2>
                <h3>Mi Viaje Frontend te espera en cada Píxel</h3>
            </div>
        </>
    );
}

export default Profile;