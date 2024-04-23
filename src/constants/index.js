import {
    backend,
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
    threejs,
    sql,
    react,
    versionControl,
    haleta,
    tria,
    letschat,
    sqlLogo,
    python
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
      title: "Web Developer",
      icon: react,
      
    },
    {
      title: "SQL",
      icon: sql,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Version Control",
      icon: versionControl
    }
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
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sqlLogo,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Haleta",
      icon: haleta,
      iconBg: "#ffffff",
      date: "Feb 2023 - Jan 2024",
      points: [
        "Development of a full-stack software application using Next.js, facilitating the screening process for prospective tutors joining the company.",
        "Contributed to ongoing meetings to enhance features and address software adjustments.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Demonstrated problem-solving skills in a fast-paced environment, iterating on solutions as needed.",
        "Demonstrated strong problem-solving skills and adaptability by addressing challenges and iterating on solutions in a dynamic and fast-paced work environment."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Tria",
      icon: tria,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Jan 2023",
      points: [
        "Contributed to a Sharepoint project aimed at optimizing workflow processes for government offices, focusing on software testing and bug fixing",
        "Actively participated in meetings to ensure the software met the requirements and standards for smooth office operations.",
        "Collaborated with the development team to identify and rectify software issues, enhancing the overall quality and usability of the product.",
   
      ],
    },
    
  ];
  

  const projects = [
    {
      name: "Let's Chat",
      description:
        "Web-based platform that allows users to chat in realtime",
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
        {
          name: "socket.io",
          color: "blue-text-gradient",
        },
        {
          name: "Daisy UI",
          color: "green-text-gradient",
        },
      ],
      image:letschat,
      source_code_link: "https://github.com/Leulmengistu/chat-app",
    },
    
  ];
  
  export { services, technologies, experiences, projects };