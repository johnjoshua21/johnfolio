import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Role Based Access Control for Hospital",
    desc: "Role Based Access Control for Hospital is a Next.js web app that securely manages patient, doctor, and admin access based on user roles.",
    img: "/static/projects/RBAC.png",
    github: "https://github.com/johnjoshua21/Role-Based-Access-Control-for-Hospital",
    tags: ["Next.js", "Nextauth.js", "React"],
  },
  {
    id: 1,
    title: "Student Management System",
    desc: "Spring Boot and React power a full-stack app with CRUD operations via a RESTful API.",
    img: "/static/projects/SMS.png",
    github: "https://github.com/johnjoshua21/Student_Mgmt_System.git",
    tags: ["React", "Java", "Spring Boot", "HTML & CSS"],
  },
  {
    id: 2,
    title: "Line Follower Robot for Healthcare",
    desc: "A LiFi-powered line follower robot for efficient patient monitoring.",
    img: "/static/projects/LFCR.png",
    github: "https://github.com/johnjoshua21/Line-Follower-Robot-Healthcare",
    tags: ["Arduino", "Sensors & Actuators", "Embedded Systems"],
  },
  {
    id: 3,
    title: "LED Intensity Controller Based on Ambient Light",
    desc: "Implemented and tested LDR-based LED brightness control, adjusting illumination based on ambient light intensity.",
    img: "/static/projects/IntensityBasedLightController.png",
    github: "https://github.com/johnjoshua21/LED-Intensity-Controller-Based-on-Ambient-Light",
    tags: ["Arduino", "Sensors & Actuators", "Embedded Systems"],
  },
  {
    id: 4,
    title: "Calibrating sesnsors for aquarium",
    desc: "Calibrated and studied temperature sensors for the implementation of a Smart Aquarium.",
    img: "/static/projects/Calibration.jpg",
    github: "https://github.com/johnjoshua21/Calibration-of-Sensors-for-Smart-Aquarium",
    tags: ["Arduino", "Sensors & Actuators", "Embedded Systems"],
  },
  {
    id: 5,
    title: "Diabetes prediction using Machine Learning",
    desc: "Developed and tested Diabetes prediction model using Machine Learning, by analyzing health data for risk assessment.",
    img: "/static/projects/HousePrediction.png",
    github: "https://github.com/johnjoshua21/Diabetes_Prediction",
    tags: ["Machine Learning", "Python", "EDA"],
  },
  {
    id: 6,
    title: "Supermarket sales analysis",
    desc: "Explored and practiced Supermarket sales analysis using EDA, gaining insights into data patterns and trends.",
    img: "/static/projects/SuperMarket.png",
    github: "https://github.com/johnjoshua21/SuperMarket-Sales-Data-Analysis",
    tags: ["EDA", "Python", "Jupyter NoteBooks"],
  },
  {
    id: 7,
    title: "Predict faults in AIRCRAFT ELEVATOR USING SIMULINK",
    desc: "Designed an aircraft elevator model using Simulink and implemented Machine Learning for fault prediction.",
    img: "/static/projects/AECSML.png",
    github: "",
    tags: ["Simulink", "Matlab", "Machine Learning"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
