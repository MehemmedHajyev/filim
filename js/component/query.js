import { main_api } from './api.js';
import { m } from './test.js';
export const getMovies = async () => {
    return await fetch(main_api)
        .then(resp => resp.json())
        .then(data => {
            
            return data;
        });
}

console.log(m)