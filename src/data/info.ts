export const info = {
  baseUrl: "https://telaak.dev",
  name: "Joseph Telaak",
  jobDescription: "Chief Executive Officer at Parkeze",
  about: `CEO of Parkeze. Computer Engineering graduate from UofSC. I build things from PCB design and bare-metal firmware all the way up to distributed backend systems.`,

  experience: [
    {
      name: "Parkeze - Chief Executive Officer",
      location: "Columbia, SC",
      startDate: "Dec 2024",
      endDate: "Present",
      // image: "/assets/images/parkeze.jpg",
      tags: ["IoT", "LoRaWAN", "Zephyr RTOS", "React", "GraphQL", "TimescaleDB", "Kafka", "Kubernetes", "Keycloak", "PCB Design"],
      description: [
        "- Led end-to-end development of ultra-low-power IoT parking sensors, from concept to market launch.",
        "- Architected cloud-native backend infrastructure supporting real-time data streaming to 1000+ users.",
        "- Optimized sensor hardware and firmware achieving 120% power reduction and 300% cost savings.",
        "- Built comprehensive analytics platform using React, GraphQL, and TimescaleDB for data insights.",
        "- Implemented a highly extensible event ingestion and emission pipeline using Kafka to support 3rd-party systems.",
        "- Developed several extensions for Keycloak's open-source IAM to support our unique authorization requirements.",
        "- Created a CI/CD pipeline to perform end-to-end integration testing and blue/green deployment on Kubernetes.",
        "- Ported the LoRaWAN gateway stack to Zephyr RTOS with custom high-availability features for our gateways.",
        "- Involved in all aspects of the business, including fundraising, sales, marketing, and customer support."
      ],
    },
    {
      name: "UofSC Systems Research on X Lab - Research Assistant",
      location: "Columbia, SC",
      startDate: "Feb 2023",
      endDate: "Dec 2024",
      // image: "/assets/images/srx.jpg",
      tags: ["mmWave Radar", "Python", "MATLAB", "Signal Processing", "Embedded C"],
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
      // image: "/assets/images/cart4.jpg",
      tags: ["Nvidia Jetson", "ROS", "Computer Vision", "PCB Design", "C++", "Python", "Mentorship"],
      description: [
        "- Transformed a standard golf cart into an autonomous vehicle platform for research.",
        "- Engineered a complete ADAS control module for the golf cart's steering, throttle, and braking systems.",
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
      tags: ["P4", "Network Engineering", "Python"],
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
      tags: ["Computer Engineering", "BSE", "Research Distinction"],
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
      tags: ["Computer Science", "Mathematics", "Robotics"],
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
    email: "jttelaak04@gmail.com",
    linkedin: "https://www.linkedin.com/in/jtelaak/",
    resume: "https://telaak.dev/The1TrueJoe/resume.pdf",
    phone: "704-351-7396"
  },

  
  projects: [
    {
      title: "Self-Driving Golf Cart",
      isFeatured: true,
      // thumbnail: "/assets/images/cart4.jpg",
      githubUrl: "https://github.com/autogolfcart",
      // liveUrl: "https://autogolfc.art",
      description: "Transformed a standard golf cart into a full autonomous vehicle platform. Custom Nvidia Jetson carrier board, ADAS control module, and a CV pipeline for lane tracking, obstacle detection, and sign recognition.",
      stack: ["C++", "Python", "ROS", "Nvidia Jetson", "OpenCV", "Altium"],
      category: "Robotics",
      year: "2022",
      status: "shipped",
    },
    {
      title: "PiSwitch",
      isFeatured: true,
      description: "7-port managed network switch built around a Raspberry Pi CM4. Custom controller board, web UI for VLAN management, and out-of-band management over a dedicated serial console.",
      stack: ["Python", "React", "KiCad", "Linux", "iptables"],
      category: "Hardware",
      year: "2023",
      status: "shipped",
    },
    {
      title: "LLM Voice Assistant",
      isFeatured: true,
      description: "Far-field mic array with XMOS DSP for beamforming and noise cancellation. Zephyr RTOS on i.MXRT as the main controller, ESP32 as Wi-Fi NIC, OTA firmware for all 3 chips, and real-time audio streaming to an LLM pipeline.",
      stack: ["Zephyr RTOS", "C", "XMOS", "ESP-IDF", "Python", "KiCad"],
      category: "Embedded",
      year: "2024",
      status: "wip",
    },
    {
      title: "Agentic Audio Streamer",
      isFeatured: true,
      description: "Multi-room audio system using a SigmaDSP for DSP, PCM DACs, and a Raspberry Pi CM5 for control. Spotify Connect integration and a REST API for LLM-driven control.",
      stack: ["Python", "SigmaDSP", "Raspberry Pi", "Spotify SDK", "KiCad"],
      category: "Hardware",
      year: "2025",
      status: "wip",
    },
    {
      title: "RISCv CPU",
      isFeatured: false,
      description: "Pipelined RISC-V RV32I implementation on an FPGA with full GPIO support, written in SystemVerilog.",
      stack: ["SystemVerilog", "Quartus", "FPGA", "RISC-V"],
      category: "Digital Design",
      year: "2024",
      status: "shipped",
    },
    {
      title: "Pick-n-Place Machine",
      isFeatured: false,
      description: "Desktop PCB component placer built from aluminum extrusion. Runs Marlin firmware for motion control and OpenPNP for component pick-and-place vision.",
      stack: ["Marlin", "OpenPNP", "KiCad", "C++"],
      category: "Hardware",
      year: "2023",
      status: "shipped",
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
      endDate: "May 2025",
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
