import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import {
  Container,
  RoleList,
  RoleRow,
  RoleMeta,
  RoleContent,
  BulletList,
  TechTags,
  EducationBox,
} from './styles';

const experiences = [
  {
    company: 'Kinetic Intelligence',
    role: 'Senior Software Engineer, Backend & AI Architecture',
    date: 'DEC 2024 – PRESENT',
    place: 'Remote (Dubai, UAE)',
    description: [
      'Lead backend and AI-integration engineering for a 4-service microservices platform (Django + FastAPI), each independently deployed to AWS EKS via Bitbucket → ECR → kubectl.',
      'Architected the identity trust model: the core identity service issues JWTs that the other three services decode independently via shared-secret middleware, removing per-request auth calls.',
      'Own the AI-chatbot bridging layer: per-profile/per-sport freemium quota enforcement, session and chat-history management, and rolling context assembly sent to a generative AI coaching assistant.',
      'Diagnosed and resolved a production database connection-pool exhaustion incident by splitting API, Celery worker, and beat processes into separate deployments with tuned pool sizes.',
      'Direct system design reviews and mentor engineers across the backend team.',
    ],
    technologies: ['Django', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'MongoDB', 'JWT', 'Kubernetes', 'AWS EKS'],
  },
  {
    company: 'Inovaqo',
    role: 'Full-Stack Software Engineer, AI & Data Systems',
    date: 'JAN 2023 – DEC 2024',
    place: 'Lahore, Pakistan',
    description: [
      'Engineered a production multi-agent AI research system using LangGraph with autonomous planning, retrieval, tool orchestration, and structured reporting — reduced manual market research workflows from 4+ hours to under 10 minutes, deployed across 8+ enterprise clients.',
      'Built an end-to-end RAG pipeline using LangChain and Pinecone for semantic search, reducing query latency from 3.2s to 800ms through semantic chunking and intelligent context ranking.',
      'Improved API performance by an estimated 35% across high-traffic endpoints through systematic profiling, selective indexing, Celery/Redis async processing, and ORM optimization that eliminated N+1 query patterns.',
      'Implemented a scalable multi-tenant SaaS backend with database-level tenant isolation and tenant-scoped RBAC; integrated Stripe, Plaid, and Twilio across 12+ payment and verification flows with JWT/OAuth2 authentication.',
    ],
    technologies: ['LangGraph', 'LangChain', 'Pinecone', 'Django REST Framework', 'FastAPI', 'Celery', 'AWS'],
  },
  {
    company: 'CodingCops',
    role: 'Software Engineer',
    date: 'NOV 2019 – DEC 2022',
    place: 'Lahore, Pakistan',
    description: [
      'Built and shipped 8+ full-stack web and mobile applications using Django REST Framework and ReactJS, owning the complete feature lifecycle from requirements through production deployment across e-commerce, SaaS, and marketplace domains.',
      'Designed normalized PostgreSQL and MySQL schemas optimized for high-traffic patterns and established reusable REST API contracts and React component libraries adopted across concurrent client projects.',
      'Conducted peer code reviews and contributed to sprint planning and architecture decisions, establishing engineering best practices around testing, documentation, and code quality.',
    ],
    technologies: ['Django REST Framework', 'ReactJS', 'PostgreSQL', 'MySQL', 'Agile/Scrum'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Experience: React.FC = () => {
  return (
    <Container id="experience">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <SectionHeader
            index={4}
            total={6}
            label="Experience"
            title="From contributor to lead."
            description="Six-plus years, three teams, one through-line: owning the stack and raising the engineering bar around it."
          />
        </motion.div>

        <RoleList>
          {experiences.map(exp => (
            <motion.div key={exp.company} variants={itemVariants}>
              <RoleRow>
                <RoleMeta>
                  <span className="dates mono">{exp.date}</span>
                  <span className="company disp">{exp.company}</span>
                  <span className="place">{exp.place}</span>
                </RoleMeta>
                <RoleContent>
                  <h3>{exp.role}</h3>
                  <BulletList>
                    {exp.description.map(text => (
                      <div className="item" key={text}>
                        <span className="dot" />
                        <p>{text}</p>
                      </div>
                    ))}
                  </BulletList>
                  <TechTags>
                    {exp.technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </TechTags>
                </RoleContent>
              </RoleRow>
            </motion.div>
          ))}
        </RoleList>

        <motion.div variants={itemVariants}>
          <EducationBox>
            <div className="label">
              <span className="heading mono">Education</span>
              <span className="title disp">Bachelor of Science in Software Engineering</span>
            </div>
            <div className="body">
              <span className="school">Punjab University College of Information and Technology (PUCIT)</span>
              <span className="place">Lahore, Pakistan</span>
              <span className="coursework">
                Relevant coursework: Software Architecture, Database Systems, Web Engineering, Object-Oriented
                Programming, Data Structures &amp; Algorithms.
              </span>
            </div>
          </EducationBox>
        </motion.div>
      </motion.div>
    </Container>
  );
};
