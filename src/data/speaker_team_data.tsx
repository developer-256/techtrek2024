import { StaticImageData } from "next/image";

export interface Speakers {
    image: string | StaticImageData,
    name: string;
    position: string;
    company?: string;
    description?: string;
    linkedin: string;
}

export const speakers: Speakers[] = [

    {
        image: require("../assets/images/maazAjmal.png"),
        name: "Maaz AJmal",
        position: "Flutter developer",
        linkedin: "https://www.linkedin.com/in/maazajmal/",
        company: "Flutter Lahore"
    },
    {
        image: require("../assets/images/RoshanKaleem.jpg"),
        name: "Roshan Kaleem",
        position: "Web developer",
        linkedin: "https://www.linkedin.com/in/roshan-kaleem-5631a31ba/"
        , company: "Devsinc"
    },
    {
        image: require("../assets/images/Waqas.jpg"),
        name: "Muhammad Waqas",
        position: "Founder and AI engineer",
        linkedin: "https://www.linkedin.com/in/semwaqas/"
        , company: "Dafi Labs"
    },
    {
        image: require("../assets/images/jahnzaib.jpg"),
        name: "Jahanzeb Akram",
        position: "Cyber Security Specialist",
        linkedin: "https://www.linkedin.com/in/jahanzaibawan/"
        , company: "Qatar Railways"
    },
    {
        image: require("../assets/images/AhmadManzoor.jpg"),
        name: "Ahmad Manzoor",
        position: "CEO, Corporate Trainer, Technologist ",
        linkedin: "https://www.linkedin.com/in/ahmadmanzoorahmad/"
        , company: "FutureTechs"
    },
    {
        image: require("../assets/images/maazAjmal.png"),
        name: "Maaz AJmal",
        position: "Flutter developer",
        linkedin: "https://www.linkedin.com/in/maazajmal/"
        , company: ""
    }

]

export const team: Speakers[] = [
    {
        image: "",
        name: "Faizan Afzal",
        position: "Lead/ Founder",
        linkedin: ""
    },
    {
        image: "",
        name: "Alishba Ali",
        position: "Registration Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Sibgha Bhatti",
        position: "",
        linkedin: ""
    },
    {
        image: "",
        name: "Abdullah Tahir",
        position: "PR lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Zarafshan ",
        position: "Graphics Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Yumna hassan",
        position: "Media lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Maryam Gondal",
        position: "Management Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Abdullah Naveed",
        position: "Creative Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Umar Chuadary",
        position: "Technical Lead",
        linkedin: ""
    }, {
        image: "",
        name: "Aqsa Munir",
        position: "Content Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Khubaib",
        position: "Operations Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Laiba Akram",
        position: "Information Lead",
        linkedin: ""
    },
    {
        image: "",
        name: "Faiq Waqas",
        position: "Logistic Lead",
        linkedin: ""
    }
]