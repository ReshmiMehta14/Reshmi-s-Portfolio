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

// const illustration = {
//   animated: true // Set to false to use static SVG
// };
const illustration = {
  animated: false, // Set this to false to disable the animation
  imagePath: "./assets/images/myimg.JPG" // Path to your image
};

const greeting = {
  username: "Reshmi Mehta",
  title: "Hello, I'm Reshmi.",
  subTitle: emoji(
    "I’m passionate about cybersecurity and solving complex challenges. From securing cloud environments to identifying AI vulnerabilities, I use data-driven insights to strengthen defenses."
  ),  
  resumeLink:
    "https://drive.google.com/file/d/15RBDFvNkFHQxXsmHyJKMYs_DeDE-fFFi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ReshmiMehta14",
  linkedin: "https://www.linkedin.com/in/reshmimehta/",
  gmail: "reshmi140@gmail.com",
  medium: "https://medium.com/@rbm141101",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


  // Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CYBERSECURITY ENTHUSIAST WITH A PASSION FOR DATA-DRIVEN SOLUTIONS",
  skills: [
    emoji("⚡ Perform AI red teaming to identify vulnerabilities and assess model security"),
    emoji("⚡ Secure cloud environments using AWS, with a focus on compliance and threat detection"),
    emoji("⚡ Analyze security data to detect anomalies and strengthen system defenses"),
    emoji("⚡ Implement encryption, secure protocols, and network defenses to mitigate threats"),
    emoji("⚡ Conduct responsible AI testing to mitigate risks and ensure ethical AI deployment")
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/UW.png"),
      subHeader: "Master of Science in Information Management",
      location: "Seattle, Washington, US",
      duration: "September 2023 - June 2025",
      desc: "Specialised in Cybersecurity and Data Science",
      gpa: "GPA: 3.98 / 4.0"

      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "NMIMS University",
      logo: require("./assets/images/nmims1.jpg"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      location: "Mumbai, Maharashtra, India",
      duration: "Jul 2019 - May 2023",
      desc: "Focused on Cybersecurity, Artificial Intelligence and Big Data Analysis ",
      gpa: "GPA: 3.8 / 4.0"

      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "Security Analyst",
      company: "Alcon",
      companylogo: require("./assets/images/Alcon.png"),
      date: "June 2024 – Present",
      descBullets: [
        "Conducted gap analysis of AWS cloud infrastructure, identifying compliance and security improvements to streamline AWS Landing Zone Accelerator deployment for HIPAA compliance, ensuring secure and scalable cloud-based analytics.",
        "Developed a comprehensive guide for ingesting AWS logs into Microsoft Sentinel, improving security monitoring, log management, and anomaly detection—enhancing data-driven decision-making in AI-powered health analytics.",
        "Designed a standardized naming policy for SIEM policy aligned with the NIST framework, improving data organization, security compliance, and analytics consistency across the cloud environment."
      ]
    },
    {
      role: "Research Assistant (Gen AI)",
      company: "University of Washington",
      companylogo: require("./assets/images/uw.jpeg"),
      date: "February 2024 – April 2024",
      descBullets: [
        "Developed a secure text generation model using Hugging Face Transformers with an interactive Gradio-based UI, implementing API access controls and request rate limiting to prevent unauthorized use, improving model security by 40%.",
        "Conducted AI Red Teaming and custom adversarial test suites, identifying 5+ exploits (e.g., encoding bypasses, role-playing attacks). Implemented context filtering and regex sanitization, reducing adversarial success rates from 80% to 20%.",
        "Implemented model output validation using regex filtering and payload inspection to detect potential data leakage, prompt reversals, and unintended system responses, strengthening model security."
      ]
    },
    {
      role: "Data Security Analyst Intern",
      company: "Granuler CIO Consulting",
      companylogo: require("./assets/images/granu.png"),
      date: "December 2020 – May 2021",
      descBullets: [
        "Developed Power BI dashboards to visualize security-related CRM data, identifying anomalies and inefficiencies in workflows, which improved risk analysis and operational transparency by 25%.",
        "Utilized SQL to extract and analyze security logs, identifying patterns in unauthorized access attempts and data inconsistencies, optimizing data validation and compliance tracking.",
        "Automated data pipeline processes using UiPath RPA, streamlining security event logging and report generation, reducing manual effort by 25% and ensuring data accuracy in compliance reports."
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
const projectsData = {
  display: true,
  cybersecurityProjects: [
    {
      title: "UW HusKey Manager Security",
      description: "Enhanced the security of UW HusKey Manager to mitigate ARP spoofing attacks and implemented encryption using HTTPS.",
      link: "https://github.com/ReshmiMehta14/SecurePasswordManager/blob/main/README.md"
    },
    {
      title: "Adversarial AI prompt detection system",
      description: "AI-powered system combining regex, NLP, GPT, and ML to detect adversarial prompts (injection, exfiltration, code execution) with real-time analysis and visual insights for cyber defense.",
      link: "https://github.com/ReshmiMehta14/AI-Powered-Adversarial-Prompt-Detection-for-AI-Cybersecurity"
    },
    {
      title: "AI Red Teaming on DeepSeek AI, Grok AI and CoPilot",
      description: "Conducted AI red teaming for vulnerability testing in AI models using adversarial attacks.",
      link: "https://github.com/ReshmiMehta14/Adversarial-AI-Red-teaming"
    },
    {
      title: "Pen testing Owasp JuiceShop",
      description: "Documenting vulnerabilities and ethical hacking techniques applied to the OWASP Juice Shop using BurpSuite",
      link: "https://github.com/ReshmiMehta14/Owasp-JuiceShop-BurpSuite"
    }

  ],
  dataAIProjects: [

    {
      title: "YaarAI Agentic AI chatbot",
      description: "An empathetic, multi-agent AI chatbot designed to provide human-like, emotionally intelligent conversations by adapting to user emotions, sarcasm detection, and context awareness.",
      link: "https://github.com/ReshmiMehta14/YaarAI"
    },
    {
      title: "British Airways Sentiment Analysis",
      description: "Sentiment analysis of customer reviews using web scraping and predicting customer buying behavior with machine learning models. It focuses on data cleaning, exploratory analysis, and model development, providing hands-on experience with airline industry data.",
      link: "https://github.com/ReshmiMehta14/British-Airways-Virtual-Internship-Data-Science-"
    },
    {
      title: "Fake News Detection",
      description: "Addressing the critical issue of fake news detection using advanced data science and machine learning techniques. The solution leverages undersampling methods and fine-tuned LSTM models to achieve high accuracy in identifying fake news.",
      link: "https://github.com/ReshmiMehta14/Fake-news-detection"
    },
    {
      title: "NY-and-Chicago-Crime-Data-Analysis",
      description: "Analyzing crime data from two major US cities: Chicago and New York. The aim is to predict crime occurrences and understand the factors influencing arrest rates using various machine learning techniques.",
      link: "https://github.com/ReshmiMehta14/NY-and-Chicago-Crime-Data-Analysis"
    },
    {
      title: "Sales Data Warehousing",
      description: "By leveraging Snowflake for ELT processes, SQL for data modeling, and Tableau for visualization, the project delivered scalable, insightful, and actionable intelligence.",
      link: "https://medium.com/@rbm141101/building-a-scalable-retail-data-warehouse-elt-processes-dimensional-modeling-sql-and-tableau-1aea2c6ed16f"
    },
    {
      title: "HR Dashboard with Tableau",
      description: "Built an HR analytics dashboard using Tableau to visualize workforce data and generate actionable insights.",
      link: "https://public.tableau.com/app/profile/reshmi.mehta/viz/HRDashboard_17339952980100/HRSummary?publish=yes"
    },
  ]
};

const bigProjects = {
  title: "My projects",
  subtitle: "Identified vulnerabilities in encoding bypass, jailbreak attempts, and prompt engineering through comprehensive AI red teaming.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Red teamning on DeepSeek AI, Grok AI and Copilot",
      projectDesc: "Identified vulnerabilities in encoding bypass, jailbreak attempts, and prompt engineering through comprehensive AI red teaming.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://medium.com/@rbm141101/breaking-ai-guardrails-how-i-tested-deepseek-ais-security-and-what-i-found-f488abcf5f70"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Red teamning on DeepSeek AI, Grok AI and Copilot",
      projectDesc: "Identified vulnerabilities in encoding bypass, jailbreak attempts, and prompt engineering through comprehensive AI red teaming.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://medium.com/@rbm141101/breaking-ai-guardrails-how-i-tested-deepseek-ais-security-and-what-i-found-f488abcf5f70"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Red teamning on DeepSeek AI, Grok AI and Copilot",
      projectDesc: "Identified vulnerabilities in encoding bypass, jailbreak attempts, and prompt engineering through comprehensive AI red teaming.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://medium.com/@rbm141101/breaking-ai-guardrails-how-i-tested-deepseek-ais-security-and-what-i-found-f488abcf5f70"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ISC2 Certified in Cybersecurity",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/ISC2.png"),
      imageAlt: "ISC2 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/579f459d-f158-4338-957c-3b633ca0b791/public_url"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/awss.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8e72645d-cf6a-41d4-a8da-ffaf8ea6a336/linked_in_profile"
        },
      ]
    },

    {
      title: "Security +",
      subtitle: "In Progress",
      image: require("./assets/images/secplus.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "CTF Amazon x WiCys",
      subtitle: "Top 10",
      image: require("./assets/images/amzctf.webp"),
      //imageAlt: "PWA Logo",
      footerLink: [
        {name: "Linkedin post", url: "https://www.linkedin.com/posts/reshmimehta_cybersecurity-ctf-wicys-activity-7264418574088175616-kV4C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-f-fwBhEEH-TLYw93dlYmhTvdtFvvz1Oo"}
        
      ]
    },
    {
      title: "Github Code review",
      subtitle: "Finalist-Top 3",
      image: require("./assets/images/git.jpeg"),
      //imageAlt: "PWA Logo",
      footerLink: [
        {name: "Linkedin post", url: "https://www.linkedin.com/posts/reshmimehta_cybersecurity-securecoding-cyberweek-activity-7302787022178463744-JeWD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-f-fwBhEEH-TLYw93dlYmhTvdtFvvz1Oo"}
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@rbm141101/breaking-ai-guardrails-how-i-tested-deepseek-ais-security-and-what-i-found-f488abcf5f70",
      title: "Breaking AI Guardrails: How I Tested DeepSeek AI’s Security (And What I Found)",
      // description:
      //   "?"
    },
    {
      url: "https://medium.com/@rbm141101/securing-web-applications-a-hands-on-exploration-with-docker-arp-spoofing-and-wireshark-fbd1b77959e6",
      title: "Securing Web Applications: A Hands-On Exploration with Docker, ARP Spoofing, and Wireshark part 1 of 4",
      // description:
      //   "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
 // number: "+92-0000000000",
  email_address: "reshmi14@uw.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  projectsData,
  resumeSection
};
