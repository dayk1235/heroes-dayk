import { heroes } from "../Data/heroes";


export const getHeroByName = (name = '') => {

    name = name.trim().toLowerCase();

    if (name.length === 0) return [];

    return heroes.filter(
        heroe => heroe.superhero.toLowerCase().includes(name)
    );

};