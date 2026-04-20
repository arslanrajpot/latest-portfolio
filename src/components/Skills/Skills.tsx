import React from 'react';
import { motion } from 'framer-motion';
import { Container, Content as StyledContent, SectionTitle, SkillsGrid, SkillCard, SkillIcon, SkillName, TechStack } from './styles';
import { 
  SiReact, 
  SiJavascript, 
  SiMongodb, 
  SiMysql,
  SiPostgresql,
  SiPython,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiRedis,
  SiDjango,
  SiFastapi,
  SiFlask,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Content = motion(StyledContent);

const skills = [
  { name: 'Python', icon: SiPython, level: 92, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
  { name: 'Java', icon: FaJava, level: 75, color: '#007396' },
  { name: 'Django / DRF', icon: SiDjango, level: 88, color: '#092E20' },
  { name: 'FastAPI', icon: SiFastapi, level: 88, color: '#009688' },
  { name: 'Flask', icon: SiFlask, level: 78, color: '#000000' },
  { name: 'ReactJS', icon: SiReact, level: 86, color: '#61DAFB' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 86, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, level: 82, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, level: 78, color: '#47A248' },
  { name: 'Redis', icon: SiRedis, level: 84, color: '#DC382D' },
  { name: 'AWS', icon: SiAmazonaws, level: 82, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, level: 82, color: '#2496ED' },
  { name: 'Git', icon: SiGit, level: 88, color: '#F05032' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const Skills: React.FC = () => {
  return (
    <Container id="skills">
      <Content
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle>
            <span className="number">03.</span>
            Skills & Technologies
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard key={index}>
                <SkillIcon $color={skill.color}>
                  <skill.icon />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>

        <motion.div variants={itemVariants} style={{ marginTop: '3rem' }}>
          <TechStack>
            <h3>Additional Technologies</h3>
            <div className="tech-list">
              <span>HTML / CSS / MUI</span>
              <span>Django Channels (WebSockets)</span>
              <span>Celery</span>
              <span>LangChain & LangGraph</span>
              <span>RAG Pipelines</span>
              <span>Prompt Engineering</span>
              <span>LLM Integration</span>
              <span>Agentic AI</span>
              <span>Multi-Agent Systems</span>
              <span>Pinecone & FAISS</span>
              <span>LLaMA & Gemini</span>
              <span>Groq API</span>
              <span>JWT / OAuth2 / Google OAuth2</span>
              <span>Stripe, Plaid, Twilio</span>
              <span>REST API Design</span>
              <span>Microservices</span>
              <span>Multi-Tenant Systems</span>
              <span>System Design</span>
              <span>Redis Caching & Query Optimization</span>
              <span>SQLite</span>
              <span>Postman / Jira</span>
              <span>Agile / Scrum</span>
              <span>Async Remote Collaboration</span>
              <span>CI/CD</span>
              <span>AWS (EC2, RDS, S3)</span>
            </div>
          </TechStack>
        </motion.div>
      </Content>
    </Container>
  );
};

