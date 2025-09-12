export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Joseph Telaak",
  jobDescription: "Managing Embedded Software Engineer at Parkeze",
  about: `I am a Managing Embedded Software Engineer at Parkeze, with a BSE in Computer Engineering from UofSC. 
  I specialize in end-to-end IoT system development, from ultra-low-power embedded hardware to cloud-native backend infrastructure. My expertise spans embedded systems, network architecture, mmWave radar research, and autonomous systems development.
  I have strong experience combining robotics, embedded hardware, artificial intelligence, computer vision, IoT, and networking technologies to create innovative solutions.`,

  experience: [
    {
      name: "Parkeze - Managing Embedded Software Engineer",
      location: "Columbia, SC",
      startDate: "Dec 2024",
      endDate: "Present",
      description: [
        "- Led end-to-end development of ultra-low-power IoT parking sensors, from concept to market launch.",
        "- Architected cloud-native backend infrastructure supporting real-time data streaming to 1000+ users.",
        "- Optimized sensor hardware and firmware achieving 50% power reduction and 120% cost savings.",
        "- Built comprehensive analytics platform using React and Flask for real-time sensor performance monitoring.",
        "- Developed custom Debian distribution for LoRaWAN gateways to reduce deployment time."
      ],
    },
    {
      name: "UofSC Systems Research on X Lab - Research Assistant",
      location: "Columbia, SC",
      startDate: "Feb 2023",
      endDate: "Dec 2024",
      description: [
        "- Co-authored research on novel mmWave radar algorithms for 3D vehicle and pedestrian detection.",
        "- Secured research funding through competitive grant proposals.",
        "- Developed contactless vital sign monitoring system.",
        "- Designed data collection infrastructure supporting multiple research projects."
      ],
    },
    {
      name: "SCGSSM Autonomous Golf Cart Project - Project Lead",
      location: "Hartsville, SC",
      startDate: "Jan 2022",
      endDate: "Feb 2023, Jan 2024 - May 2024",
      description: [
        "- Transformed a legacy golf cart into an autonomous vehicle platform for research.",
        "- Engineered networked interface module enabling software control of legacy analog vehicle systems.",
        "- Designed custom Nvidia Jetson carrier board with multi-channel analog-to-digital video capture capabilities.",
        "- Implemented computer vision pipeline for obstacle detection, traffic sign recognition, and lane tracking.",
        "- Mentored 20+ students and established ongoing curriculum for autonomous systems development."
      ],
    },
    {
      name: "UofSC Cyberinfrastructure Lab - Research Assistant",
      location: "Columbia, SC",
      startDate: "Summer 2021",
      endDate: "Summer 2021",
      description: [
        "- Automated equipment configuration, throughput testing, and packet loss measurements in networks.",
        "- Created an on-switch webserver load balancer in P4.",
      ],
    }
  ],

  education: [
    {
      name: "University of South Carolina",
      location: "Columbia, SC",
      startDate: "Aug 2022",
      endDate: "Dec 2024",
      description: [
        "BSE in Computer Engineering, Leadership Distinction in Research (GPA: 3.61)", 
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
    resume: "https://telaak.dev/The1TrueJoe/resume.pdf",
    phone: "704-351-7396"
  },

  
  projects: [
    {
      title: "Self-Driving Golf Cart",
      isFeatured: true,
      thumbnail: "/assets/images/cart4.jpg",
      githubUrl: "https://github.com/autogolfcart",
      liveUrl: "https://autogolfc.art",
    },
    {
      title: "PiSwitch",
      isFeatured: true,
      description: "Created a 7-port router/network switch with custom controller, web UI, and OOB management.",
    },
    {
      title: "LLM Voice Assistant",
      isFeatured: true,
      description: "Designed a far-field mic array with XVF DSP, Zephyr on i.MXRT, ESP32 Wi-Fi NIC, OTA for all 3 major chips, and real-time audio streaming to a LLM pipeline.",
    },
    {
      title: "Agentic Audio Streamer",
      isFeatured: true,
      description: "Developed a multi-room audio streaming system using an ADAU DSP, DACs, and Raspberry Pi CM5. Integrated Spotify Connect and enabled external control via a custom API for LLMs.",
    },
    {
      title: "RISC CPU",
      isFeatured: false,
      description: "Implemented a parallelized RISC CPU with GPIO on an FPGA.",
    },
    {
      title: "Pick-n-Place Machine",
      isFeatured: false,
      description: "Designed and built a desktop PCB assembler running Marlin and OpenPNP.",
    }
  ],


  volunteering: [
    {
      name: "SCGSSM Board of Directors",
      location: "Hartsville, SC",
      startDate: "Jul 2023",
      endDate: "Present",
      description: [
        "- Alumni Association Engagement Committee Member."
      ],
    },
    {
      name: "FIRST Robotics",
      location: "Columbia, SC",
      startDate: "Jan 2022",
      endDate: "Present",
      description: [
        "- FIRST Technical Advisor, Judge, Robot Inspector.",
      ],
    },
  ],

  skills: {
    software: ["C/C++", "Python", "Java", "MATLAB", "Rust", "LUA"],
    tooling: ["Altium", "KiCad", "Quartus", "STM32 Cube", "MXUExpresso", "mmWave Studio"],
    embedded: ["Zephyr", "Yocto", "Buildroot"],
    memberships: ["IEEE Eta Kappa Nu (HKN)", "IEEE MTTS", "IEEE", "ACM", "AIAA"]
  },
};
