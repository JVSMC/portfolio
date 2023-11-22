import '../Cards/Cards.css'
function Cards({tecnology, imageUrl}) {
    return ( 
        <div className="my-slide border-light" style={{
            background: `url(${imageUrl}) center/ cover no-repeat, #ffffff`
        }}>
            <p className="italic light">{tecnology}</p>
        </div>
     );
}

export default Cards;