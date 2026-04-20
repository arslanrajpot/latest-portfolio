import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import arslanImage from '../../assets/Arslan_Arshad(Pic).jpg';
import { Container, Content as StyledContent, SectionTitle, TextContent, ImageWrapper, Image, InfoGrid, InfoCard } from './styles';

const Content = motion(StyledContent);

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const About: React.FC = () => {
  return (
    <Container id="about">
      <Content
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle>
            <span className="number">01.</span>
            About Me
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <TextContent>
            <p>
              Hello! I am <strong>Arslan Arshad</strong>, a <strong>Senior Software Engineer</strong> and
              Full-Stack & AI Engineer with 3+ years of professional experience building scalable
              backend systems, modern web products, and intelligent AI solutions. I graduated from
              <strong> PUCIT</strong> and currently work remotely at <strong>Kintetic Intelligence</strong>,
              a US-based security and investigations SaaS company.
            </p>
            <p>
              My core stack includes <strong>Python</strong> with Django, Django REST Framework, and
              FastAPI on the backend, plus <strong>ReactJS</strong> on the frontend. I design
              high-throughput REST APIs, asynchronous workflows with Celery, and robust data layers using
              PostgreSQL, MySQL, MongoDB, and Redis.
            </p>
            <p>
              On the AI side, I build real-world systems using <strong>LangChain, LangGraph, RAG
              pipelines, vector databases (Pinecone/FAISS), and LLM integrations</strong> including
              LLaMA and Gemini. I focus on reliable, grounded AI features that improve decision-making
              and reduce manual workload.
            </p>
            <p>
              I am open to fully remote opportunities across US, EU, and global time zones, and I am
              proven in async communication, cross-timezone collaboration, and end-to-end ownership from
              architecture to deployment with strong documentation-first execution.
            </p>
            <p>Here are some technologies I work with:</p>
            <InfoGrid>
              <InfoCard>
                <span className="arrow">▹</span> Python (Django, DRF, FastAPI)
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> ReactJS & JavaScript
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Celery, Redis, WebSockets
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> PostgreSQL, MySQL, MongoDB
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> LangChain & LangGraph
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> RAG & Agentic AI
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> AWS, Docker, CI/CD
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> JWT, OAuth2, Stripe, Plaid, Twilio
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> REST API Design, Microservices, System Design
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Git, Postman, Jira, Agile/Scrum
              </InfoCard>
            </InfoGrid>
          </TextContent>

          <ImageWrapper>
            <Image src={arslanImage} alt="Arslan Arshad" />
          </ImageWrapper>
        </motion.div>
      </Content>
    </Container>
  );
};

