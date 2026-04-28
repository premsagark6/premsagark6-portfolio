import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const FULLSTACK_PROJECTS = [
  {
    title: '🌐 Avya Builders Website',
    desc: 'Developed a full stack website using HTML, CSS, JavaScript, and PHP for Avya Builders.',
    ss: '/avyabuilders.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    live: 'https://www.avyabuilders.com/',
    code: '#'
  },
  {
    title: '🌾 Avya Farms Website',
    desc: 'Full stack website for Avya Farms using HTML, CSS, JavaScript, and PHP.',
    ss: '/avyafarms.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    live: 'https://www.avyabuilders.com/avya-farms/',
    code: '#'
  },
  {
    title: '📱 Indafone Website',
    desc: 'Full stack website for Indafone using HTML, CSS, JavaScript, and PHP.',
    ss: '/indafone.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    live: 'https://www.indafone.com/',
    code: '#'
  }
]

const WORDPRESS_PROJECTS = [
  {
    title: '🍴 Avya Foods Website',
    desc: 'WordPress website development for Avya Foods.',
    ss: '/avyafoods.jpg',
    tech: ['WordPress'],
    live: 'https://avyafoods.com/',
    code: '#'
  },
  {
    title: '🏠 Housiey Website',
    desc: 'WordPress website development for Housiey.',
    ss: '/housiey.jpg',
    tech: ['WordPress'],
    live: 'https://housiey.com/',
    code: '#'
  },
  {
    title: '📱 Luv Mobiles Website',
    desc: 'WordPress website development for Luv Mobiles.',
    ss: '/luvmobiles.jpg',
    tech: ['WordPress'],
    live: 'https://luvmobiles.com/',
    code: '#'
  },
  {
    title: '📚 Green Books Website',
    desc: 'WordPress website development for Green Books.',
    ss: '/greenbooks.jpg',
    tech: ['WordPress'],
    live: 'https://greenbooks.difuzelabs.com/',
    code: '#'
  }
]

const SHOPIFY_PROJECTS = [
  {
    title: '👗 Athiva Sarees E-Commerce Store',
    desc: 'Shopify-based e-commerce website for Athiva Sarees.',
    ss: '/athivasarees.jpg',
    tech: ['Shopify'],
    live: 'https://www.athivasarees.com/',
    code: '#'
  }
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('fullstack');
  const currentProjects = activeTab === 'fullstack' ? FULLSTACK_PROJECTS : activeTab === 'wordpress' ? WORDPRESS_PROJECTS : SHOPIFY_PROJECTS;

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          {['fullstack', 'wordpress', 'shopify'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                border: activeTab === tab ? '1px solid #0ea5e9' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === tab ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                color: activeTab === tab ? '#0ea5e9' : '#aaa',
                fontSize: 14,
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'fullstack' ? 'Full Stack' : tab}
            </motion.button>
          ))}
        </div>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {currentProjects.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
