/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Juan C Suarez",
  title: "Hi all, I'm Juan",
  subTitle: emoji(
    "A passionate Blockchain Developer 🚀 having experiences on building Web3.0 and dApps with Solidity / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18crVRwO7Qsv-RizG5Z_I3niZ-LhKeE3-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rachosuar",
  linkedin: "https://www.linkedin.com/in/juan-cruz-suarez/",
  gmail: "rachosuar@gmail.com",
  twitter: "https://twitter.com/rachosuarez",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BLOCKCHAIN ENTHUSIAST WHO WANTS TO CREATE ON WEB 3.0 WITH THIS TOOLS:",
  skills: [
    emoji(
      "⚡ Develop secure and efficient Smart Contracts and beautiful and interactive dApps"
    ),
    emoji("⚡ With a deep background on self-motivation and leading teams"),
    emoji(
      "⚡ With experience in DeFi, L2 Chains, Account Abstraction and Security"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "IPFS",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Fleek",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Instituto Universitario Aeronautico",
      logo: require("./assets/images/iua.png"),
      subHeader: "Bachelor on Air and Space Systems",
      duration: "September 2006 - Julio 2011"
    },  {
      schoolName: "Instituto Universitario Aeronautico",
      logo: require("./assets/images/iua.png"),
      subHeader: "Master Degree in Cyber Security",
      duration: "January 2023 - "
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Solidity",
      progressPercentage: "80%"
    },
    {
      Stack: "Blockchain Knowldage",
      progressPercentage: "80%"
    },
     {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    }

   
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack / Blockchain Developer",
      company: "SPHEREONE",
      companylogo: require("./assets/images/sphere_logo.png"),
      date: " DEC 2022 – Present",
      desc: "Full-Stack developer oriented to blockchain technologies",
      descBullets: [
        " Investigatigate and create gasless transactions",
        " Implementing Account Abstraction EIP-4337, on several networks (ETH,POL,OPT,ARB,BSC)",
        " Creation of a bundler for the app that worked on the same networks",
        " Runing bundlers on Dockers on GCP.",
        " Integrating gaming networks like Immutable",
        " Working with ZK networks",
        " Working with different finance apps to imporve the product",
        "Technologies: Typescript, Firbease, GCP, Docker, Solidity, ReactJS"
      ]
    },
    {
      role: "Blockchain Developer Intern",
      company: "EWOL",
      companylogo: require("./assets/images/ewol_logo.jpg"),
      date: " OCT 2022 – DEC 2022",
      desc: "Blockchain developer intership, where I worked in dfferent projects than involved:",
      descBullets: [
        " Create smart contracts (ERC-20, ERC-721, ERC-1155, among others)",
        " Create a DAO.",
        " Create dApps.",
        " Create of new ideas for startups and projects.",
        " Work in teams and pair programming.",
        " Work with Agile methodologies with Jira",
        "Technologies: Solidity, ReactJS, HardHat, Openzeppelin"
      ]
    },
    {
      role: "Air Force Officer",
      company: "Argentina Air Force",
      companylogo: require("./assets/images/faa.svg"),
      date: " MAR 2006 – SEP 2022",
      desc: "17 years serving my country as a military tranasport aviator, during that time I've worked as:",
      descBullets: [
        " Military transport pilot (C-130 aircrafts)",
        " Operations Manager",
        " IT Manager",
        " Chief flight instructor.",
        " Antarctic air operations manager.",
        " Logistics Manager"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I'VE BEEN WORKING ON",
  projects: [
    {
      image: require("./assets/images/marketsentiment.gif"),
      projectName: "Market Sentiment",
      projectDesc:
        "This is a market sentiment deployed on Mumbai Testnet. If you connect with your wallet you can interact with the front-end voting about how do you fell the market will be going. The project was deployed on an IPFS server. Skills: React, Solidity, Hardhat, ether.js, Metamask",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lucky-violet-2028.on.fleek.co/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/krypt.gif"),
      projectName: "Crypto Transfers",
      projectDesc:
        "In this project you can connect with a wallet on goerli network and make transactions, for every transaction you'll get a gif. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://krypto-peach.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/ewoltweet.gif"),
      projectName: "Ewol Twitter",
      projectDesc:
        "This project was created with ReactJS, and is a web app that allows the user to create tweets. If the local storage is cleared the user will no longer exist and user will need to create a new user. For this project I used React and Firebase.. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://twitter-ewol.vercel.app/"
        }
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
      title: "ReactJs",
      subtitle: "Optimal grades in ReactJs course .",
      image: require("./assets/images/reactjs_coder.png"),
      imageAlt: "reactjscertificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coderhouse.com/certificados/634c9b0308a44f000e37993c"
        }
      ]
    },
    {
      title: "EFSET English Certificate (C1-ADVANCED)",
      subtitle:
        "The achieved English level is 69/100 on the EF SET score scale and C1 Advanced according to the Common European Framework of Reference (CEFR). The EF SET score is calculated as an average of the reading and listening scores..",
      image: require("./assets/images/efset_advance.png"),
      imageAlt: "EFSET CERTIFICATE",
      footerLink: [
        {
          name: "Advanced English Certification",
          url: "https://www.efset.org/cert/Pw5P36"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",

  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",

  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+54-91137607988",
  email_address: "rachosuar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rachosuarez", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
