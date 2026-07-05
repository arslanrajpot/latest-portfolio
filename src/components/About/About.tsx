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
              Hello! I am <strong>Arslan Arshad</strong>, a <strong>Senior AI & Backend Engineer</strong> with
              <strong> 4 years</strong> of experience building production-grade agentic systems and
              high-throughput backend infrastructure. I graduated from <strong>PUCIT</strong> and currently
              work remotely at <strong>Kinetic Intelligence</strong>, a Dubai, UAE-based investigations and
              security SaaS company.
            </p>
            <p>
              I own the full <strong>GenAI lifecycle</strong> — from RAG architecture and
              <strong> LangGraph</strong> multi-agent orchestration to backend optimization, evaluation, and
              production deployment. On one project, I reduced a <strong>4-hour manual research workflow to
              under 10 minutes</strong> with a LangGraph multi-agent system, and across production systems
              I've delivered <strong>35–40% API performance improvements</strong> through caching, indexing,
              and query optimization.
            </p>
            <p>
              My core stack includes <strong>Python</strong> with Django, Django REST Framework, and
              FastAPI on the backend, plus <strong>ReactJS</strong> on the frontend. I design
              high-throughput REST APIs, asynchronous workflows with Celery, and robust data layers using
              PostgreSQL, MySQL, MongoDB, and Redis — paired with <strong>LangChain, RAG pipelines, vector
              databases (Pinecone/FAISS), and LLM integrations</strong> including LLaMA, Gemini, and Groq.
            </p>
            <p>
              I am open to fully remote <strong>Senior Software Engineer, AI Engineer, Backend Engineer,
              and GenAI Engineer</strong> opportunities across the US, EU, UK, Middle East, and global teams.
              Proven in async-first collaboration, cross-timezone communication (5+ hrs/day overlap with US
              Eastern / EU Central), and end-to-end ownership from architecture to deployment — with
              immediate availability.
            </p>
            <p>Here are some technologies I work with:</p>
            <InfoGrid>
              <InfoCard>
                <span className="arrow">▹</span> LangChain & LangGraph
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> RAG & Agentic AI
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Vector DBs (Pinecone, FAISS)
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Python (Django, DRF, FastAPI)
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Celery, Redis, WebSockets
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> PostgreSQL, MySQL
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> REST API Design, Microservices, System Design
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> JWT, OAuth2, Stripe, Plaid, Twilio
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> AWS, Docker, CI/CD
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Git, Postman, Jira, Agile/Scrum
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> ReactJS & JavaScript
              </InfoCard>
            </InfoGrid>

            <p style={{ marginTop: '2rem' }}>Education & Certifications:</p>
            <InfoGrid>
              <InfoCard>
                <span className="arrow">▹</span> BS Software Engineering — PUCIT, Lahore (2019–2023)
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Mastering RAG: Build Smart, Data-Driven Apps — IBM Skills Network (2026)
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Generative AI with Vertex AI: Prompt Design — Google Cloud Skills Boost
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

