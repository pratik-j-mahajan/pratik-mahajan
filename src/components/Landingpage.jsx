import React, { useState, useEffect } from "react";
import "./Landingpage.css";
import ParticleBackground from "./ParticleBackground";



function LandingPage({ onSeeAllProjects, onSeeMoreActivities }) {
  const [showAll, setShowAll] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  useEffect(() => {
    const elements = document.querySelectorAll("#magnet, #gif0"); // multiple elements
    const strength = 15;
    const radius = 60;

    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    const run = () => {
      ticking = false;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offsetX = lastX - (rect.left + rect.width / 2);
        const offsetY = lastY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

        if (distance < radius) {
          const moveX = (offsetX / radius) * strength;
          const moveY = (offsetY / radius) * strength;
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          el.style.transform = `translate(0px, 0px)`;
        }
      });
    };

    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    elements.forEach((el) => el.addEventListener("mouseleave", handleMouseLeave, { passive: true }));

    return () => {
      window.removeEventListener("mousemove", onMove);
      elements.forEach((el) => el.removeEventListener("mouseleave", handleMouseLeave));
    };
  }, []);







  return (
    <>
      {/* 1) Hero with video (100vh) */}
      <section className="landing" id="home" data-dark="true">
        <video autoPlay loop muted playsInline preload="auto" className="video-bg">
          <source src="https://res.cloudinary.com/dphe5xhwj/video/upload/v1765006554/v22_fqhc6v.mp4" type="video/mp4" />
        </video>

        <div className="overlay">
          <h3>Hello I’m...</h3>
          <h1>Pratik Mahajan</h1>
          <div className="box">
            <p className="box-p">Student | Web-Developer | Analyst | Digital Marketing</p>
          </div>
        </div>
      </section>

      {/* 2) Full image section (100vh) */}
      <section className="hero-section" id="about" data-dark="true">
        <div className="hero-top"></div>
        <div className="hero-content-wrapper">
          <div className="image-cursor-wrapper">
            <div className="image-box">
              <img src="/picc.png" alt="Design Preview" className="image" />
              <div className="custom-cursor" />
            </div>
          </div>

          <div className="hero-text-content">
            <h1>
              Hi, I’m <span className="highlight-name">Pratik</span> <br />
              A Computer Science <span className="highlight-role">Student</span>
            </h1>
            <p>
              I'm learning new tech skills across different domains and always exploring something fresh. This portfolio is just a space to share what I build and how I think. I'm not perfect at everything yet, but I'm growing every day using different tools, tech, and AI to improve my work. I believe meaningful collaboration helps ideas grow when knowledge is shared.
              Let's connect and have some good learning conversations along the way.
            </p>
            <button id="magnet" className="cta-button" onClick={scrollToContact}>Let's Connect</button>
          </div>
        </div>

        <div className="card-container">
          {/* Left Section */}
          <div className="card-left">
            <p>I’m learning new tech skills across different domains and always exploring something fresh. This portfolio is just a space to share what I build and how I think. I’m not perfect at everything yet, but I’m growing every day using different tools, tech, and AI to improve my work. I believe meaningful collaboration helps ideas grow when knowledge is shared.
              Let’s connect and have some good learning conversations along the way.</p>

          </div>

          <div className="midd"></div>

          {/* Right Section */}
          <div className="card-right">
            <p>Skills,
              I can say i'm quite good at</p>

            <div className="small-images-grid">
              <div className="small-img">
                <img src="/react.png" alt="img1" />
              </div>
              <div className="small-img">
                <img src="/js.png" alt="img2" />
              </div>
              <div className="small-img">
                <img src="/sql.png" alt="img3" />
              </div>
              <div className="small-img">
                <img src="/nodejs.png" alt="img4" />
              </div>
              <div className="small-img">
                <img src="/html.png" alt="img5" />
              </div>
              <div className="small-img">
                <img src="/css.png" alt="img6" />
              </div>
              <div className="small-img">
                <img src="/figma.png" alt="img7" />
              </div>
              <div className="small-img">
                <img src="/tailwind1.png" alt="img8" />
              </div>
              <div className="small-img">
                <img src="/tableau.png" alt="img9" />
              </div>
              <div className="small-img">
                <img src="/redux.png" alt="img10" />
              </div>
              <div className="small-img">
                <img src="/next.png" alt="img11" />
              </div>
              <div className="small-img">
                <img src="/fastapi.png" alt="img12" />
              </div>
              <div className="small-img skill-loading">
                <div className="spinner"></div>
              </div>
              <div className="small-img skill-loading">
                <div className="spinner"></div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* 3) New video grid section (40vh) */}
      <section className="video-grid-section">
        <div className="video-grid">
          {/* <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a
        href="https://twitter.com/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn"
      >
        <i className="fab fa-twitter"></i>
      </a>

      <a
        href="https://www.instagram.com/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="icon-btn"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div> */}

          <div className="headline"></div>
        </div>
      </section>





      {/* 4) Card section (230vh) */}
      <section className="card-section" id="projects" data-dark="true">
        <ParticleBackground variant="connect" />

        <h2 className="card-heading">Projects</h2>
        <p className="card-para">
          Tried, broke, fixed, learned, retried,<br />finally doing something right.
        </p>

        <div className="card-grid ">
          <a href="https://github.com/pratik-j-mahajan/AI-based-SAAS" target="_blank" className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dphe5xhwj/image/upload/paisa_.webp" alt="paisa+" />
            </div>
            <h3>"Paisa+" A finance & management app </h3>
            <p>An all-in-one AI-powered platform for personal finance management featuring expense tracking, budget planning, investment insights, and automated financial reporting with smart analytics.</p>
            <div className="skill-icons">
              <img src="/react.png" alt="React" />
              <img src="/nodejs.png" alt="Node.js" />
              <img src="/taildind.png" alt="Express" />
              <img src="/css.png" alt="MongoDB" />
              <img src="/js.png" alt="Tailwind CSS" />
              <img src="/sql.png" alt="OpenAI" />
              <img src="/figma.png" alt="GitHub" />
              <img src="/react.png" alt="AWS" />
            </div>
          </a>

          <a href="https://your-project-link2.com" target="_blank" className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dphe5xhwj/image/upload/krishi_mitra.webp" alt="Krishi Mitra" />
            </div>
            <h3>Krishi Mitra</h3>
            <p>Comprehensive agricultural platform connecting farmers with markets, equipment rentals, expert advice, and logistics. Features AI-powered crop recommendations and real-time marketplace for buying and selling produce.</p>
            <div className="skill-icons">
              <img src="/react.png" alt="React" />
              <img src="/js.png" alt="JavaScript" />
              <img src="/typescript.png" alt="TypeScript" />
              <img src="/nodejs.png" alt="Node.js" />
              <img src="/mongodb.png" alt="MongoDB" />
              <img src="/next.png" alt="Next.js" />
              <img src="/gemini.png" alt="Gemini AI" />
            </div>
          </a>

          <a href="https://your-project-link3.com" target="_blank" className="card">
            <div className="card-image">
              <img src="/realty1.png" alt="Genora One" />
            </div>
            <h3>Genora One</h3>
            <p>Modern real estate platform with intuitive property search, virtual tours, and seamless user experience. Built with responsive design and smooth animations for enhanced property browsing.</p>
            <div className="skill-icons">
              <img src="/react.png" alt="React" />
              <img src="/nodejs.png" alt="Node.js" />
              <img src="/taildind.png" alt="Express" />
              <img src="/css.png" alt="MongoDB" />
              <img src="/js.png" alt="Tailwind CSS" />
              <img src="/sql.png" alt="OpenAI" />
              <img src="/figma.png" alt="GitHub" />
              <img src="/react.png" alt="AWS" />
            </div>
          </a>


          <a href="https://public.tableau.com/views/EarthquakeIndepthAnalysis/EarthquakeFrom1900-2014?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" className="card">
            <div className="card-image">
              <img src="/earth.png" alt="Data Analysis" />
            </div>
            <h3>Earthquake Indepth Analysis</h3>
            <p>Comprehensive data analysis and visualization of earthquake patterns from 1900-2014.
            </p>
            <div className="skill-icons">
              <img src="/tableau.png" alt="Tableau" />
              <img src="/sql.png" alt="SQL" />
            </div>
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", position: "relative", zIndex: 100 }}>
          <button
            id="seeall"
            className="cta-button-card"
            onClick={() => onSeeAllProjects && onSeeAllProjects()}
          >
            See All Projects
          </button>
        </div>
      </section>


      {/* Extra Curricular Activities */}
      <section className="featured-news" id="activities" data-follower-color="black-dot">
        <ParticleBackground variant="connect" colorTheme="gray" />
        <div className="hero-toop"></div>

        <div className="featured-header">
          <h2 className="featured-title">
            EXTRA CURRICULAR <br />ACTIVITIES..
          </h2>
          <p className="featured-subtitle">
            Explore the latest updates, insights, and projects shaping the future.
          </p>
        </div>

        {/* Only 2 visible cards */}
        <div className="news-container">
          <div className="news-item">
            <div className="news-img" style={{ backgroundImage: "url('/vice.jpg')" }}></div>
            <div className="news-content">
              <h2>VICE PRESIDENT</h2>
              <p className="news-text">
                Appointed as Vice-President of the I2IC-TPO Student Council (2024-25),
                leading 140+ council members and successfully organizing major
                initiatives including alumni meets (Saturday Clubs), a 30-hour mega
                hybrid hackathon (Nirmaan), multiple department-level hackathons,
                guidance sessions, and more.
              </p>
            </div>
          </div>

          <div className="news-item">
            <div className="news-img" style={{ backgroundImage: "url('/images/finance.jpg')" }}></div>
            <div className="news-content">
              <h2>Finance & Sponsorship Secretary</h2>
              <p className="news-text">
                For Gandharva-2025, the college annual fest, I was appointed to the
                key role of Finance & Sponsorship In-charge. Successfully onboarded
                major brands such as Ather, Red Bull, Lenovo, and others for
                sponsorship, while managing all financial distribution and
                documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Button to see more */}
        <div className="see-more-btn-container">
          <button
            id="seeall"
            className="see-more-btn"
            onClick={() => {
              if (onSeeMoreActivities) {
                onSeeMoreActivities();
              } else {
                window.location.href = '/extraactivity';
              }
            }}
          >
            See All Activities
          </button>
        </div>
      </section>






      {/* Resume and Connect */}
      <div className="landing-layers" data-dark="true">

        <section className="resume-section">
          <div className="resume-content">
            <h2 className="resume-title">Resume</h2>
            <p className="resume-desc">
              A quick glimpse into my professional journey, skills, and achievements —
              crafted with experience and dedication. Download my resume below.
            </p>
            <a
              href="https://github.com/pratik-j-mahajan/resume.git"
              download
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </section>



        <div className="connect-headline">
          <ParticleBackground variant="connect" colorTheme="gray" />
          <h1>
            <span className="pink">Connect.</span>
            <span className="blue"> Discuss.</span>
            <span className="green"> Progress.</span>
          </h1>
        </div>
      </div>

      {/* Footer */}
      <section className="footer-section" id="contact" data-dark="true">
        <ParticleBackground variant="connect" colorTheme="blue" />
        <div className="footer-left">
          <h2 className="footer-title">Let's Connect</h2>

          {/* Email */}
          <div className="footer-contact-item">
            <span className="footer-label">Email:</span>
            <span className="footer-icon" aria-hidden="true">📧</span>
            <a
              href="mailto:mahajanpratik0612@gmail.com"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              mahajanpratik0612@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="footer-contact-item">
            <span className="footer-label">Phone:</span>
            <span className="footer-icon" aria-hidden="true">📞</span>
            <a href="tel:+917841099907" className="footer-link">
              +91 7841099907
            </a>
          </div>

          {/* Social Label */}
          <h3 className="footer-subtitle">My Socials</h3>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/pratik-j-mahajan/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>

            <a
              href="https://www.instagram.com/pratik_j_mahajan?igsh=MTdyNmprYTU4d2s4bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="/instagram.png" alt="Instagram" />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="/twitter.png" alt="Twitter" />
            </a>

            <a
              href="https://wa.me/917841099907"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="/whatsapp.png" alt="whatsapp" />
            </a>
          </div>
        </div>


        <div className="info-section"></div>

        <div className="footer-right">
          <div className="gif-grid">
            <div id="gif0" className="gif-box">
              <img src="/linklogo.gif" alt="gif1" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/emaillogo.gif" alt="gif2" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/calllogo.gif" alt="gif3" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/calllogo.gif" alt="gif4" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/linklogo.gif" alt="gif5" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/emaillogo.gif" alt="gif6" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/emaillogo.gif" alt="gif7" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/calllogo.gif" alt="gif8" />
            </div>
            <div id="gif0" className="gif-box">
              <img src="/linklogo.gif" alt="gif9" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
