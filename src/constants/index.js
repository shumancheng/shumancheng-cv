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
    carrent,
    jobit,
    tripguide,
    threejs,
    fau,
    upm,
    pisa,
    ncu,
    fhooe,
    shs,
    lenovo,
    catcher,
  } from "../assets/assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "edu",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const education = [
    {
      title: "Master's degree | International Information Systems",
      company_name: "University of Erlangen-Nuremberg  (Erlangen & Nürnberg, Germany)",
      icon: fau,
      iconBg: "#383E56",
      date: "Sep 2022 - Present",
      points: [
        "Human Computer Interaction:  User engagement in digital environments",
        "Conceptual Modelling: Implementation of SQL-databases using ER diagram in UML ",
        "Natural Language Processing: Python based classification of climate change impacts in annual reports.",
        "Designing Gamified Systems: Development of a gamified mobile app using Unity and C#.",
      ],
    },
    {
      title: "Summer School | Artificial Intelligence",
      company_name: "Technical University of Madrid (Madrid, Spain)",
      icon: upm,
      iconBg: "#E6DEDD",
      date: "July 2024 - July 2024",
      points: [
        "Full scholarship provided by the EELISA FAU",
        "Artificial Intelligence and Deep Learning",
        "Computer vision with deep learning",
        "Natural language processing (NLP) with deep learning",
      ],
    },
    {
      title: "Seasonal School | Data Strategy",
      company_name: "Sant Anna Pisa University (Pisa, Italy)",
      icon: pisa,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Mar 2024",
      points: [
        "Full scholarship provided by the EELISA FAU",
        "AI-based and robotics applications to restore functionalities and reduce the impairments of personal injuries",
        "Focused on digitalisation and predictive tools to assess pecuniary and non-pecuniary losses",
        "Case studies: new risk management strategies for digital scenarios",
      ],
    },
    {
      title: "Bachelor's degree | Business Administration",
      company_name: "National Central University (Taoyuan, Taiwan)",
      icon: ncu,
      iconBg: "#E6DEDD",
      date: "Sep 2016 - Jun 2020",
      points: [
        "Programming for Business Analytics: Performed statistical analyses with SAS",
        "ERP System Administration: Operated SAP S/4HANA and Mini SAP ",
        "Statistics: Data processing with R",
      ],
    },
    {
      title: "Exchange Student | International Logistics Management",
      company_name: "University of Applied Sciences Upper Austria (Steyr, Austria)",
      icon: fhooe,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Feb 2019",
      points: [
        "Marketed Taiwan to foreigners with different approaches",
        "Cross-Cultural Sales and Management",      ],
    },
  ];
  
  const experiences = [
    {
      title: "Data Analytics | Working Student",
      company_name: "Siemens Healthineers (Erlangen, Germany)",
      icon: shs,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Conducting data analysis, including data cleaning and validation, utilizing advanced Excel techniques",
        "Synthesized and presented data insights through PowerPoint presentations",
      ],
    },
    {
      title: "R&D Project Manager",
      company_name: "Lenovo Group (Taipei, Taiwan)",
      icon: lenovo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Headed cross-functional teams (15 members) across 3 countries",
        "Presented project status and potential difficulties with statistical information to director in weekly meeting",
        "Analyzed and summarized data with Excel PivotTable (50,000+ data) for customer",
      ],
    },
    {
      title: "Quality Insurance | Internship",
      company_name: "Catcher Technology Co., Ltd. (Tainan, Taiwan)",
      icon: catcher,
      iconBg: "#E6DEDD",
      date: "Jul 2019 - Sep 2019",
      points: [
        "Facilitated cross-departmental communications, balancing varying opinions and values",
        "Wrote risk assessments for factory related instruments; figured out how to improve and avoid the risks",
        "Using ISO specifications established product reliability standards to meet customers' requirements within a given confidence interval",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, education, experiences, projects };