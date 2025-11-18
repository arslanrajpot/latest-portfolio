import React from 'react';
import { motion } from 'framer-motion';
import { Container, Content as StyledContent, SectionTitle, SkillsGrid, SkillCard, SkillIcon, SkillName, TechStack } from './styles';
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiMongodb, 
  SiMysql,
  SiPython,
  SiExpress,
  SiGit,
} from 'react-icons/si';
// import { FaJava } from 'react-icons/fa';

const Content = motion(StyledContent);

const skills = [
  { name: 'Python', icon: SiPython, level: 90, color: '#3776AB' },
  { name: 'Django', icon: SiPython, level: 85, color: '#092E20' },
  { name: 'FastAPI', icon: SiPython, level: 85, color: '#009688' },
  { name: 'React', icon: SiReact, level: 85, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, level: 80, color: '#339933' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
  { name: 'PostgreSQL', icon: SiMysql, level: 85, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
  { name: 'LangChain', icon: SiPython, level: 80, color: '#1C3C3C' },
  { name: 'Express', icon: SiExpress, level: 80, color: '#000000' },
  { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
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
              <span>LangChain & LangGraph</span>
              <span>LLM Integration</span>
              <span>RAG Pipelines</span>
              <span>Agentic AI</span>
              <span>Vector Databases</span>
              <span>RESTful APIs</span>
              <span>Django REST Framework</span>
              <span>FastAPI</span>
            </div>
          </TechStack>
        </motion.div>
      </Content>
    </Container>
  );
};

