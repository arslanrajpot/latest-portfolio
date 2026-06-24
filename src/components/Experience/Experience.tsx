import React from 'react';
import { motion } from 'framer-motion';
import { Container, Content as StyledContent, SectionTitle, Timeline, TimelineItem, TimelineContent, TimelineHeader, TimelineDate, TimelineCompany, TimelineRole, TimelineDescription, TechTags } from './styles';

const Content = motion(StyledContent);

const experiences = [
  {
    company: 'Kinetic Intelligence',
    role: 'Senior Software Engineer, AI & Backend',
    date: 'Feb 2026 – Present',
    description: [
      'Reduced daily analyst workload by several hours by shipping production-grade GenAI case analysis workflows and automated prompt engineering pipelines for investigative operations.',
      'Achieved a 40% reduction in API response times for complex investigative queries by combining Redis caching, PostgreSQL indexing, and query-level performance optimization.',
      'Architected high-throughput Django and PostgreSQL REST APIs with sub-100ms response targets for latency-sensitive investigative data workloads.',
      'Owned full-stack feature delivery across Django and ReactJS, taking features from system design and implementation through production release.',
    ],
    technologies: ['Django', 'ReactJS', 'Python', 'Redis', 'PostgreSQL', 'LLMs', 'Prompt Engineering', 'REST APIs'],
  },
  {
    company: 'Inovaqo',
    role: 'Full-Stack Software Engineer',
    date: 'Jan 2025 – Jan 2026',
    description: [
      'Reduced a 4-hour manual market research workflow to under 10 minutes by architecting a multi-agent LangGraph system for planning, research, semantic retrieval, tool use, and structured report generation.',
      'Improved API response times by 35% through query profiling, selective database indexing, and layered Redis caching across high-traffic endpoints.',
      'Replaced brittle keyword lookups with a RAG-based semantic search pipeline using LangChain and Pinecone for intelligent retrieval across large document corpora.',
      'Architected a multi-tenant SaaS backend using Django REST Framework and FastAPI with isolated customer environments, independent data pipelines, and role-based access control.',
      'Integrated Stripe, Plaid, and Twilio into production APIs and implemented JWT and Google OAuth2 authentication for secure user access.',
      'Owned end-to-end delivery of AI and backend features from architectural design through Dockerized AWS deployment, bridging complex LLM workflows with scalable SaaS infrastructure.',
    ],
    technologies: ['Django REST Framework', 'FastAPI', 'Celery', 'Redis', 'Django Channels', 'LangChain', 'LangGraph', 'Pinecone', 'AWS'],
  },
  {
    company: 'CodingCops',
    role: 'Associate Software Engineer',
    date: 'Dec 2022 – Jan 2025',
    description: [
      'Engineered and shipped full-stack production systems using Django REST Framework and ReactJS, owning API design, database architecture, and frontend integration across multiple client engagements.',
      'Designed normalized PostgreSQL and MySQL schemas and scalable REST API contracts, establishing maintainable foundations for evolving business requirements.',
      'Improved maintainability by standardizing API response structures, frontend integration patterns, and reusable ReactJS components across projects.',
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

