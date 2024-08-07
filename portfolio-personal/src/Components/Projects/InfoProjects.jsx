import portfolioModal from "./../../../public/img/Portfolio/headerModalPortfolio.png";
import portfolioCard from "./../../../public/img/Portfolio/cardPortfolio.png";
import portfolioCapture_1 from "./../../../public/img/Portfolio/imageRepresentPortfolio.jpg";

import mawidaCard from "./../../../public/img/PosadaMawida/mawidaCard.png";
import posadaModal from "./../../../public/img/PosadaMawida/headerModalPosada.jpg";
import PosadaCapture_1 from "./../../../public/img/PosadaMawida/capture_1.jpg";

import driverCard from "./../../../public/img/Drivers/DriverCard.png";
import driversModal from "./../../../public/img/Drivers/headerModalDriver.jpg";
import driversCapture_1 from "./../../../public/img/Drivers/Capture_1.jpg";

import weDevelopCard from "./../../../public/img/WeDevelop/CardWeDevelop.png";
import weDevelopModal from "./../../../public/img/WeDevelop/headerModalWeDevelop.png";
import weCapture_1 from "./../../../public/img/WeDevelop/capture_1.png";

export const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    cargo: "Front end developer",
    date: "Jun 2024",
    imageCard: portfolioCard,
    imageModal: portfolioModal,
    parrafo:
      "Within this portfolio, you'll find a carefully curated selection of my most representative works. Each project has been an opportunity to apply my knowledge and skills creatively and effectively. Each project tells a unique story about my approach, problem-solving abilities, and attention to detail.",
    parrafoDos:
      "Throughout the development of my portfolio, I spearheaded the design and functionality implementation using React and JavaScript, incorporating libraries like Chakra UI and GSAP for an engaging user interface and dynamic animations. I focused on responsive layout, performance optimization, and effective content presentation to showcase my skills and projects clearly and concisely.",
    technologies: "Javascript · React · ChakraUi · GSAP",
    repository: "https://github.com/agusasaad/Portafolio",
    web: "https://portfolio-personal-omega.vercel.app/",
    img: portfolioCapture_1,
  },
  {
    id: 2,
    name: "Posada Mawida",
    cargo: "Front end developer",
    date: "Feb 2024",
    imageCard: mawidaCard,
    imageModal: posadaModal,
    parrafo:
      "I collaborated with my team on a freelance project to develop the website for a restaurant. Our focus was on creating an attractive and functional platform that would comprehensively showcase the inn's menu, along with relevant information about the venue. We worked closely with the client to ensure that the website accurately reflects the atmosphere and style of the establishment.",
    parrafoDos:
      "I developed a dynamic and highly interactive user interface using React JS and JavaScript, crafting custom components with Chakra UI to enhance both visual appeal and functionality. Additionally, I ensured the page was fully adaptable to various devices, thereby guaranteeing an optimal experience for all users.",
    technologies:
      "Javascript · ReactJs · chakraUi · Redux · Node.js · Express · MongoDB",
    repository: "https://github.com/Freetzen/Menu-Posada-Mawida",
    web: "https://menu-posada-mawida.vercel.app/",
    img: PosadaCapture_1,
  },
  {
    id: 3,
    name: "We Develop",
    cargo: "Front end developer",
    date: "Jan 2024",
    imageCard: weDevelopCard,
    imageModal: weDevelopModal,
    parrafo:
      "We Develop is a platform that offers quotes for websites based on the client's needs, with the options varying from simple to customized. The website in turn allows the users to fill in the questionnaires to customize their site according to their liking.",
    parrafoDos:
      "As a front End Developer, my contribution in this project was the design and styling of the We Develop website. From the initial conception to the final implementation, I focused on creating an attractive and functional interface that reflected the brand identity and provided an exceptional user experience.",
    technologies:
      "Javascript · ReactJs · Redux · NodeJs · Express · MongoDB · Mercado Pago · Aut0",
    repository: "https://github.com/Freetzen/WeDevelop",
    web: "https://wedevelop.vercel.app/",
    img: weCapture_1,
  },
  {
    id: 4,
    name: "Drivers",
    cargo: "Full stack developer",
    date: "Dec 2024",
    imageCard: driverCard,
    imageModal: driversModal,
    parrafo:
      "My project DRIVERS is a website dedicated to Formula 1 drivers, where users can explore detailed profiles of drivers, including statistics and biographies. The page features filters for efficient searching and the ability to create personalized driver profiles.",
    parrafoDos:
      "As a Full Stack developer I used React JS along with JavaScript to build an interactive user interface on the frontend. The integration of Redux ensured efficient management of the application state. On the backend, I implemented multiple endpoints using Express and Node.js to access updated data from the drivers' API. This data was stored in a PostgreSQL database, where I utilized Sequelize as an ORM to facilitate interaction and manipulation of the information.",
    technologies:
      "Javascript · React · Redux · Node.js · Express · Postgresql · Sequelize",
    repository: "https://github.com/agusasaad/Drivers",
    img: driversCapture_1,
  },
];
