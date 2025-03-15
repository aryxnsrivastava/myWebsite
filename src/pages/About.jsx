function About(){
    return(
<div className="bg-black text-white min-h-screen py-10">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-6 underline">About Me</h1>
        <p className="text-lg leading-relaxed text-center">
          Hello! I'm <strong className="text-blue-400">Aryan Srivastava</strong>, a passionate and driven <strong>Applied Computer Science student</strong> at 
          <strong> Dalhousie University</strong>, expected to graduate in <strong>May 2026</strong>. My journey in tech has been shaped by hands-on 
          experience in <strong>software development, web development, and mobile applications</strong>.
        </p>
        <br></br>

        <h2 className="text-2xl font-semibold mt-10 mb-4 underline">Technical Expertise</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Programming Languages:</strong> Java, Python, SQL, JavaScript, Kotlin, C++</li>
          <li><strong>Frameworks & Libraries:</strong> React, Node.js, Flask, Flutter</li>
          <li><strong>Developer Tools:</strong> Git, VS Code, Android Studio, Firebase, MySQL, SQLAlchemy</li>
        </ul>
        <br></br>

        <h2 className="text-2xl font-semibold mt-10 mb-4 underline">Experience & Projects</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Junior Software Developer (Dalhousie Android Development Team)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Collaborated in an <strong>8-member team</strong> to develop the "Beach Bluenoser" Android app.</li>
              <li>Worked directly with clients to gather requirements and implement key features.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400">Flutter Developer Intern (Qwikly Labs, India)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed cross-platform mobile apps using <strong>Flutter</strong>.</li>
              <li>Improved UX and functionality for apps like "FindBetter."</li>
            </ul>
          </div>
        </div>
        <br></br>

        <h2 className="text-2xl font-semibold mt-10 mb-4 underline">Hackathons & Competitions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Generative AI Hackathon</strong> Built an AI-driven solution to optimize ER wait times using <strong>Flask & MedLlama2</strong>.</li>
          <li><strong>RBC Halifax Innovation Challenge:</strong> Developed AI-powered solutions for enhancing client relationships.</li>
          <li><strong>Global Game Jam:</strong> Led a team in building "CringeTV," a <strong>2D pixel-art game</strong> using HTML, CSS & JavaScript.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 underline">Beyond Coding</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Captain of U17 Soccer Team</strong> – Led a 21-player squad, handling strategy and coordination.</li>
          <li><strong>Dalhousie Entrance & Computer Science Scholarship</strong> – Awarded for leadership, academics, and community involvement.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 underline">Looking Ahead</h2>
        <p className="text-lg leading-relaxed">
          I'm constantly exploring new technologies, problem-solving through innovation, and <strong>pushing the boundaries of software development</strong>. 
          I aspire to work in <strong>cloud computing and product management</strong>, where I can combine my technical expertise with strategic decision-making.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 underline">Let's Connect!</h2>
        <ul className="space-y-2">
          <li> <a href="https://github.com/aryxnsrivastava" target="_blank" className="text-blue-400 hover:underline">GitHub: aryxnsrivastava</a></li>
          <li> <a href="https://www.linkedin.com/in/aryansrivastava10" target="_blank" className="text-blue-400 hover:underline">LinkedIn: Aryan Srivastava</a></li>
        </ul>
      </div>

    </div>
  );
  }
  export default About;