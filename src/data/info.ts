export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Joseph Telaak",
  jobDescription: "Computer Engineering Major at UofSC",
  about: `My interests include embedded systems and network systems architecture. 
  I am currently working on multiple projects, but I am primarily working on my self driving golf cart.
  Most of my projects involve combining robotics, embedded hardware, artificial intelligence, computer vision, IoT, and networking.`,

  experience: [
    {
      name: "GSSM Smart Golf Cart - Founder and Lead Engineer",
      location: "Hartsville, SC",
      startDate: "Jan 2022",
      endDate: "Jun 2022",
      description: [
        "- Lead a team of 6 students in developing both hardware and software for a fleet of self driving golf carts",
        "- We received over $50,000 in grants from Google, SC Department of Education, and the GSSM Foundation",
        "- I designed the control system hardware and software",
      ],
    },
    {
      name: "UofSC Cyberinfrastructure Lab - Research Intern",
      location: "Columbia, SC",
      startDate: "June 2021",
      endDate: "July 2021",
      description: [
        "- Researched applications of P4 switches.",
        "- Developed a suite of automated tests for throughput and packet loss measurements.",
      ],
    },
    
  ],

  education: [
    {
      name: "University of South Carolina",
      location: "Columbia, SC",
      startDate: "2022",
      endDate: "2024",
      description: [
        "B.S.E in Computer Engineering", "Minor in Mathematics and Physics",
      ],
    },
    {
      name: "South Carolina Governors School for Science and Mathematics",
      location: "Hartsville, SC",
      startDate: "2020",
      endDate: "2022",
      description: [
        "High School Diploma", "Concentration in Computer Science and Mathematics", "Developed ENGIN 210 Projects course in catalog", "Founded the GSSM Golf Cart Project"
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/The1TrueJoe",
    email: "jtelaak@sc.edu",
    linkedin: "https://www.linkedin.com/in/jtelaak/",
    resume: "/assets/docs/resume.pdf"
  },

  projects: [
    {
      title: "Self-Driving Golf Cart",
      isFeatured: true,
      thumbnail: "/assets/images/cart4.jpg",
      githubUrl: "https://github.com/autogolfcart",
      liveUrl: "https://autogolfc.art",
    },
    /*{
      title: "User Automation Botnet",
      isFeatured: true,
      thumbnail: "/assets/images/server.jpeg",
      githubUrl: "https://github.com/da2botnet",
      liveUrl: "https://da2.telaak.dev",
    },
    {
      title: "8 Bit Computer",
      isFeatured: true,
      thumbnail: "/assets/images/8bit.jpeg",
      githubUrl: "https://github.com/The1TrueJoe/8Bit-Computer",
      liveUrl: "https://telaak.dev/8Bit-Computer/",
    },
    {
      title: "ROV",
      isFeatured: true,
      thumbnail: "/assets/images/gssm.jpg",
      githubUrl: "https://github.com/The1TrueJoe/ROV",
      liveUrl: "https://telaak.dev/ROV/",
    },
    */
    {
      title: "GSSM Schoolwork",
      isFeatured: true,
      thumbnail: "/assets/images/gssm.jpg",
      githubUrl: "https://github.com/The1TrueJoe/SCGSSM-Assignments",
      liveUrl: "https://gssm.telaak.dev/",
    },
    /*
    {
      title: "UofSC Schoolwork",
      isFeatured: true,
      thumbnail: "/assets/images/gssm.jpg",
      githubUrl: "https://github.com/The1TrueJoe/UofSC-Assignments",
      liveUrl: "https://usc.telaak.dev/",
    },
    */
    
  ],
};
