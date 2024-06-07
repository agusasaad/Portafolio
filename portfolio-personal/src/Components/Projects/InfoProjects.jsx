import weDevelopCard from "./../../../public/img/WeDevelop/CardWeDevelop.png";
import weDevelopModal from "./../../../public/img/WeDevelop/headerModalWeDevelop.png";
import weCapture_1 from "./../../../public/img/WeDevelop/capture_1.png";
import weCapture_2 from "./../../../public/img/WeDevelop/capture_2.png";
import weCapture_3 from "./../../../public/img/WeDevelop/capture_3.png";
import weCapture_4 from "./../../../public/img/WeDevelop/capture_4.png";
import weCapture_5 from "./../../../public/img/WeDevelop/capture_5.png";


import mawidaCard from "./../../../public/img/PosadaMawida/mawidaCard.png";
import posadaModal from "./../../../public/img/PosadaMawida/headerModalPosada.jpg";
import PosadaCapture_1 from "./../../../public/img/PosadaMawida/capture_1.jpg";
import PosadaCapture_2 from "./../../../public/img/PosadaMawida/capture_2.jpg";
import PosadaCapture_3 from "./../../../public/img/PosadaMawida/capture_3.jpg";


import driverCard from "./../../../public/img/Drivers/DriverCard.png";
import driversModal from "./../../../public/img/Drivers/headerModalDriver.jpg";
import driversCapture_1 from "./../../../public/img/Drivers/Capture_1.jpg";
import driversCapture_2 from "./../../../public/img/Drivers/Capture_2.jpg";
import driversCapture_3 from "./../../../public/img/Drivers/Capture_3.jpg";
import driversCapture_4 from "./../../../public/img/Drivers/Capture_4.jpg";
import driversCapture_5 from "./../../../public/img/Drivers/Capture_5.jpg";

import portfolioModal from "./../../../public/img/headerModalPortfolio.png";
import portfolioCard from "./../../../public/img/cardPortfolio.png";


export const Projects = [
  {
    name: "Personal Portfolio",
    cargo: "Front end developer",
    year: "Jun 2024",
    imageCard: portfolioCard,
    imageModal: portfolioModal,
    ImageCarrucel: [
      { img: driversCapture_1 },
      { img: driversCapture_2 },
      { img: driversCapture_3 },
      { img: driversCapture_4 },
      { img: driversCapture_5 }
    ],
    parrafo:
      "Within this portfolio, you'll find a carefully curated selection of my most representative works. Each project has been an opportunity to apply my knowledge and skills creatively and effectively. Each project tells a unique story about my approach, problem-solving abilities, and attention to detail.",
    parrafoDos:
      "Throughout the development of my portfolio, I spearheaded the design and functionality implementation using React and JavaScript, incorporating libraries like Chakra UI and GSAP for an engaging user interface and dynamic animations. I focused on responsive layout, performance optimization, and effective content presentation to showcase my skills and projects clearly and concisely.",
    technolgies: "Javascript · React · ChakraUi · GSAP",
    repository: "https://github.com/agusasaad/Portafolio",
    web: "https://portfolio-personal-omega.vercel.app/",
  },
  {
    name: "Posada Mawida",
    cargo: "Front end developer",
    year: "Mar 2024",
    imageCard:mawidaCard,
    imageModal: posadaModal,
    ImageCarrucel: [
      { img: PosadaCapture_1 },
      { img: PosadaCapture_2 },
      { img: PosadaCapture_3 }
    ],
    parrafo:
      "I collaborated with my team on a freelance project to develop the website for a restaurant. Our focus was on creating an attractive and functional platform that would comprehensively showcase the inn's menu, along with relevant information about the venue. We worked closely with the client to ensure that the website accurately reflects the atmosphere and style of the establishment.",
    parrafoDos:
      "I developed a dynamic and highly interactive user interface using React JS and JavaScript, crafting custom components with Chakra UI to enhance both visual appeal and functionality. Additionally, I ensured the page was fully adaptable to various devices, thereby guaranteeing an optimal experience for all users.",
    technolgies:
      "Javascript · ReactJs · chakraUi · Redux · Node.js · Express · MongoDB",
    repository: "https://github.com/Freetzen/Menu-Posada-Mawida",
    web: "https://menu-posada-mawida.vercel.app/",
  },
  {
    name: "We Develop",
    cargo: "Front end developer",
    year: "Abr 2024",
    imageCard:weDevelopCard,
    imageModal: weDevelopModal,
    ImageCarrucel: [
      { img: weCapture_1 },
      { img: weCapture_2 },
      { img: weCapture_3 },
      { img: weCapture_4 },
      { img: weCapture_5 }
    ],
    parrafo:
      "We Develop is a platform that offers quotes for websites based on the client's needs, with the options varying from simple to customized. The website in turn allows the users to fill in the questionnaires to customize their site according to their liking.",
    parrafoDos:
      "As a front End Developer, my contribution in this project was the design and styling of the We Develop website. From the initial conception to the final implementation, I focused on creating an attractive and functional interface that reflected the brand identity and provided an exceptional user experience.",
    technolgies:
      "Javascript · ReactJs · Redux · NodeJs · Express · MongoDB · Mercado Pago · Aut0",
    repository: "https://github.com/Freetzen/WeDevelop",
    web: "https://wedevelop.vercel.app/",
  },
  {
    name: "Drivers",
    cargo: "Full stack developer",
    year: "Dic 2023", 
    imageCard:driverCard,
    imageModal: driversModal,
    ImageCarrucel: [
      { img: driversCapture_1 },
      { img: driversCapture_2 },
      { img: driversCapture_3 },
      { img: driversCapture_4 },
      { img: driversCapture_5 }
    ],
    parrafo:
      "My project DRIVERS is a website dedicated to Formula 1 drivers, where users can explore detailed profiles of drivers, including statistics and biographies. The page features filters for efficient searching and the ability to create personalized driver profiles.",
    parrafoDos:
      "As a Full Stack developer I used React JS along with JavaScript to build an interactive user interface on the frontend. The integration of Redux ensured efficient management of the application state. On the backend, I implemented multiple endpoints using Express and Node.js to access updated data from the drivers' API. This data was stored in a PostgreSQL database, where I utilized Sequelize as an ORM to facilitate interaction and manipulation of the information.",
      technolgies:
      "Javascript · React · Redux · Node.js · Express · Postgresql · Sequelize",
      repository: "https://github.com/agusasaad/Drivers",
    },
    
    
    
];
