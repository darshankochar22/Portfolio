import profileImage from './assets/WhatsApp Image 2025-08-10 at 13.30.18.jpeg'
import resumePDF from './assets/Darshan.pdf'

// Project Images
import zenlearnImage from './assets/chatgpt-image.png'
import inventoryImage from './assets/screenshot.png'
import resourcexImage from './assets/resourcex.jpeg'
import empowherImage from './assets/empowher.jpeg'
import newInventoryImage from './assets/new-inventory.png'
import productSearchImage from './assets/product-search.png'
import gitgraphiumImage from './assets/gitgraphium.png'
import cybercrimeImage from './assets/Gemini_Generated_Image_mfquqqmfquqqmfqu.png'
import dynamicTrafficImage from './assets/WhatsApp Image 2025-02-01 at 13.29.23.jpeg'

// Hackathon Images
import hackprixImage1 from './assets/Hackprix/WhatsApp Image 2025-09-18 at 15.47.16.jpeg'
import hackprixImage2 from './assets/Hackprix/WhatsApp Image 2025-09-18 at 15.47.16 (1).jpeg'
import dsuDevhackImage1 from './assets/DSU-Devhack-2.0/WhatsApp Image 2025-09-17 at 11.47.51 (1).jpeg'
import dsuDevhackImage2 from './assets/DSU-Devhack-2.0/WhatsApp Image 2025-09-17 at 11.47.52.jpeg'
import bit2ByteImage1 from './assets/Bit2Byte/WhatsApp Image 2025-09-18 at 15.58.37.jpeg'
import bit2ByteImage2 from './assets/Bit2Byte/WhatsApp Image 2025-09-18 at 15.58.37 (1).jpeg'
import hackByteImage1 from './assets/Hack-Byte/WhatsApp Image 2025-09-18 at 15.58.18.jpeg'
import hackByteImage2 from './assets/Hack-Byte/WhatsApp Image 2025-09-18 at 15.58.18 (1).jpeg'
import hackHarbourImage1 from './assets/Hack-o-Harbour/WhatsApp Image 2025-09-18 at 15.55.07.jpeg'
import hackHarbourImage2 from './assets/Hack-o-Harbour/WhatsApp Image 2025-09-18 at 15.56.00.jpeg'
import ghrHacksImage1 from './assets/GHR-Hacks/WhatsApp Image 2025-09-18 at 15.41.23.jpeg'
import ghrHacksImage2 from './assets/GHR-Hacks/WhatsApp Image 2025-09-18 at 15.41.24.jpeg'

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h1>Darshan Kochar</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#hackathons">Hackathons</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2><span className="highlight">Darshan Kochar</span></h2>
            <p className="hero-subtitle">Full Stack Developer & Competitive Programmer</p>
            <p className="hero-description">
              Passionate about building innovative web applications and solving complex algorithmic problems.
              I love turning ideas into scalable solutions through clean code and creative problem-solving.
            </p>
            <div className="hero-buttons">
              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={profileImage} 
              alt="Darshan Kochar" 
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-main">
              <div className="about-intro">
                <h3>Darshan Kochar</h3>
                <p className="role">Full Stack Developer & Competitive Programmer</p>
                <p className="institution">IIIT NR '27 • Computer Science & Engineering</p>
              </div>
              
              <div className="about-description">
                <p>
                  I'm just another developer who somehow managed to win <strong>6 national hackathons</strong> with 
                  <strong> Team Kaju Katli</strong> while pretending to know what I'm doing. I build things that 
                  occasionally work, write code that sometimes makes sense, and apparently I'm decent enough at 
                  <strong> backend development, DevOps, and AI integration</strong> that people keep giving me awards.
                </p>
                <p>
                  When I'm not accidentally breaking production systems or debugging code at 3 AM, you'll find me 
                  participating in hackathons, losing at competitive programming, or discovering new ways to make 
                  simple problems unnecessarily complex. I believe in the philosophy of "it works on my machine" 
                  and the eternal optimism that the next deployment will definitely not break everything.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Material-UI</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">RESTful APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Microservices</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML & Data Science</h3>
              <div className="skills-list">
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">BERT</span>
                <span className="skill-tag">GPT Models</span>
                <span className="skill-tag">Gemini</span>
                <span className="skill-tag">OpenAI API</span>
                <span className="skill-tag">Groq</span>
                <span className="skill-tag">Computer Vision</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases & Storage</h3>
              <div className="skills-list">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Neo4j</span>
                <span className="skill-tag">ChromaDB</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Supabase</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skills-list">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Netlify</span>
                <span className="skill-tag">Railway</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">SSH</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Computer Vision & IoT</h3>
              <div className="skills-list">
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">YOLO</span>
                <span className="skill-tag">MediaPipe</span>
                <span className="skill-tag">Raspberry Pi</span>
                <span className="skill-tag">Arduino</span>
                <span className="skill-tag">ESP32</span>
                <span className="skill-tag">MQTT</span>
                <span className="skill-tag">Real-time Systems</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Blockchain & Web3</h3>
              <div className="skills-list">
                <span className="skill-tag">Solidity</span>
                <span className="skill-tag">Web3.js</span>
                <span className="skill-tag">Ethereum</span>
                <span className="skill-tag">Smart Contracts</span>
                <span className="skill-tag">Midnight Protocol</span>
                <span className="skill-tag">MetaMask</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Development Tools</h3>
              <div className="skills-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Slack</span>
                <span className="skill-tag">Discord</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={resourcexImage} alt="ZenLearn Project" />
                
              </div>
              <div className="project-content">
                <h3>ZenLearn</h3>
                <p>Learning platform supporting Mental Health with real-time stress detection using facial expressions and behavioral changes, meditation posture and eyes detection with real-time feedback. Includes AI chatbots for problem-solving and VR-based speaking platform.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>OpenCV</span>
                  <span>Mediapipe</span>
                  <span>DeepFace</span>
                  <span>ElevenLabs</span>
                  <span>DeepSeek R1</span>
                  <span>Pygame</span>
                  <span>Gemini</span>
                </div>
                <div className="project-links">
                  <a href="https://www.youtube.com/watch?v=FTfSj5MpK-0&t=107s" className="btn btn-small" target="_blank" rel="noopener noreferrer">Watch Demo</a>
                  <a href="https://github.com/priyadarshi7/ZenLearn" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>
            
             <div className="project-card">
               <div className="project-image">
                 <img src={newInventoryImage} alt="Inventory Management Project" />
               </div>
               <div className="project-content">
                 <h3>Inventory Management System</h3>
                 <p>Gamified inventory management system for offline and VR-based e-commerce stores with AI-powered product recognition, auto-listing using Google Gemini, and sentiment analysis on customer reviews for actionable insights.</p>
                 <div className="project-tech">
                   <span>LangChain</span>
                   <span>Gemini</span>
                   <span>Node.js</span>
                   <span>Groq</span>
                   <span>LLaMA 3</span>
                   <span>React</span>
                   <span>Three.js</span>
                   <span>FastAPI</span>
                 </div>
                <div className="project-links">
                  <a href="https://github.com/priyadarshi7/Hackharbour" className="btn btn-small" target="_blank" rel="noopener noreferrer">View Project</a>
                  <a href="https://github.com/priyadarshi7/Hackharbour" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
               </div>
             </div>

            <div className="project-card">
              <div className="project-image">
                <img src={zenlearnImage} alt="ResourceX Project" />
              </div>
              <div className="project-content">
                <h3>ResourceX</h3>
                <p>Decentralized GPU Resource Sharing Platform with peer-to-peer GPU exchange featuring passwordless SSH key-based authentication, reducing login time by ~80%. Integrated Tailscale VPN for sub-50ms provisioning and Docker sandboxes with CPU/GPU/memory caps.</p>
                <div className="project-tech">
                  <span>SSH</span>
                  <span>Docker</span>
                  <span>Tailscale</span>
                  <span>FastAPI</span>
                  <span>Gemini</span>
                </div>
                <div className="project-links">
                  <a href="https://www.youtube.com/watch?v=N5mz-AMorLY" className="btn btn-small" target="_blank" rel="noopener noreferrer">Watch Demo</a>
                  <a href="https://github.com/priyadarshi7/Dev.env-ResourceX" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={empowherImage} alt="empowHER Project" />
              </div>
              <div className="project-content">
                <h3>empowHER</h3>
                <p>AI-Powered Career and Job Search Agent that provides career guidance to women. Features chatbot with memory storing history in MongoDB, job search using Tavily API and Diffbot scraping, plus community and learning resources.</p>
                <div className="project-tech">
                  <span>LangChain</span>
                  <span>Neo4j</span>
                  <span>Groq</span>
                  <span>LLaMA 3</span>
                  <span>Next.js</span>
                  <span>MongoDB</span>
                  <span>Node.js</span>
                  <span>FastAPI</span>
                </div>
                <div className="project-links">
                  <a href="https://empowher-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-small">Live Demo</a>
                  <a href="https://github.com/Trisha2910tinaaaaa/empowHER-frontend" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={gitgraphiumImage} alt="GitGraphium Project" />
              </div>
              <div className="project-content">
                <h3>GitGraphium</h3>
                <p>AI-Powered Code Query Agent that processes GitHub repositories and answers user queries. Extracts functions, generates structured representations, and retrieves relevant code snippets based on user queries.</p>
                <div className="project-tech">
                  <span>LangChain</span>
                  <span>Neo4j</span>
                  <span>Groq</span>
                  <span>LLaMA 3</span>
                  <span>MiniLM-L6-v2</span>
                  <span>FastAPI</span>
                </div>
                <div className="project-links">
                  <a href="https://www.youtube.com/watch?v=FTfSj5MpK-0" className="btn btn-small" target="_blank" rel="noopener noreferrer">Watch Demo</a>
                  <a href="https://github.com/Evadshell/GitGraphium" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={cybercrimeImage} alt="CyberCrime Classifier Project" />
              </div>
              <div className="project-content">
                <h3>CyberCrime Classifier</h3>
                <p>Multi-Class, Multi-Level Categorization system that fine-tunes BERT for classifying CyberCrime complaints into 3 main categories and 60 subcategories using the National Cyber Crime dataset.</p>
                <div className="project-tech">
                  <span>PyTorch</span>
                  <span>Hugging Face</span>
                  <span>BERT</span>
                  <span>ChromaDB</span>
                  <span>Pandas</span>
                  <span>Matplotlib</span>
                  <span>NLTK</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/darshankochar22/CyberCrime-Classifier" className="btn btn-small">View Project</a>
                  <a href="https://github.com/shashbha14/X" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={productSearchImage} alt="Product Source Project" />
              </div>
              <div className="project-content">
                <h3>Product Source</h3>
                <p>AI-Powered Procurement Assistant chatbot that predicts manufacturer, origin, and price of IT infrastructure products across platforms to assist in procurement decisions.</p>
                <div className="project-tech">
                  <span>LangChain</span>
                  <span>Diffbot</span>
                  <span>BeautifulSoup</span>
                  <span>FastAPI</span>
                  <span>Next.js</span>
                </div>
                <div className="project-links">
                  <a href="https://prod-scout.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-small">Live Demo</a>
                  <a href="https://github.com/Evadshell/ProdScout" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={dynamicTrafficImage} alt="Dynamic Traffic Autonomous System" />
              </div>
              <div className="project-content">
                <h3>Dynamic Traffic Autonomous System</h3>
                <p>Algorithm for dynamically adjusting traffic signal timing based on real-time data and computer vision analysis. Features special ambulance prioritization for emergency response.</p>
                <div className="project-tech">
                  <span>YOLO</span>
                  <span>OpenCV</span>
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>C++</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/darshankochar22/Dynamic-Traffic-Autonomus-System" className="btn btn-small" target="_blank" rel="noopener noreferrer">View Project</a>
                  <a href="https://github.com/darshankochar22/Dynamic-Traffic-Autonomus-System" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={inventoryImage} alt="HyperNova Project" />
              </div>
              <div className="project-content">
                <h3>HyperNova</h3>
                <p>High-performance computing platform with distributed processing capabilities. Advanced project management tool with AI-powered insights, team collaboration features, and real-time performance tracking.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>C++</span>
                  <span>CUDA</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>AI/ML</span>
                </div>
                <div className="project-links">
                  <a href="https://www.youtube.com/watch?v=ZYVOm0YOlEQ" className="btn btn-small" target="_blank" rel="noopener noreferrer">Watch Demo</a>
                  <a href="https://github.com/priyadarshi7/HyperNova" className="btn btn-small" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="hackathons">
        <div className="container">
          <h2 className="section-title">Hackathon Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="hackathon-header">
                <h3 className="hackathon-title">GHR Hacks 1.0</h3>
                <div className="hackathon-date-venue">8-9 March 2025 • GH Raisoni College, Jalgaon</div>
                <div className="hackathon-result">🏆 Winners (Code the Unexplored)</div>
                <div className="team-members">Team: Darshan Kochar, Priyadarshi Satyakam, Tejas Keshwani</div>
              </div>
              <div className="hackathon-gallery">
                <img src={ghrHacksImage1} alt="GHR Hacks Victory" />
                <img src={ghrHacksImage2} alt="GHR Hacks Team" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="hackathon-header">
                <h3 className="hackathon-title">Hack-o-Harbour</h3>
                <div className="hackathon-date-venue">22-23 March 2025 • IIIT NR, Raipur</div>
                <div className="hackathon-result">🏆 Winners</div>
                <div className="team-members">Team: Darshan Kochar, Priyadarshi Satyakam, Alisha Tripathi, Shashwati Bhattacharya</div>
              </div>
              <div className="hackathon-gallery">
                <img src={hackHarbourImage1} alt="Hack-o-Harbour Victory" />
                <img src={hackHarbourImage2} alt="Hack-o-Harbour Team" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="hackathon-header">
                <h3 className="hackathon-title">Bit2Byte</h3>
                <div className="hackathon-date-venue">27-31 March 2025 • IIIT NR, Raipur</div>
                <div className="hackathon-result">🏆 Winners</div>
                <div className="team-members">Team: Darshan Kochar, Priyadarshi Satyakam</div>
              </div>
              <div className="hackathon-gallery">
                <img src={bit2ByteImage1} alt="Bit2Byte Victory" />
                <img src={bit2ByteImage2} alt="Bit2Byte Team" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="hackathon-header">
                <h3 className="hackathon-title">HackByte-3.0</h3>
                <div className="hackathon-date-venue">4-6 April 2025 • IIITDM Jabalpur</div>
                <div className="hackathon-result">🏆 Midnight Track Winners</div>
                <div className="team-members">Team: Darshan Kochar, Priyadarshi Satyakam, Alisha Tripathi, Tejas Keshwani</div>
              </div>
              <div className="hackathon-gallery">
                <img src={hackByteImage1} alt="HackByte Victory" />
                <img src={hackByteImage2} alt="HackByte Team" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="hackathon-header">
                <h3 className="hackathon-title">Hackprix Season 2</h3>
                <div className="hackathon-date-venue">12-13 June 2025 • Lords Institute of Technology, Hyderabad</div>
                <div className="hackathon-result">🏆 Overall Winners</div>
                <div className="team-members">Team: Darshan Kochar, Priyadarshi Satyakam, Rishika Khashu</div>
              </div>
              <div className="hackathon-gallery">
                <img src={hackprixImage1} alt="Hackprix Victory" />
                <img src={hackprixImage2} alt="Hackprix Team" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="hackathon-header">
                <h3 className="hackathon-title">DSU DevHack 2.0</h3>
                <div className="hackathon-date-venue">12-13 September 2025 • DSU, Bangalore</div>
                <div className="hackathon-result">🏆 Track Winners (Best use of MongoDB)</div>
                <div className="team-members">Team: Darshan Kochar, Priyadarshi Satyakam, Alisha Tripathi</div>
              </div>
              <div className="hackathon-gallery">
                <img src={dsuDevhackImage1} alt="DSU DevHack Victory" />
                <img src={dsuDevhackImage2} alt="DSU DevHack Team" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-main-title">Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              
              <div className="contact-details">
                <p><a href="mailto:darshan23100@iiitnr.edu.in">darshan23100@iiitnr.edu.in</a></p>
                <p><a href="tel:9691457906">+91 9691457906</a></p>
                <p>Raipur, Chhattisgarh</p>
              </div>
            </div>
            
            <div className="social-section">
              <h4>Connect with me</h4>
              <div className="social-links-row">
                <a href="https://github.com/darshankochar22" className="social-link github" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon github-icon"></span>
                </a>
                <a href="https://www.linkedin.com/in/darshan-kochar-09a5402a6/" className="social-link linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon linkedin-icon"></span>
                </a>
                <a href="https://x.com/Darshankochar22" className="social-link twitter" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon twitter-icon"></span>
                </a>
                <a href="https://devfolio.co/@darshankochar" className="social-link devfolio" title="Devfolio" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon devfolio-icon"></span>
                </a>
                <a href="https://codeforces.com/profile/darshan23100" className="social-link codeforces" title="Codeforces" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon codeforces-icon"></span>
                </a>
                <a href="https://discord.com/users/darshan_56738" className="social-link discord" title="Discord" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon discord-icon"></span>
                </a>
                <a href="https://www.youtube.com/@DarshanKochar-v8s" className="social-link youtube" title="YouTube" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon youtube-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Darshan Kochar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
