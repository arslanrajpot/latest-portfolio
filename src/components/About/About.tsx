import React from 'react';
import { motion } from 'framer-motion';
import { Container, Kicker, Layout, Headline, TextCol, FactsGrid, Fact } from './styles';

const facts = [
  { k: 'BASED IN', v: 'Lahore, Pakistan' },
  { k: 'CURRENT ROLE', v: 'Senior Software Engineer, Kinetic Intelligence' },
  { k: 'EDUCATION', v: 'BS Software Engineering, PUCIT' },
  { k: 'CORE STACK', v: 'Python, Django, FastAPI' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MotionHeadline = motion(Headline);
const MotionTextCol = motion(TextCol);

export const About: React.FC = () => {
  return (
    <Container id="about">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <Kicker className="mono">
            <span>
              <span className="idx">[06]</span>&nbsp; About
            </span>
            <span className="count">06 / 06</span>
          </Kicker>
        </motion.div>

        <Layout>
          <MotionHeadline variants={itemVariants}>
            <h2 className="disp">
              From database schema to <span className="pill">production AI.</span>
            </h2>
          </MotionHeadline>

          <MotionTextCol variants={itemVariants}>
              <p>
                I am a <strong>Senior Backend &amp; AI Engineer</strong> with <strong>6+ years</strong> of experience
                architecting and shipping production-grade Python systems, from Django and FastAPI backends to
                multi-agent LangGraph pipelines and RAG systems.
              </p>
              <p>
                I currently work remotely at <strong>Kinetic Intelligence</strong>, a Dubai, UAE-based company, where I
                lead backend and AI-integration engineering for a 4-service microservices platform — owning the
                identity trust model, background processing, and the AI-chatbot bridging layer that connects the
                product to a generative AI assistant.
              </p>
              <p>
                Earlier, at Inovaqo, I built a production multi-agent research system that collapsed a 4-hour manual
                workflow into under 10 minutes for 8+ enterprise clients, and delivered an estimated{' '}
                <strong>35–40% API performance improvement</strong> through caching, indexing, and query
                optimization across multi-tenant SaaS backends.
              </p>
              <p>
                I am open to fully remote <strong>Senior Software Engineer, Backend Engineer, and AI Engineer</strong>{' '}
                roles across the US, EU, UK, Middle East, and global teams, with 5+ hrs/day overlap with US
                Eastern / EU Central and immediate availability.
              </p>

              <FactsGrid>
                {facts.map(fact => (
                  <Fact key={fact.k}>
                    <span className="k mono">{fact.k}</span>
                    <span className="v">{fact.v}</span>
                  </Fact>
                ))}
              </FactsGrid>
          </MotionTextCol>
        </Layout>
      </motion.div>
    </Container>
  );
};
