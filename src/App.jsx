import './App.css'
import Navbar from './components/Navbar/Navbar'
import cuteAvatar from './assets/cute-avatar.svg'

function App() {

  return (
    <div className='app' transition-style="in:circle:top-right">
      <div className='navbar-container'>
        <Navbar />
      </div>
      <h1>Explora, Descubre, Crea</h1>
      <section className='avatar-info'>
        <img src={cuteAvatar} className='avatar' alt='José Javier Martínez Cano'  title= 'José Javier Martínez Cano' loading='lazy' aria-hidden="true"/>
        <div>
          <h2>José Javier Martínez Cano</h2>
          <h3>Mi Viaje Frontend te espera en cada Píxel</h3>
        </div>
      </section>
    </div>
  )
}

export default App
