import React from 'react';
import { motion } from 'framer-motion';
import { Container, Content as StyledContent, SectionTitle, Timeline, TimelineItem, TimelineContent, TimelineHeader, TimelineDate, TimelineCompany, TimelineRole, TimelineDescription, TechTags } from './styles';

const Content = motion(StyledContent);

const experiences = [
  {
    company: 'Inovaqo',
    role: 'Full Stack Software Engineer',
    date: 'Jan 2025 – Present',
    description: [
      'Designed and developed full-stack applications with a backend focus using Django REST Framework and FastAPI, and ReactJS for interactive, scalable frontends.',
      'Built and optimized RESTful APIs, database models, and caching layers to ensure secure, high-performance system integration.',
      'Engineered AI-driven features including LLM-powered chatbots, RAG pipelines, and intelligent search systems by integrating LangChain, LangGraph, and vector databases.',
      'Implemented Agentic AI workflows with multi-agent orchestration, enabling autonomous task execution and decision support across applications.',
      'Collaborated with product, AI, and frontend teams to deliver production-ready GenAI solutions with seamless UI/UX and scalable cloud deployment.',
    ],
    technologies: ['Python', 'Django REST Framework', 'FastAPI', 'ReactJS', 'LangChain', 'LangGraph', 'PostgreSQL', 'RAG Pipelines', 'LLM Integration'],
  },
  {
    company: 'Coding Cops',
    role: 'Associate Software Engineer',
    date: 'March 2024 – Jan 2025',
    description: [
      'Developed and maintained full-stack web applications using Django (REST Framework) for backend and ReactJS for frontend.',
      'Designed and integrated RESTful APIs to enable efficient communication between frontend and backend systems.',
      'Implemented state management in React to enhance application performance, scalability, and maintainability.',
      'Collaborated with cross-functional teams to deliver responsive, interactive, and user-friendly web applications.',
    ],
    technologies: ['Python', 'Django REST Framework', 'ReactJS', 'JavaScript', 'RESTful APIs', 'State Management'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Experience: React.FC = () => {
  return (
    <Container id="experience">
      <Content
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle>
            <span className="number">02.</span>
            Experience
          </SectionTitle>
        </motion.div>

        <Timeline>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TimelineItem>
                <TimelineHeader>
                  <TimelineRole>{exp.role}</TimelineRole>
                  <TimelineCompany>{exp.company}</TimelineCompany>
                  <TimelineDate>{exp.date}</TimelineDate>
                </TimelineHeader>
                <TimelineContent>
                  <TimelineDescription>
                    <ul>
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </TimelineDescription>
                  <TechTags>
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </TechTags>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </Content>
    </Container>
  );
};

