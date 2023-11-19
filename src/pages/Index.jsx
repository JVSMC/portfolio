
import Profile from "../components/Profile/Profile";

function Index() {
    return (
        <div className='app' transition-style='in:circle:top-right'>
            <h1>Explora, Descubre, Crea</h1>
            <section className='avatar-info'>
                <Profile />
            </section>
        </div>
    );
}

export default Index;