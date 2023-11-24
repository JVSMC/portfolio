import Card_2 from "../components/Card_2/Card_2";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
// import data from '../Data/technologies.json';
import projectsData from '../Data/projectsData.json';

function Index() {
    return (
        <div className='app' transition-style='in:circle:top-right'>
            <h1>Explora, Descubre, Crea</h1>
            <section className='avatar-info'>
                <Profile />
            </section>
            <section id='MyProjects'>
                <h1>Mis proyectos</h1>
                <h3>Sumérgete en mi laboratorio digital, donde cada proyecto es un experimento visual que desafía los límites del diseño y la funcionalidad frontend.</h3>
                {
                    projectsData.map(({id, titleProject, urlDemo, descProject, techProject}) => (
                        <Card_2 key={id}
                            projectImg="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            projectTitle={titleProject}
                            urlDemo={urlDemo}
                            projectDescrip={descProject}
                            projectTech={techProject}
                        />
                    ))}
            </section>
        </div>
    );
}

export default Index;