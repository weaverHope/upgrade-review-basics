// Iteración #2: Mix Fors
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen 
// de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

let media = 0;
let sumaMediaTotal = 0;


for (let i of users) {
    let media = 0;
    let suma = 0;
    let tamFavoritesSounds = 0;
    //Calcula cada media de cada usuario por separado
    for (let key in i.favoritesSounds) {
        //let  = Object.keys(i.favoritesSounds).length;
        suma += i.favoritesSounds[key].volume;
        tamFavoritesSounds++;
    }
    //media = suma / Object.keys(i.favoritesSounds).length;
    media = suma / tamFavoritesSounds;
    sumaMediaTotal += media;
}

sumaMediaTotal = sumaMediaTotal / users.length;
console.log(sumaMediaTotal);
