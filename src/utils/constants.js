// Skills Section Logo's
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import nextjsLogo from '../assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import Cluster from "../assets/tech_logo/cluster-db.png";
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import cLogo from '../assets/tech_logo/c.png';

import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import mcLogo from '../assets/tech_logo/mc.png';

import vercelLogo from '../assets/tech_logo/vercel.png';
import AI from "../assets/tech_logo/AI-logo.jfif";


// Experience Section Logo's
import webverseLogo from '../assets/company_logo/webverse_logo.png';
import agcLogo from '../assets/company_logo/agc_logo.png';
import newtonschoolLogo from '../assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from '../assets/education_logo/AKTU-img2.png';
import bsaLogo from '../assets/education_logo/LU-img.jpg';
import vpsLogo from '../assets/education_logo/up-img.jpg';

// Project Section Logo's
import projectLogo1 from '../assets/Project_logo/project1.jpeg';
import projectLogo2 from '../assets/Project_logo/project2.jpeg';
import projectLogo3 from '../assets/Project_logo/project3.jpeg';
import projectLogo4 from '../assets/Project_logo/project4.jpeg';
import projectLogo5 from '../assets/Project_logo/project5.jpeg';
import projectLogo6 from '../assets/Project_logo/project6.jpeg';
import projectLogo7 from '../assets/Project_logo/project7.jpeg';
import projectLogo8 from '../assets/Project_logo/project8.jpeg';
import projectLogo9 from '../assets/Project_logo/project9.jpeg';



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "JavaScript (ES6+)", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Redux Toolkit", logo: reduxLogo },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Socket.IO", logo: nodejsLogo },
      { name: "JWT Auth", logo: expressjsLogo },
      { name: "Cloudinary", logo: AI },
      { name: "RESTful APIs", logo: AI },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Render", logo: vercelLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Docker (Learning)", logo: mcLogo },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Next.js", logo: nextjsLogo },
      { name: "React Native", logo: reactjsLogo },
      { name: "Docker", logo: mcLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "MERN Stack Developer",
    company: "Axsem Softwares Pvt. Ltd.",
    date: "Nov 2025 - Present",
    desc: "Architecting and developing scalable full-stack web applications using the MERN stack. Building robust RESTful APIs, responsive admin dashboards, and implementing secure JWT-based authentication. Focusing on performance optimization and writing clean, maintainable code.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "REST APIs",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Backend Developer",
    company: "Freelance / Contract",
    date: "Jan 2025 - Jun 2025",
    desc: "Developing secure and highly scalable backend RESTful API services using Node.js and Express.js. Designing efficient MongoDB schemas, implementing role-based access control, and ensuring seamless API integrations. Managing server deployment and optimizing data queries.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Postman",
      "Socket.IO",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Developer",
    company: "Freelance / Contract",
    date: "Aug 2024 - Jan 2025",
    desc: "Designing and implementing modern, user-centric web interfaces using React.js and Tailwind CSS. Building highly reusable UI components, integrating complex state management solutions, and ensuring perfect cross-browser compatibility. Delivering exceptional user flows.",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Dr. A. P. J. Abdul Kalam Technical University (AKTU)",
    date: "2026",
    grade: "CGPA: 7.34",
    desc: "Currently pursuing Master of Computer Applications (MCA) from Dr. A.P.J. Abdul Kalam Technical University. Focusing on advanced topics in software development, database management, web technologies, and full-stack development. Gaining expertise in modern frameworks and tools to build scalable and efficient applications.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Lucknow University",
    date: "2024",
    grade: "72%",
    desc: "Completed Bachelor of Computer Applications (BCA) from Lucknow University with a strong foundation in programming, data structures, algorithms, web development, and database management. Developed multiple projects during the course that enhanced practical knowledge and problem-solving skills.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "UP Board",
    date: "2021",
    grade: "81%",
    desc: "Completed Intermediate education from UP Board with a focus on Science stream. Built a strong foundation in Physics, Chemistry, Mathematics, and Computer Science, which laid the groundwork for pursuing higher education in computer applications.",
    degree: "Intermediate - UP Board",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "UP Board",
    date: "2019",
    grade: "77.6%",
    desc: "Completed High School education from UP Board with a focus on Science and Computer Applications. Developed early interest in programming and technology, which motivated the pursuit of a career in software development.",
    degree: "High School - UP Board",
  },
];

export const projects = [
  {
    id: 0,
    title: "School ERP",
    description:
      "A full-stack School ERP platform designed to centralize academic, administrative and teacher-management workflows through a modern web-based system.",
    image: projectLogo1,
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Cloudinary"],
  },
  {
    id: 1,
    title: "AutoAttendly",
    description:
      "An attendance and teacher-management platform with role-based authentication, teacher workflows, quiz functionality and administrative controls.",
    image: projectLogo2,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "JWT"],
  },
  {
    id: 2,
    title: "BazaarHub (E-Commerce)",
    description:
      "A full-stack e-commerce application implementing real-world product, cart, authentication, order and administration workflows.",
    image: projectLogo3,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Cloudinary", "Tailwind"],
  },
  {
    id: 3,
    title: "Mahila Chetna (NGO Website)",
    description:
      "A full-stack NGO platform designed to present organizational information, activities and dynamic content through a responsive web experience.",
    image: projectLogo4,
    tags: ["MERN Stack", "Frontend", "Backend", "Admin Panel"],
  },
  {
    id: 4,
    title: "Sanskriti Sanskar Pathshala (NGO)",
    description:
      "An educational NGO website featuring dynamic pages, content management and a highly responsive user interface.",
    image: projectLogo5,
    tags: ["MERN Stack", "Frontend", "Backend", "Dynamic Pages"],
  },
  {
    id: 5,
    title: "Grocery Platform",
    description:
      "A responsive e-commerce frontend with detailed product listings, category filtering, and cart functionality.",
    image: projectLogo6,
    tags: ["React JS", "Tailwind CSS", "Redux Toolkit", "Responsive UI"],
  },
];
