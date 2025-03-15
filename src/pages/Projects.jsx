import React from "react";
function Projects(){
    return(
<div className="bg-black text-white min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center underline mb-6">Projects</h1>
        <p className="text-center text-lg mb-10">
          Here are some of the key projects I’ve worked on, showcasing my technical skills and problem-solving abilities.
        </p>

        <div className="space-y-8">
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Beach Bluenoser (Dalhousie Android Development Team)</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> Java, Android Studio, Gradle</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed in an <strong>8-member team</strong> to create an Android app.</li>
              <li>Built key features by working closely with clients.</li>
              <li>Successfully delivered a fully functional app.</li>
            </ul>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-green-500 pb-2">FindBetter (Qwikly Labs, Bengaluru)</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> Flutter, Dart</p>
            <ul className="list-disc list-inside mt-2">
              <li>Contributed to the development of a <strong>cross-platform mobile app</strong>.</li>
              <li>Enhanced UX and functionality by optimizing the app’s features.</li>
              <li>Ensured seamless compatibility for both iOS and Android.</li>
            </ul>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-red-500 pb-2">Generative AI Hackathon</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> Python, Flask, SQLAlchemy, Ollama (MedLlama2)</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed an AI-driven solution for managing <strong>ER wait times</strong>.</li>
              <li>Created a locally hosted server to dynamically manage patient queues.</li>
              <li>Utilized MedLlama2 for prioritizing emergency cases.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-yellow-500 pb-2">Huffman Tree Implementation</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> Java, Python, Data Structures & Algorithms</p>
            <ul className="list-disc list-inside mt-2">
              <li>Implemented Huffman coding for <strong>data compression</strong>.</li>
              <li>Built a binary tree to optimize encoding and decoding processes.</li>
              <li>Demonstrated proficiency in <strong>OOP and algorithmic design</strong>.</li>
            </ul>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-purple-500 pb-2">Global Game Jam 2024 - CringeTV</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led a team in building a <strong>2D pixel-art game</strong>.</li>
              <li>Designed a humorous and interactive gaming experience.</li>
              <li>Showcased storytelling through creative UI/UX.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-pink-500 pb-2">ATM Machine</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> Java, Data Structures, OOP</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed core ATM functionalities like <strong>withdrawal, deposits, and secure login</strong>.</li>
              <li>Applied software development guidelines for efficient implementation.</li>
              <li>Used GitHub for version control and collaboration.</li>
            </ul>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2">Portfolio Website</h2>
            <p className="text-gray-300 mt-2"><strong>Technologies:</strong> HTML, CSS, JavaScript, React</p>
            <ul className="list-disc list-inside mt-2">
              <li>Designed and implemented a <strong>responsive portfolio</strong> to showcase skills.</li>
              <li>Integrated interactive elements using JavaScript.</li>
              <li>Focused on an engaging and user-friendly UI.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Projects;