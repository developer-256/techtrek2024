
export interface Field {

    name: string,
    image: string,
    date: string
    speaker: string,
    time: string,
    description: ""
}

export const fields1: Field[] = [
    {
        name: "Moile App development",
        image: require('../assets/images/MobDevLogo.png'),
        date: "3rd May 2024",
        speaker: "Maz Ajmal",
        time: "7:00-8:00pm",
        description: ""
    },
    {
        name: "Web development",
        image: require('../assets/images/WebDevLogo.png'),
        date: "4th May 2024",
        speaker: "Roshan kaleem",
        time: "7:00-8:00pm",
        description: ""
    },
    {
        name: "Artificial Intelligence",
        image: require('../assets/images/AILogo.png'),
        date: "5th May 2024",
        speaker: "Muhammad Waqas",
        time: "7:00-8:00pm",
        description: ""
    }
]