import Cards from "../Cards/Cards";
import ScrollCarousel from 'scroll-carousel-react';

function Skills({ title, data}) {
    return (
        <>
            <h2>{title}</h2>
            <ScrollCarousel
                autoplay
                autoplaySpeed={8}
                speed={8}
                // onReady={() => console.log('I am ready')}
            >
                {data.map(({id, item, img}) => (
                    <div key={id} className="slider-container">
                        <Cards tecnology={item} imageUrl = {img}/>
                    </div>
                ))}
            </ScrollCarousel>
        </>
    );
}

export default Skills;