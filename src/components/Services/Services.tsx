import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { Container, Panel, Row } from './styles';

const services = [
  {
    num: '01',
    title: 'AI agents & RAG systems',
    desc: 'Multi-agent LangGraph orchestration and retrieval-augmented pipelines with confidence scoring, query rewriting, and human-review fallbacks.',
    tags: ['LangGraph', 'LangChain', 'RAG', 'Vector Search'],
  },
  {
    num: '02',
    title: 'Multi-tenant SaaS backends',
    desc: 'Django and FastAPI backends designed from the schema up, with tenant isolation, RBAC, and JWT/OAuth2 authentication.',
    tags: ['Django', 'FastAPI', 'PostgreSQL', 'RBAC'],
  },
  {
    num: '03',
    title: 'Backend performance & scale',
    desc: 'Query profiling, selective indexing, Redis caching, and async background processing that cut response times without extra infrastructure.',
    tags: ['Redis', 'Celery', 'Query Optimization', 'Async'],
  },
  {
    num: '04',
    title: 'Microservices & platform architecture',
    desc: 'Service-to-service auth trust models, independent deployments, and Kubernetes rollouts across multi-service platforms.',
    tags: ['Kubernetes', 'Docker', 'AWS EKS', 'JWT'],
  },
  {
    num: '05',
    title: 'Payments & third-party integrations',
    desc: 'Production integrations for billing, banking verification, and messaging across payment and verification flows.',
    tags: ['Stripe', 'Plaid', 'Twilio', 'OAuth2'],
  },
  {
    num: '06',
    title: 'Engineering leadership',
    desc: 'System design reviews, technical standards, and mentoring engineers across backend and AI workstreams.',
    tags: ['Code Review', 'Mentoring', 'System Design'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Services: React.FC = () => {
  return (
    <Container id="services">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <SectionHeader
            index={2}
            total={6}
            label="What I do"
            title="Backend, with an AI layer."
            description="If a product needs a backend, an AI agent, or both talking to each other, I can design it and take it to production."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Panel>
            {services.map(service => (
              <Row key={service.num}>
                <span className="num mono">{service.num}</span>
                <h3 className="disp">{service.title}</h3>
                <p>{service.desc}</p>
                <div className="tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="monoc">
                      {tag}
                    </span>
                  ))}
                </div>
              </Row>
            ))}
          </Panel>
        </motion.div>
      </motion.div>
    </Container>
  );
};
