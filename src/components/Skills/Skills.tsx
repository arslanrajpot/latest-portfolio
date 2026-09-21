import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { Container, Grid, GroupCard } from './styles';

const skillGroups = [
  { name: 'LANGUAGES', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    name: 'AI & MACHINE LEARNING',
    items: ['LangChain', 'LangGraph', 'RAG', 'Vector Search', 'Prompt Engineering', 'OpenAI', 'LLaMA', 'Gemini', 'Groq'],
  },
  {
    name: 'BACKEND',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL', 'WebSockets', 'Microservices'],
  },
  { name: 'FRONTEND', items: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3'] },
  { name: 'DATABASES & CACHING', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'] },
  { name: 'SECURITY & AUTH', items: ['JWT', 'OAuth 2.0', 'RBAC', 'Tenant Isolation'] },
  { name: 'CLOUD & DEVOPS', items: ['AWS (EC2, RDS, S3)', 'AWS EKS', 'Docker', 'Kubernetes', 'CI/CD'] },
  { name: 'INTEGRATIONS', items: ['Stripe', 'Plaid', 'Twilio'] },
  { name: 'TOOLS & PROCESS', items: ['Celery', 'Git', 'Postman', 'Jira', 'Agile/Scrum'] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Skills: React.FC = () => {
  return (
    <Container id="skills">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <SectionHeader
            index={5}
            total={6}
            label="Technical skills"
            title="The tools I build with."
            description="The stack I use in production, grouped by the layer it serves."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Grid>
            {skillGroups.map(group => (
              <GroupCard key={group.name}>
                <span className="heading mono">{group.name}</span>
                <div className="tags">
                  {group.items.map(item => (
                    <span key={item} className="monoc">
                      {item}
                    </span>
                  ))}
                </div>
              </GroupCard>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </Container>
  );
};
