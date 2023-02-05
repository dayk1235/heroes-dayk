import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../Helpers';


export const HeroPage = () => {

  const { id } = useParams();

  const heroe = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  const onBackScreen = () => {
    navigate(-1);
  };

  if (!heroe) {
    return <Navigate to='/marvel' />
  };

  return (
    <>

      <div className='row my-3 animate__animated animate__fadeIn'>
        <div className='col-4 animate__animated animate__lightSpeedInLeft'>
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={heroe.superhero}
            className='img-thumbnail'
          />
        </div>

        <div className='col-8'>
          <h3>{heroe.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> <b> Alter_ego:</b> {heroe.alter_ego} </li>
            <li className='list-group-item'> <b> Publisher:</b> {heroe.publisher} </li>
            <li className='list-group-item'> <b> Primera apariencia:</b> {heroe.first_appearance} </li>
          </ul>

          <h5 className='mt-3'> Characters </h5>
          <p>{heroe.characters}</p>

          <button
            className='btn btn-outline-success'
            onClick={onBackScreen}
          >
            Back
          </button>

        </div>
      </div>


    </>
  )
};
