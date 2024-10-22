export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Joseph Telaak",
  jobDescription: "Senior Computer Engineering Major at UofSC",
  about: `I am a Senior Computer Engineering Major at UofSC, with a Leadership Distinction in Research, graduating in just 2.5 years. 
  My interests span embedded systems, network systems architecture, and robotics. I'm currently working on various projects, including developing contactless vital sign monitoring using mmWave radar and consulting on an autonomous golf cart project.
  I have strong expertise in combining robotics, embedded hardware, artificial intelligence, computer vision, IoT, and networking technologies.`,

  experience: [
    {
      name: "UofSC Systems Research on X Lab - Research Assistant",
      location: "Columbia, SC",
      startDate: "Feb 2023",
      endDate: "Ongoing",
      description: [
        "- Developed a system for contactless prediction of ECG readings using mmWave radar.",
        "- Designed and demonstrated a live system for contactless vital sign measurements.",
        "- Published research on generating 3D bounding boxes using only mmWave radar.",
        "- Created setups to collect ground truth data for radar-based projects."
      ],
    },
    {
      name: "SCGSSM Autonomous Golf Cart Project - Founder and Part-Time Consultant/Instructor",
      location: "Hartsville, SC",
      startDate: "Jan 2022",
      endDate: "Feb 2023, Jan 2024 - Present",
      description: [
        "- Converted standard golf carts to ADAS-enabled vehicles with V2V communication.",
        "- Managed funding (>$50,000) and technical design for the project.",
        "- Designed custom Nvidia Jetson carrier board and implemented a vision-based ADAS system.",
        "- Created a course around the project and served as a guest instructor."
      ],
    },
    {
      name: "UofSC Cyberinfrastructure Lab - Research Assistant",
      location: "Columbia, SC",
      startDate: "June 2021",
      endDate: "July 2021",
      description: [
        "- Developed automated tests for throughput and packet loss measurement.",
        "- Built an on-switch load balancer using P4 in real and simulated networks.",
      ],
    }
  ],

  education: [
    {
      name: "University of South Carolina",
      location: "Columbia, SC",
      startDate: "2022",
      endDate: "2024",
      description: [
        "B.S.E in Computer Engineering, Leadership Distinction in Research", 
        "- ACM Code-A-Thon winner", 
        "- Rocketry Club Avionics Team Lead"
      ],
    },
    {
      name: "South Carolina Governors School for Science and Mathematics",
      location: "Hartsville, SC",
      startDate: "2020",
      endDate: "2022",
      description: [
        "High School Diploma, Concentration in Computer Science and Mathematics", 
        "- Created ENGIN 210 Projects course", 
        "- Founded the GSSM Golf Cart Project", 
        "- Programming Captain of FTC Robotics Team", 
        "- SPARK! Computer Science and Robotics instructor", 
        "- SPARK! Python leader"
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/The1TrueJoe",
    email: "jtelaak@sc.edu",
    linkedin: "https://www.linkedin.com/in/jtelaak/",
    resume: "https://telaak.dev/The1TrueJoe/resume.pdf"
  },

  /* Commented-out projects section for now 
  projects: [
    {
      title: "Self-Driving Golf Cart",
      isFeatured: true,
      thumbnail: "/assets/images/cart4.jpg",
      githubUrl: "https://github.com/autogolfcart",
      liveUrl: "https://autogolfc.art",
    },
    {
      title: "RISC-V CPU",
      isFeatured: false,
      description: "Designed a multicore RISC-V CPU with a matrix coprocessor and custom peripherals for PWM, SPI, and I2C.",
    },
    {
      title: "Rocket Flight Computer",
      isFeatured: false,
      description: "Created a flight computer for rockets with GPS, IMU, barometer, and LoRA telemetry on a custom PCB.",
    },
    {
      title: "Pick-n-Place Machine",
      isFeatured: false,
      description: "Built an automated PCB assembly machine using Marlin and OpenPNP.",
    }
  ],
  */

  volunteering: [
    {
      name: "SCGSSM Board of Directors",
      location: "Hartsville, SC",
      startDate: "Jul 2023",
      endDate: "Ongoing",
      description: [
        "- Serving on the Alumni Association Board and the Engagement Committee."
      ],
    },
    {
      name: "FIRST Robotics",
      location: "SC",
      startDate: "Jan 2022",
      endDate: "Ongoing",
      description: [
        "- Volunteering as a FIRST Technical Advisor (FTA), helping mentor teams, field reset, and event support.",
      ],
    },
    /* Commented-out Boy Scouts section for now
    {
      name: "Scouts BSA",
      location: "Myrtle Beach, SC & Charlotte, NC",
      startDate: "2017",
      endDate: "2022",
      description: [
        "- Led numerous community service projects and held leadership roles, including Assistant Senior Patrol Leader and Webmaster."
      ],
    }
    */
  ],
};
