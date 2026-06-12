import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container, Content as StyledContent, SectionTitle, ProjectsGrid, ProjectCard, ProjectHeader, ProjectBody, ProjectFooter, TechTags, ExternalLink } from './styles';

const Content = motion(StyledContent);

const projects = [
  {
    title: 'AI-Powered Market Research Platform',
    description: 'Designed a multi-agent AI platform using LangGraph that autonomously plans research, collects evidence, and generates structured market analysis reports. Implemented an end-to-end RAG pipeline with Pinecone to ground LLaMA responses via Groq API in business data and reduce hallucination. Built a modular FastAPI backend with Pydantic validation and service-agent separation, integrated with a React frontend.',
    tech: ['FastAPI', 'React', 'LangChain', 'LangGraph', 'Pinecone', 'Groq API', 'LLaMA'],
    github: 'https://github.com/arslanrajpot/Research_analyst',
    external: null,
  },
  {
    title: 'YouTube Talker - AI Video Content Analyst',
    description: 'Built an end-to-end AI workflow that extracts YouTube transcripts, indexes them with FAISS embeddings, and enables natural language querying over long-form video content. Integrated Google Gemini for context-aware response generation over retrieved transcript chunks for accurate, grounded answers. Created a real-time chat experience to significantly reduce video research time.',
    tech: ['Flask', 'LangChain', 'Google Gemini', 'FAISS', 'YouTube Data API'],
    github: 'https://github.com/arslanrajpot/ai-youtube-video-chatbot',
    external: null,
  },
  {
    title: 'InsightRAG - Self-Grading Document Q&A Agent',
    description: 'Built a self-correcting RAG agent with LangGraph that rewrites queries, grades retrieved context, and automatically refines retrieval when evidence is insufficient instead of answering blindly. Designed a multi-signal confidence scoring model combining vector similarity, lexical overlap, and LLM-based relevance grading to route low-confidence answers to explicit fallbacks and reduce hallucination risk.',
    tech: ['FastAPI', 'LangGraph', 'LangChain', 'FAISS', 'Groq'],
    github: 'https://github.com/arslanrajpot/',
    external: null,
  },
  {
    title: 'Genuity - Project Management SaaS Platform',
    description: 'Built a Jira-inspired SaaS platform with sprint boards, task management, and role-based access control for multi-member teams. Designed scalable PostgreSQL schemas and REST APIs to support a dynamic React frontend with robust state management and a responsive UX.',
    tech: ['Django REST Framework', 'ReactJS', 'PostgreSQL', 'RBAC', 'REST APIs'],
    github: 'https://github.com/arslanrajpot/',
    external: null,
  },
  {
    title: 'More Projects on GitHub',
    description: 'Explore additional production and learning projects across Python, JavaScript, and Java, including web apps, API systems, and AI experiments.',
    tech: ['Python', 'JavaScript', 'Java', 'Full-Stack Development'],
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

