import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ecommerce,
  prizewheel,
  blogsite,
  threejs,
  bue,
  corecxe,
  insite,
  instatus,
  django,
  py,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Consultant",
    icon: creator,
  },
  {
    title: "Oracle Integration Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "python",
    icon: py,
  },
];

const experiences = [
  {
    title: "React.js Developer - Hybrid",
    company_name: "British university in Egypt",
    icon: bue,
    iconBg: "#383E56",
    date: "November 2019 - September 2020",
    points: [
      "Developing and maintaining web applications like BUE Claims app using React.js and wordpress.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Consultant - Hybrid",
    company_name: "Core Experts Consulting ",
    icon: corecxe,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Jan 2022 ",
    points: [
      "Orchestrated seamless Business-to-Business (B2B) integration using Oracle Integration Cloud (OIC), fostering cohesive connections between ERPs (SaaS or custom apps) and databases.",
      "Using Oracle BI Publisher for efficient report generation, ensuring timely access to critical insights and data-driven decision-making.",
      "Applied comprehensive expertise in Oracle and MySQL databases, constructing robust structures, tables, views, triggers, and functions for optimal data management.",
      "Engaged in full-stack web application development using Python and Django, showcasing a commitment to delivering scalable and efficient solutions.",
    ],
  },
  {
    title: "Full Stack Engineer - Remote",
    company_name: "Instatus",
    icon: instatus,
    iconBg: "#383E56",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Focused primarily on backend development, showcasing proficiency in JavaScript, TypeScript, and a commitment to object-oriented programming (OOP) principles using Node.js, Express.js, Prisma, and GraphQL.",
      "Proficient in frontend development using Next.js, React.js. Integrated tools like SWR, Axios, Tailwind CSS, and Bootstrap for streamlined development.",
      "Solely contributed to the development of the Instatus web app, showcasing dedication to delivering high-quality, end-to-end solutions.",
    ],
  },
  {
    title: "Full Stack Engineer - Remote",
    company_name: "4insite",
    icon: insite,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Working in an agile enviroment as a Full Stack Engineer with expertise in Django Rest Framework for robust backend development utilizing tools such as Celery, Boto3 and more for enhanced functionality.",
      "Proficient in database management, specializing in PostgreSQL, and leveraging Redis for effective data caching.",
      "Proficient in developing dynamic user interfaces using React.js and TypeScript, implementing styling with Sass and Tailwind CSS",
      "Dedicated to developing new features, optimizing performance, and resolving bugs. Participating in code reviews and providing constructive feedback to other developers",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce APIs",
    description:
      "The E-commerce API project is a backend application built using Node.js that serves as the backbone for an e-commerce platform. It provides endpoints for managing users, products, and orders. The project utilizes Docker to set up a PostgreSQL database, ensuring ease of deployment and scalability.",
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Postgres DB",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/StevenJohnss/Storefront-App",
  },
  {
    name: "PrizeHub",
    description:
      "This project offers User and Prize Management through a web application built using Django (DRF). It offers a collection of APIs for handling user registration, authentication, prize management, and password reset functionalities to streamline user interactions and administrative tasks.",
    tags: [
      {
        name: "Django Rest Framework",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres DB",
        color: "green-text-gradient",
      },
    ],
    image: prizewheel,
    source_code_link: "https://github.com/StevenJohnss/PrizeWheelProject",
  },
  {
    name: "Blog Website",
    description:
      "This project is a demo front-end blog site developed using React JS. It is designed to provide a seamless blogging experience, allowing users to effortlessly log in, create, manage and filter their blog posts. The application leverages libraries like Material-UI and React Router, for better user experience.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blogsite,
    source_code_link: "https://dazzling-aryabhata-ea34f7.netlify.app/",
    source_image: reactjs,
  },
];

export { services, technologies, experiences, testimonials, projects };
