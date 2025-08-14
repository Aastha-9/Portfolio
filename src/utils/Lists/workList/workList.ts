type Props = {
    title: string,
    description: string,
    techStack: string[],
    img?: string | undefined,
    liveLink?: string | undefined,
    githubLink: string,
}


export const workList: Props[] = [
    {
    title: "Wanderlust",
    description: "An Airbnb-inspired full-stack web application for vacation listings. Features include listing creation, editing, image uploads, location-based browsing, and detailed view pages. Built using the MERN stack with EJS templating.",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Mongoose"],
    img: "/images/Work/Wanderlust.jpg",
    // liveLink: "https://your-wanderlust-demo-link.com/",
    githubLink: "https://github.com/Aastha-9/Wanderlust"
    },
    {
        title: "Spotify Clone",
        description: "A static front-end clone of the Spotify web player using only HTML and CSS. Fully responsive layout mimicking Spotify's design with sections like sidebar, navbar, and song cards.",
        techStack: ["HTML", "CSS"],
        img: "/images/Work/SpotifyClone.jpg",
        //liveLink: "https://your-spotify-clone-demo-link.com/",
        githubLink: "https://github.com/Aastha-9/Spotify-Clone"

    },
    {
        title: "Hungry Snake",
        description: "A dynamic browser-based snake game with smooth controls, real-time gameplay, and increasing difficulty.",
        techStack: ["HTML", "Tailwind CSS", "JavaScript"],
        img: "/images/Work/HungrySnake.jpg",
        //liveLink: "https://your-hungry-snake-demo-link.com/",
        githubLink: "https://github.com/Aastha-9/Hungry-Snake"

    }    
]