import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container, Content as StyledContent, SectionTitle, ProjectsGrid, ProjectCard, ProjectHeader, ProjectBody, ProjectFooter, TechTags, ExternalLink } from './styles';

const Content = motion(StyledContent);

const projects = [
  {
    title: 'AI-Powered Market Research Platform',
    description: 'Developed a comprehensive market research application using React, FastAPI, and LangChain with multi-agent AI system. Implemented LLaMA integration via Groq API for intelligent report generation and competitive analysis. Designed RESTful API architecture with SQLite database, Pydantic validation, and Pinecone vector storage. Created modular multi-agent system featuring Scout, Synthesizer, Critic, and Reporter agents for automated data processing.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Groq AI', 'Pinecone', 'React'],
    github: 'https://github.com/arslanrajpot/Research_analyst',
    external: null,
  },
  {
    title: 'YouTube Talker - AI-Powered Video Content Analyst',
    description: 'Developed intelligent web application enabling natural language interaction with YouTube video content through automated transcript extraction and RAG-based question answering. Implemented RESTful API endpoints using Flask framework with modular service architecture. Built advanced RAG pipeline integrating LangChain, Google Gemini AI, and FAISS vector database for semantic search and contextual content understanding.',
    tech: ['Python', 'Flask', 'LangChain', 'Google Gemini AI', 'FAISS', 'YouTube API', 'Whisper AI', ],
    github: 'https://github.com/arslanrajpot/ai-youtube-video-chatbot',
    external: null,
  },
  {
    title: 'Insight Chatbot',
    description: 'This project is an intelligent document-questioning system built with LangChain and FAISS. It processes user queries, retrieves the most relevant parts of an uploaded document, and generates accurate AI-driven answers. The system also uses conversational memory and automated question refinement to improve response quality. Perfect for insights extraction from long PDF files.',
    tech: ['ReactJS', 'Django REST Framework', 'LangChain', 'FAISS', 'Grok AI'],
    github: 'https://github.com/arslanrajpot/InsightRAG-Chatbot-',
    external: null,
  },
  {
    title: 'TAMEER',
    description: 'Tameer represents my final year project, aimed at providing tailored solutions for large-scale house builders. With its capabilities to efficiently manage resources and monitor project progress, it significantly elevates the standards of construction project management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/arslanrajpot/Tameer.git',
    external: null,
  },
  {
    title: 'BUY-HIVE',
    description: 'BuyHive is a MERN stack project to test my knowledge and build up my skills into that technology. Basically I developed a complex search page of actually available website named buyhive.',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    github: 'https://github.com/arslanrajpot/buyhive.git',
    external: null,
  },
  {
    title: 'More Projects on GitHub',
    description: 'I\'ve crafted numerous projects utilizing various tech stacks including MERN, Python, and Java. These projects include Ecommerce Store, Hospital Management, Library Management Systems, and mobile applications. You can explore these projects on my GitHub repository.',
    tech: ['MERN', 'Python', 'Java', 'MySQL'],
    github: 'https://github.com/arslanrajpot/',
    external: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <Content
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle>
            <span className="number">04.</span>
            Featured Projects
          </SectionTitle>
        </motion.div>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard>
                <ProjectHeader>
                  <div className="folder-icon">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <ExternalLink
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </ExternalLink>
                    )}
                    {project.external && (
                      <ExternalLink
                        href={project.external}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="External Link"
                      >
                        <FaExternalLinkAlt />
                      </ExternalLink>
                    )}
                  </div>
                </ProjectHeader>

                <ProjectBody>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </ProjectBody>

                <ProjectFooter>
                  <TechTags>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </TechTags>
                </ProjectFooter>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </Content>
    </Container>
  );
};

