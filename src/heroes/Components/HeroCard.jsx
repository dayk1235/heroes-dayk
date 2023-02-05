import { Link } from 'react-router-dom';

// No regresa duplicado si es lo mismo el alter y los characters
const CharactersByHero = ({ alter_ego, characters }) => {
    // if (alter_ego === characters) return (<></>);
    // return <p>{characters}</p>;
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroUrl = ` /assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn mb-4">

            <div className="card" style={{ maxWidth: '350px' }}>

                <img src={heroUrl} className="card-img-top" alt={superhero} />

                <div className="card-body">
                    <h5 className="card-title"> {superhero} </h5>
                    <CharactersByHero characters={characters} alter_ego={alter_ego}/>
                    <p className="card-text"> <small className="text-muted" > {first_appearance} </small> </p>
                    <Link to={`/hero/${id}`} className="btn btn-primary" >
                        More
                    </Link>
                </div>
            </div>
        </div>

    )
}
