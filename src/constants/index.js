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
    fontanQuest,
    miniMeco,
    NutriMate,
    fraunhoferIcon,
    qdacityIcon,
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "AR / VR Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
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
        "Pattern Recognition: Implementation of machine learning algorithms",
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
    /*
    {
      title: "Augmented Reality for Computed Tomography | Internship",
      company_name: "Fraunhofer IIS (Passau, Germany)",
      icon: fraunhoferIcon,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - present",
      points: [
        "Design and development of augmented reality applications for data visualization and analysis",
        "Implement software modules in the area of augmented reality based visualization and analysis of computed tomography data",
      ],
    },
    */
    {
      title: "Interview Transcribing | Master Thesis Student",
      company_name: "QDAcity GmbH (Erlangen, Germany)",
      icon: qdacityIcon,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - present",
      points: [
        "Enhance user experience by implementing new features and fixing bugs",
        "Improve the performance of the application by optimizing the code",
      ],
    },
    {
      title: "Data Analytics | Working Student",
      company_name: "Siemens Healthineers (Erlangen, Germany)",
      icon: shs,
      iconBg: "#E6DEDD",
      date: "May 2023 - Oct 2024",
      points: [
        "Utilized Excel and Power Query to streamline data tracking and analysis, ensuring accurate and actionable insights",
        "Conducted data analysis, including data cleaning and validation",
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
      name: "Mini-Meco",
      description:
        "Developed a Node.js application with a React-based interface and SQLite database to support agile project management. This tool serves as an educational example in advanced programming courses at FAU Erlangen-Nürnberg",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: miniMeco,
      source_code_link: "https://github.com/shumancheng/Mini-Meco",
    },
    {
      name: "Fontan Quest",
      description:
        "Created a mobile game using Unity and C# to motivate post-Fontan surgery children to engage in physical activity, integrating Garmin Smartwatches for real-time feedback. ",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "unity",
          color: "pink-text-gradient",
        },
      ],
      image: fontanQuest,
      source_code_link: "https://github.com/Salazifel/FontanQuest",
    },
    {
      name: "NutriMate",
      description:
        "Built an AI-powered mobile app using React Native, Fastify, and MongoDB to simplify nutrition tracking and provide personalized health advice, particularly for users with specific dietary needs",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: NutriMate,
      source_code_link: "https://github.com/rmotafreitas/hackupc2324",
    },
  ];
  
  export { services, technologies, education, experiences, projects };