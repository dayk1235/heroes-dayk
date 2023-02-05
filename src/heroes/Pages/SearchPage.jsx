import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../Hooks/useForm";

import { HeroCard } from '../Components';
import { getHeroByName } from "../Helpers";


export const SearchPage = () => {

  const navigate = useNavigate(); //Se utiliza para navegar a otra ruta

  const location = useLocation(); //Se obtiene los query del URL
  const { q = '' } = queryString.parse(location.search); //Se obtienen separados las propiedades del URL

  const heroes = getHeroByName(q);



  const { onInputChange, searchText } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`/search?q=${searchText.trim()}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-5 m-5">

          <h3>SEARCHING</h3>

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-2"
            >Search</button>
          </form>
        </div>

        <div className="col-7 m-5">
         

          {
            ( q === '' )
            ? <div className="alert alert-primary">Search a <b>Hero</b></div>
            : (heroes.length === 0) && <div className="alert alert-danger">No hero whit <b>{q}</b></div>
          }

          {
            heroes.map(hero => ((
              <HeroCard key={hero.id} {...hero} />

            )))
          }


        </div>
      </div>
    </>
  )
};
