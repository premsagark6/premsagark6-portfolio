import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        ><summary></summary>
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 PREM SAGAR K
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              Bengaluru, India 560061 | +91 8549013373 | premsagark6@gmail.com | linkedin.com/in/premsagark6
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Frontend & Backend Web Developer with 3+ years of experience building production-ready, responsive, and
              scalable web applications for real-world business use cases. Proven experience in custom web development,
              WordPress theme customization, backend systems, and cloud hosting deployments. Strong expertise in HTML, CSS,
              JavaScript, PHP, React, Node.js, MongoDB, and hands-on experience deploying applications on GoDaddy and
              Hostinger. Currently upskilling in Java Spring Boot for enterprise backend development.
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              marginTop: 24,
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "20px 24px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
              💼 Work Experience
            </h4>
            <div style={{ marginBottom: 24 }}>
              <h5 style={{ fontSize: 18, color: "#00b4ff", marginBottom: 4 }}>
                Daterrayield | Full Stack Developer
              </h5>
              <p style={{ margin: "2px 0", fontSize: 14, color: "#aaa" }}>
                Bengaluru, India | July 2025 – Present
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, marginTop: 8, lineHeight: 1.6 }}>
                <li>Architecting and developing full-stack web applications using the MERN stack, ensuring high performance and responsiveness.</li>
                <li>Designing reusable UI components with Tailwind CSS, reducing frontend development time by 20%.</li>
                <li>Implementing secure RESTful APIs with JWT authentication and role-based access control.</li>
                <li>Collaborating with cross-functional teams to design scalable application architectures and database schemas in MongoDB.</li>
                <li>Optimizing application performance through code splitting and efficient backend query handling.</li>
              </ul>
            </div>
            <div>
              <h5 style={{ fontSize: 18, color: "#00b4ff", marginBottom: 4 }}>
                Cear Tech Solutions Pvt Ltd | Associate Software Engineer
              </h5>
              <p style={{ margin: "2px 0", fontSize: 14, color: "#aaa" }}>
                Bengaluru, India | April 2023 – July 2025
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, marginTop: 8, lineHeight: 1.6 }}>
                <li>Developed and maintained dynamic web interfaces using HTML5, CSS3, and JavaScript.</li>
                <li>Built and customized WordPress websites, managing end-to-end theme development and plugin integration.</li>
                <li>Engineered backend functionalities using PHP and managed database migrations.</li>
                <li>Spearheaded deployment processes on GoDaddy and Hostinger platforms, ensuring 99.9% uptime for client sites.</li>
                <li>Improved site visibility by implementing SEO-friendly structures and cross-browser compatibility fixes.</li>
                <li>Conducted rigorous debugging and maintenance to optimize site load speeds and security.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Bachelor of Engineering in Computer Science and Engineering</strong> — K S School of Engineering And Management, AUG 2017 - JAN 2023
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Key Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Real Estate (Farms) – MERN Stack Project</strong><br />
              Developed a full-stack task management and listing application using React and Node.js.
              Integrated MongoDB for data persistence and implemented a mobile-first UI using Tailwind CSS.
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Real Estate Web Application – PHP/Full Stack</strong><br />
              Built a dynamic platform featuring project listings, enquiry forms, and blog integration.
              Successfully deployed the live production environment on Hostinger, managing all DNS and server configurations.
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Advanced UI Library</strong><br />
              Created a suite of reusable components including sticky search bars, calculators (EMI, Budget), and area converters
              to streamline future project builds.
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "PHP",
              "MongoDB",
              "MySQL",
              "Git",
              "WordPress",
              "GoDaddy",
              "Hostinger",
              "SEO",
              "Java Spring Boot",
              "Tailwind CSS",
              "RESTful APIs",
              "JWT Authentication",
              "Role-based Access Control",
              "Database Design",
              "Performance Optimization",
              "Debugging",
              "Full-Stack Development",
              "Custom Web Development",
              "WordPress Theme Customization",
              "Backend Systems",
              "Cloud Hosting Deployments",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/premsagark6" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/premsagark6" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Prem Sagar Resume"
            style={{
              width: "100%",
              height: "80vh",
              minHeight: "500px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
