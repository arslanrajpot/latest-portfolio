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
              Hello! I'm <strong>Arslan Arshad</strong>, a Full-Stack Software Engineer with 2+ years
              of professional experience. I graduated from <strong>PUCIT</strong> and currently work at
              <strong> Inovaqo</strong> as a Full Stack Software Engineer, where I build AI-driven
              applications and scalable backend systems.
            </p>
            <p>
              My expertise lies in <strong>Python</strong> (Django REST Framework, FastAPI) and
              <strong> Node.js</strong>, with a strong focus on scalable backend systems, RESTful APIs,
              and database optimization. I have hands-on experience in <strong>AI, Generative AI, and
              Agentic AI</strong>, including LLM integration, RAG pipelines, and multi-agent orchestration.
            </p>
            <p>
              I specialize in building production-ready applications using <strong>ReactJS</strong> for
              interactive frontends and <strong>PostgreSQL, MySQL</strong>, and NoSQL databases. I'm
              passionate about creating intelligent systems that leverage AI to solve complex problems
              and enhance user experiences.
            </p>
            <p>
              I am recognized as a collaborative team player valued for my problem-solving abilities and
              technical expertise. With a positive mindset, adaptability, and attention to detail, I
              make meaningful contributions to projects while staying updated with the latest
              technologies and best practices.
            </p>
            <p>Here are some technologies I work with:</p>
            <InfoGrid>
              <InfoCard>
                <span className="arrow">▹</span> Python (Django, FastAPI)
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Node.js & Express
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> ReactJS & JavaScript
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> PostgreSQL & MySQL
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> LangChain & LangGraph
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> LLM Integration & RAG
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> RESTful APIs
              </InfoCard>
              <InfoCard>
                <span className="arrow">▹</span> Git & Deployment
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

