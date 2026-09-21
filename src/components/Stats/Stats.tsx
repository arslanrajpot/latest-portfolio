import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Cell } from './styles';

const stats = [
  { value: '6+', label: 'Years shipping production backend & AI systems', featured: true },
  { value: '4', label: 'Independently deployed microservices led at Kinetic Intelligence' },
  { value: '~40%', label: 'API response-time improvement via caching & query optimization' },
  { value: '4h → 10m', label: 'Manual research workflow automated with a multi-agent system' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Stats: React.FC = () => {
  return (
    <Container>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={itemVariants}>
        <Grid>
          {stats.map(stat => (
            <Cell key={stat.label} $featured={stat.featured}>
              <div className="value disp">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </Cell>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};
