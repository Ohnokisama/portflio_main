import WebImage1 from '../../assets/project_images/PHVWTZ1.jpg'
import GDImage1 from '../../assets/project_images/Naruto Wallpaper.png'
import PDImage1 from '../../assets/project_images/PHVWTZ2.jpg'
import NetHub from "../../assets/project_images/nethub.png";
import Jaypegs from "../../assets/project_images/jaypegs.png";
import Chest from "../../assets/project_images/chest.png";
import Steady from "../../assets/project_images/steadysteps.png";
import MUI from "../../assets/project_images/mui.png";
import Roeyal from "../../assets/project_images/roeyal.png";
import CoreMed from "../../assets/project_images/coremed.png";
import Timmie from "../../assets/project_images/timmie.png";
import Bank from "../../assets/project_images/1bank.png";

// const projects = [
//   {
//     image: GDImage1,
//     title: 'Greenhause Concepts',
//     projectLink: '#',
//     category: 'Graphic Design'
//   },
//   {
//     image: WebImage1,
//     title: 'Oathplace Prosthetics',
//     projectLink: 'https://oathplaceprosthetics.com.ng',
//     category: 'Web Development'
//   },
//   {
//     image: PDImage1,
//     title: 'OneBank',
//     projectLink: '#',
//     category: 'Product Design'
//   }
// ]

const projects = [
  {
    id: 1,
    image: Jaypegs,
    title: "Jaypegs",
    projectLink: "https://jaypegs.netlify.app",
    category: "web-development",
    tags: ["react", "api"],
    description:
      "Image platform with search, save, and download using Pixabay API",
  },
  {
    id: 2,
    image: NetHub,
    title: "Jefflix",
    projectLink: "https://jefflix.netlify.app",
    category: "web-development",
    tags: ["react", "api"],
    description:
      "Movie discovery app with dynamic UI and external API integration",
  },
  {
    id: 3,
    image: Roeyal,
    title: "Roeyal",
    projectLink: "https://roeyal.vercel.app",
    category: "web-development",
    tags: ["nextjs", "ecommerce"],
    description:
      "E-commerce platform with scalable frontend architecture (ongoing)",
  },
  {
    id: 4,
    image: CoreMed,
    title: "CoreMed",
    projectLink: "https://coremed.vercel.app",
    category: "web-development",
    tags: ["nextjs", "healthcare"],
    description:
      "Healthcare platform UI with plans for full hospital management system",
  },
  {
    id: 5,
    image: Steady,
    title: "SteadySteps Landing Page",
    projectLink: "https://steadysteps.app",
    category: "web-development",
    tags: ["landing-page"],
    description: "Responsive landing page for SteadySteps platform",
  },
  {
    id: 6,
    image: Timmie,
    title: "Timmie Travels",
    projectLink: "https://timmie-travels.vercel.app",
    category: "web-development",
    tags: ["landing-page"],
    description: "Travel agency website with contact and booking interface",
  },
  {
    id: 7,
    image: Bank,
    title: "1Bank",
    projectLink:
      "https://www.figma.com/proto/gcQN167Wg6hjNRJZmHNh1C/1Bank?node-id=0-1&t=xechjy4ELoeqkbYT-1",
    category: "product-design",
    tags: ["landing-page"],
    description: "Travel agency website with contact and booking interface",
  },
];

export default projects;