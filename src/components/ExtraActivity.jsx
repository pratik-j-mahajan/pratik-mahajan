import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ExtraActivity.css"; // use standalone styles to avoid affecting Projects UI
import ParticleBackground from "./ParticleBackground";

function ExtraActivity({ onBack }) {
  const activities = [
    { title: "Vice President", img: "/vice.jpg", desc: "Appointed as Vice-President of the I2IC-TPO Student Council (2024-25), leading 140+ council members and successfully organizing major initiatives including alumni meets (Saturday Clubs), a 30-hour mega hybrid hackathon (Nirmaan), multiple department-level hackathons, guidance sessions, and more.", link: "https://www.linkedin.com/in/pratik-j-mahajan/" },
    { title: "Finance & Sponsorship Secretary", img: "/award.jpeg", desc: "For Gandharva-2025, the college annual fest, I was appointed to the key role of Finance & Sponsorship In-charge. Successfully onboarded major brands such as Ather, Red Bull, Lenovo, and others for sponsorship, while managing all financial distribution and documentation.", link: "https://www.linkedin.com/in/pratik-j-mahajan/" },
    { title: "Award Recognition", img: "/award.jpeg", desc: "Awarded by the National Institute of Event Management (NIEM) as the “Event Manager of the Year (EMY)” for 2024–2025 for successfully managing multiple events across My institute level, and received the trophy from college faculty in recognition of my contributions.", link: "https://www.linkedin.com/in/pratik-j-mahajan/" },
    { title: "Industry Submit", img: "/hyatt.jpeg", desc: "Participated in the Indo-French Chamber’s Regional Industry Summit held at Hyatt Pune, learned from various industry leaders, and actively applied the insights gained to real-world scenarios.", link: "https://www.linkedin.com/in/pratik-j-mahajan/" },
    { title: "Techathon-2025", img: "/techathon.jpeg", desc: "Participated and competed till the tie-breaker round in Techathon 2.0, a national-level 24-hour hackathon, where we competed with students from across the country and significantly enhanced my technical abilities and time-management skills.", link: "https://www.linkedin.com/in/pratik-j-mahajan/" },
  ];

  return (
    <div className="extra-page">
      <ParticleBackground variant="connect" colorTheme="white" />
      {/* Back Button */}
      <button
        type="button"
        className="extra-back-button"
        onClick={() => {
          if (onBack) onBack();
        }}
      >
        ← Back
      </button>

      {/* Header */}
      <div className="extra-header">
        <h2 className="extra-title">Extra Curricular<br />Activities</h2>
        <p className="extra-subtitle">
          A glimpse into roles, events, and contributions beyond academics.
        </p>
      </div>

      {/* Cards (same animations, with own class names) */}
      <div className="extra-container">
        {activities.map((item, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { margin: "-35% 0px -35% 0px" });

          return (
            <motion.div
              ref={ref}
              key={idx}
              className="extra-card"
              initial={{ opacity: 0.5, scale: 0.92, rotateX: -18, y: 10 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1.1, rotateX: 0, y: 0, z: 0 }
                  : { opacity: 0.3, scale: 0.92, rotateX: -20, y: 10, z: -120 }
              }
              transition={{ duration: 0.7, ease: [0.36, 0.66, 0.36, 1] }}
            >
              <div className="extra-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="extra-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {/* No skills row on this page */}
                {item.link && (
                  <a href={item.link} className="extra-link" target="_blank" rel="noreferrer">
                    View Details →
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* More activities coming */}
      <div className="more-activities-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  );
}

export default ExtraActivity;
