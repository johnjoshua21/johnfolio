import React from "react";
import SectionTitle from "../global/SectionTitle";

function Testimonials() {
  return (
    <div id="about" className="flex flex-col text-left max-w-6xl w-full mx-auto px-4 text-[17px] ">
      <SectionTitle title="Get to Know Me" />
      <p className="text-gray-300 mb-6 text-[18px]">
        Full Stack Developer with Java Spring Boot and Next.js, pursuing ECE. Interested in IoT, embedded systems, and exploring ML and data science to expand my tech skills.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00B9FF]">🎓 Education</h2>
        <p className="text-white font-semibold text-[18px]">Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE)</p>
        <p className="text-sm text-gray-400">Dr.N.G.P. Institute of Technology, 2026</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00B9FF]">📜 Certificates</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li><span className="text-white font-semibold text-[18px]">Social Innovation in Industry 4.0 – Elite + Silver Grade</span><br />NPTEL, 2024</li>
          <li><span className="text-white font-semibold text-[18px]">Problem Solving Through Programming in C – Elite Grade</span><br />NPTEL, 2023</li>
          <li><span className="text-white font-semibold text-[18px]">Python Programming Complete Beginners Course Bootcamp</span><br />Udemy, 2024</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00B9FF]">🛠️ Workshops</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li><span className="text-white font-semibold text-[18px]">VLSI Design and Recent Trends</span><br />IIT Palakkad, 2024</li>
          <li><span className="text-white font-semibold text-[18px]">LIFTOFF DRONE WORKSHOP</span><br />Spacechase, 2023</li>
          <li><span className="text-white font-semibold text-[18px]">IoT Product Design and Testing</span><br />Krishtec, 2024</li>
          <li><span className="text-white font-semibold text-[18px]">Arduino UNO</span><br />Dr.N.G.P. Institute of Technology, 2023</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00B9FF]">💼 Experience</h2>

        <div className="mb-6">
          <p className="text-white font-semibold text-[18px]">Web Development Intern</p>
          <p className="text-sm text-gray-400">Beyond Code Technologies, 2025</p>
          <p className="text-gray-300 mt-2 text-sm">
            Worked as a full stack developer in the company, contributing to the official website and actively involved in the
            end-to-end development of full stack projects using Spring Boot and Next.js.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold text-[18px]">Machine Learning Intern</p>
          <p className="text-sm text-gray-400">IPCS Global Solution, 2024</p>
          <p className="text-gray-300 mt-2 text-sm">
            Worked on data analysis projects involving pizza sales and multi-category retail sales. Utilized Python along with libraries like Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, visualization, and deriving insights. Developed strong understanding in EDA and practical applications of data science concepts.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00B9FF]">📌 Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>
            <span className="text-white font-semibold text-[18px]">Executive Member – Student Development Council</span><br />
            Dr.N.G.P. Institute of Technology
          </li>
          <li>
            <span className="text-white font-semibold text-[18px]">Hands-on Session – Arduino UNO</span><br />
            Conducted an introductory workshop for juniors on Arduino programming and sensor integration, offering practical exposure to embedded systems.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
