import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import data from '../Data/technologies.json';

function Index() {
    return (
        <div className='app' transition-style='in:circle:top-right'>
            <h1>Explora, Descubre, Crea</h1>
            <section className='avatar-info'>
                <Profile />
            </section>
            <section id = 'MySkills'>
                <h1>Mis habilidades</h1>
                <Skills title = 'Técnicas' data = {data.technologies}/>
            </section>
        </div>
    );
}

export default Index;