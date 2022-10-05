export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Joseph Telaak",
  jobDescription: "Embedded Systems Engineer",
  about: `I'm an embedded systems engineering and systems architect. I am also a computer engineering major at the University of South Carolina.
  I enjoy designing robotics control systems, IoT gadgets, and building software systems. I especially enjoy combing all three into projects whenever I can, just like in my autonomous golf cart fleet project.`,

  experience: [
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
        "High School Diploma", "Concentration in Computer Science and Mathematics"
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
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/autogolfcart",
      liveUrl: "https://autogolfc.art",
    },
  ],
};
