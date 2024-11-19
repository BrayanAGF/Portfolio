import { PostI } from "../Interfaces/Blog.interfaces";

export const ThreadAcerca: PostI[] = [
    {
        Text: "Me encanta escuchar música a todas horas en mi día. A veces siento como si estuviera dentro de una pelicula cada día y tengo que buscar la canción perfecta para cualquier momento.",
    },
    {
        Text: "Una de mis bandas favoritas es The Doors",
        Img: {
            URL: "https://los40.com/resizer/v2/FEMFONG5TROKTOTKQ22PUK25KY.jpg?auth=62c8139506a743343791ff6cd74baf1de621ce382b3a70157706637e77a3cf37&quality=70&width=1200&height=544&focal=312,131",
            Name: "TheDoors"
        }
    },
]


export const ThreadGameplay: PostI[] = [
    {
        Text: "Este es uno de mis proyectos mas interesantes que he desarrollado, se llama Gameplay y es un reproductor de música enfocado en los soundtracks de videojuegos.",
        Img: {
            URL: "./assets/imgs/Proyecto.png",
            Name: "Gameplay"
        }
    },
    {
        Text: "Lo hice utilizando la libreria de Electron en conjunto con React con Typescript."
    },
    {
        Text: "Este es uno de mis proyectos mas interesantes que he desarrollado, se llama Gameplay y es un reproductor de música enfocado en los soundtracks de videojuegos.",
        Img: {
            URL: "./assets/imgs/Proyecto.png",
            Name: "Gameplay2"
        }
    },
]