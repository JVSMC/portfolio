
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Card_2/Card_2.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* The code you provided is a functional component in JavaScript React. It defines a component called
`Card_2` that returns JSX (JavaScript XML) code. */
function Card_2({ projectImg, projectTitle, urlDemo, urlRepo, projectDescrip, projectTech, org }) {
    return (
        <div className="bk-w border-light round card-project">
            <img src={projectImg} alt="" title='' loading='lazy' aria-hidden='true' />
            <div>
                <div className='card-title-container'>
                    <div>
                        <h3 className='semi-bold'>{projectTitle}</h3>
                        <p className='italic'>{org}</p>
                    </div>
                    <div className='links-container'>
                        <a href={urlDemo} target='_blank' className='bk-w border-light round semi-bold cta'>Ver demo</a>
                        <a href={urlRepo} target='_blank' className='bk-w border-light round semi-bold'>
                            <FontAwesomeIcon icon={faGithub} className='btn-icon-text'/>
                            GIT
                        </a>
                    </div>
                </div>
                <p className='card-description-project light'>{projectDescrip}</p>
                <samp>Tecnologías:</samp>
                <ul className='technologies-container'>
                    {projectTech.map(({ technology, techColor }) => (
                        <li style={{ background: `${techColor}` }} key={technology}>{technology}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Card_2;