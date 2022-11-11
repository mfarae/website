import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Farae",
  title: "Hi all, I'm Farae",
  subTitle: emoji(
    "A passionate Computer Engineering Undergrad 🚀 learning new technologies through hands-on projects and numerous ventures at my university."
  ),
  //resumeLink:
  //  "https://drive.google.com/file/d/1ZV5W3euH5aaxb8iTmrrdPpYyyRjkev0w/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mfarae",
  linkedin: "https://www.linkedin.com/in/m-farae-71188a251/",
  gmail: "muhammad.farae@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DRIVEN AI/ML HOBBYIST WHO WANTS TO EXPLORE AS MANY NEW TECHNOLOGIES EVERYDAY AS POSSIBLE",
  skills: [
    emoji(
      "⚡ Machine Learning and Artificial Intelligence Projects"
    ),
    emoji("⚡ Self-taught web development"),
    emoji(
      "⚡ Hardware projects using well-known microcontrollers and RTL design techniques"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
//    {
//      skillName: "microchip-ai",
//      fontAwesomeClassname: "fa-solid fa-microchip-ai"
//    },
//    {
//      skillName: "bootstrap",
//      fontAwesomeClassname: "fa-brands fa-bootstrap"
//    },
//    {
//      skillName: "linux",
//      fontAwesomeClassname: "fa-brands fa-linux"
//    },
//    {
//      skillName: "ubuntu",
//      fontAwesomeClassname: "fa-brands fa-ubuntu"
//    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
      logo: require("./assets/images/GIKI.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2020 - Present",
      desc: "Batch Rank 1st out of 420 students",
      descBullets: [
        "Dean's Honors List for Highest Academic Distinctions",
        "CGPA: 3.99/4.00"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Campus Ambassador",
      company: "Teach For Pakistan",
      companylogo: require("./assets/images/teach.png"),
      date: "Sept 2022 – Present",
      desc: "Community of leaders and fellows working as a team towards a common goal of alleviating education inequity in Pakistan driven by the core values of preserving human rights.",
      descBullets: [
        "Worked towards achieving goals set by the management team such as running an advocacy campaign on campus whilst also performing recruitment support through general outreach and identifying future high-potential candidates.",
        "www.iteachforpakistan.org/"
      ]
    },
    {
      role: "Head of Artificial Intelligence",
      company: "Google Developer Student Club (GDSC)",
      companylogo: require("./assets/images/gdsc.webp"),
      date: "Sept 2022 – Present",
      desc: "Founding member of the GDSC chapter on GIK campus: member of the AI/ML division.",
      descBullets: [
        "Responsibilities include hosting tutorial sessions and workshops for the student body on a wide variety of topics; other tasks entail managing Google events such as “Kick Start” and “Code Jam” for GIK students.",
        "gdsc.community.dev/the-ghulam-ishaq-khan-institute-of-engineering-sciences-and-technology-giki/"
      ]
    },
    {
      role: "Volunteer",
      company: "Association for Computing Machinery (ACM)",
      companylogo: require("./assets/images/acm.png"),
      date: "Sept 2021 – Jan 2022",
      desc: "Regular student member of ACM and ACM-SIGAI since 2018.",
      descBullets: [
        "Organized technical events hosted by the ACM (Association for Computing Machinery) society at GIK, such as the International Collegiate Programming Contest (ICPC) for which GIK was the host campus nationally in Pakistan. Cooperated with team members to setup the programming contest logistically. Also participated in the ICPC competition 2022."
      ]
    },
    {
      role: "Volunteer",
      company: "GIK's Foxtrot Tecnical Team",
      companylogo: require("./assets/images/foxtrot.jpeg"),
      date: "Sept 2021 – Jan 2022",
      desc: "Foxtrot participates in the UAS Challenge hosted by the Institution of Mechanical Engineers annually. While there, applied my knowledge to build a UAV from scratch.",
      descBullets: [
        "Opted to be in the Software Development (i.e. image recognition through Deep Learning frameworks), Automation, Documentation, Testing and Sponsorship Divisions.",
        "Skills Learned: TensorFlow, Component Wiring, Technical Academic Writing, and Social Media Promotion."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research and Publications",
  subtitle: "Research work with published papers or currently ongoing projects",
  projects: [
    {
      image: require("./assets/images/ssp.png"),
      projectName: "Orbit Determination of Near-Earth Asteroids using Numerical and Simulation Techniques",
      projectDesc: "Numerical analysis techniques such as Monte Carlo simulations were run in Python to generate results. Submitted for presentation at 235th American Astronomical Society (AAS) Meeting held jointly with AAS Historical Astronomy and High Energy Astrophysics Divisions",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://arxiv.org/abs/2109.07397"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Dean's Honors List",
      subtitle:
        "Performed with highest academic distinctions (i.e. SGPA above 3.90) in all semesters",
      image: require("./assets/images/dean.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificates",
          url: "https://drive.google.com/file/d/1j26wlyqtPaD-wt0kFkZQNCvJBc3-GyjB/view?usp=sharing"
        },
        {
          name: "Transcript",
          url: "https://drive.google.com/file/d/1ouedvRB-O0hZ19_fSQuqAEqMMYQ7YHvv/view?usp=sharing"
        }
      ]
    },
    {
      title: "Machine Learning Coursera Specialization",
      subtitle:
        "Completed the online specialization on Machine Learning and passed all quizzes, labs, and graded coding assignments.",
      image: require("./assets/images/ml.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Specialization Certificate",
          url: "https://coursera.org/verify/specialization/8AP6MV5VEUVH"
        }
      ]
    },
    {
      title: "Mastering Data Analysis with Pandas",
      subtitle: "Completed guided project on Coursera with 100% grades",
      image: require("./assets/images/pandas.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/verify/BRE9RQR4JLD3"},
      ]
    },
    {
      title: "Traffic Sign Classification Using Deep Learning in Python/Keras      ",
      subtitle: "Completed guided project on Coursera with 100% grades",
      image: require("./assets/images/keras.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/verify/VAZUPQAPJRLA"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "muhammad.farae@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
