import Card_2 from "../components/Card_2/Card_2";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
// import data from '../Data/technologies.json';
import projectsData from '../Data/projectsData.json';

function Index() {
    return (
        <div className='app' transition-style='in:circle:top-right'>
            <h1 id="home">Explora, Descubre, Crea</h1>
            <section className='avatar-info'>
                <Profile />
            </section>
            <section id='MyProjects'>
                <h1>Mis proyectos</h1>
                <h3>Sumérgete en mi laboratorio digital, donde cada proyecto es un experimento visual que desafía los límites del diseño y la funcionalidad frontend.</h3>
                <div className="projects-container">
                    {
                        projectsData.map(({ id, titleProject, urlDemo, org, descProject, techProject, imgPrev }) => (
                            <Card_2 key={id}
                                projectImg={imgPrev}
                                projectTitle={titleProject}
                                urlDemo={urlDemo}
                                org={org}
                                projectDescrip={descProject}
                                projectTech={techProject}
                            />
                        ))}
                </div>
            </section>
        </div>
    );
}

export default Index;