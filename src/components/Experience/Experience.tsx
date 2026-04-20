import React from 'react';
import { motion } from 'framer-motion';
import { Container, Content as StyledContent, SectionTitle, Timeline, TimelineItem, TimelineContent, TimelineHeader, TimelineDate, TimelineCompany, TimelineRole, TimelineDescription, TechTags } from './styles';

const Content = motion(StyledContent);

const experiences = [
  {
    company: 'Kintetic Intelligence',
    role: 'Senior Software Engineer',
    date: 'Jan 2026 – Present',
    description: [
      'Engineered full-stack features using Django and ReactJS for a US-based security and investigations SaaS platform in a distributed remote team.',
      'Shipped production-ready Generative AI capabilities, including LLM-powered case analysis workflows and prompt pipelines that reduced manual analyst effort.',
      'Designed high-throughput REST APIs with sub-100ms response targets for complex investigative data queries at scale.',
      'Improved API performance by 40% by introducing Redis caching, query optimization, and targeted indexing.',
      'Raised engineering quality through rigorous PR reviews, clean architecture patterns, and async cross-timezone collaboration.',
    ],
    technologies: ['Django', 'ReactJS', 'Python', 'Redis', 'PostgreSQL', 'LLMs', 'Prompt Engineering', 'REST APIs'],
  },
  {
    company: 'Inovaqo',
    role: 'Full Stack Software Engineer',
    date: 'Jan 2025 – Jan 2026',
    description: [
      'Architected a multi-tenant SaaS backend with Django REST Framework and FastAPI using isolated customer environments and role-based access control.',
      'Built async background processing with Celery and Redis, plus real-time bidirectional features through Django Channels (WebSockets).',
      'Integrated Stripe, Plaid, and Twilio into production APIs while enforcing security with JWT and Google OAuth2.',
      'Delivered a 35% API performance improvement through query profiling, selective indexing, and layered Redis caching.',
      'Built RAG-powered intelligent search with LangChain and Pinecone, and created multi-agent workflows in LangGraph for research automation.',
    ],
    technologies: ['Django REST Framework', 'FastAPI', 'Celery', 'Redis', 'Django Channels', 'LangChain', 'LangGraph', 'Pinecone', 'AWS'],
  },
  {
    company: 'Coding Cops',
    role: 'Associate Software Engineer',
    date: 'Feb 2023 – Jan 2025',
    description: [
      'Delivered 5+ client-facing full-stack web applications end-to-end using Django REST Framework and ReactJS.',
      'Designed normalized relational schemas and REST API contracts supporting scalable architecture and clean frontend-backend separation.',
      'Standardized React state management patterns and API response structures to improve maintainability and frontend performance.',
      'Collaborated in Agile teams across sprint planning, code reviews, and stakeholder demos while consistently delivering on time.',
    ],
    technologies: ['Django REST Framework', 'ReactJS', 'PostgreSQL', 'MySQL', 'REST API Design', 'Agile/Scrum'],
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

