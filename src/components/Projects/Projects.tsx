import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { SectionHeader } from '../shared/SectionHeader';
import {
  Container,
  Grid,
  Card,
  CardTop,
  CardMain,
  CardStats,
  TechTags,
  ContributionToggle,
  ContributionBody,
  SignBadge,
  MoreCard,
} from './styles';

type Variant = 'feat' | 'inv' | 'plain';

interface ProjectData {
  id: string;
  num: string;
  kind: string;
  org: string;
  span: number;
  variant: Variant;
  name: string;
  headline: string;
  desc: string;
  stats: { v: string; l: string }[];
  tags: string[];
  github: string;
  owned: string;
  delivered: string;
}

const projects: ProjectData[] = [
  {
    id: 'research',
    num: '01',
    kind: 'ENTERPRISE AI RESEARCH',
    org: 'Inovaqo',
    span: 7,
    variant: 'feat',
    name: 'AI-Powered Market Research Platform',
    headline: 'Four hours of research, done in ten minutes.',
    desc: 'A multi-agent LangGraph platform that autonomously plans, retrieves, and generates structured market analysis reports for enterprise clients.',
    stats: [
      { v: '4h → 10m', l: 'Manual research workflow automated' },
      { v: '8+', l: 'Enterprise clients deployed across' },
    ],
    tags: ['FastAPI', 'React', 'LangGraph', 'LangChain', 'Pinecone', 'Groq API', 'LLaMA'],
    github: 'https://github.com/arslanrajpot/Research_analyst',
    owned:
      'Architected the multi-agent pipeline end to end using LangGraph (planner, researcher, generator agents), a RAG pipeline on Pinecone with semantic chunking, and confidence scoring that automatically rewrites low-confidence queries to reduce hallucination.',
    delivered:
      'A modular FastAPI backend with Pydantic validation and service-agent separation, integrated with a React frontend — the automated workflow completes in under 10 minutes and is deployed across 8+ enterprise clients.',
  },
  {
    id: 'youtube',
    num: '02',
    kind: 'AI VIDEO ANALYSIS',
    org: 'Personal Project',
    span: 5,
    variant: 'plain',
    name: 'YouTube Talker',
    headline: 'Chat with any video instead of watching it.',
    desc: 'An end-to-end GenAI workflow that extracts transcripts, indexes them, and answers natural-language questions grounded in the video content.',
    stats: [{ v: '45m → 30s', l: 'Video review time per video' }],
    tags: ['Flask', 'LangChain', 'Google Gemini', 'FAISS', 'YouTube Data API'],
    github: 'https://github.com/arslanrajpot/ai-youtube-video-chatbot',
    owned:
      'Built the end-to-end pipeline: YouTube transcript extraction, LangChain embeddings, FAISS indexing, and Gemini-based context-aware answer generation with source attribution.',
    delivered:
      'A real-time chat experience over long-form video content (1–6+ hours), cutting manual review time from 45 minutes to about 30 seconds per video.',
  },
  {
    id: 'insightrag',
    num: '03',
    kind: 'SELF-CORRECTING RAG',
    org: 'Personal Project',
    span: 6,
    variant: 'inv',
    name: 'InsightRAG',
    headline: "Answers that know when they're not sure.",
    desc: 'A self-grading document Q&A agent built for compliance-critical workflows where confident-sounding hallucinations are unacceptable.',
    stats: [{ v: '3-signal', l: 'Confidence scoring: vector + lexical + LLM' }],
    tags: ['FastAPI', 'LangGraph', 'LangChain', 'FAISS', 'Groq'],
    github: 'https://github.com/arslanrajpot/InsightRAG-Chatbot-',
    owned:
      'Designed a self-grading LangGraph agent that rewrites ambiguous queries, retrieves documents, grades context relevance, and runs automatic refinement loops when evidence is insufficient.',
    delivered:
      'A multi-signal confidence score combining vector similarity, lexical overlap, and LLM-based assessment that routes low-confidence answers to human review instead of guessing.',
  },
  {
    id: 'predictor',
    num: '04',
    kind: 'RAG · RECRUITING',
    org: 'Personal Project',
    span: 6,
    variant: 'plain',
    name: 'AI Interview Question Predictor',
    headline: 'Interview prep, matched to the real job.',
    desc: 'A RAG tool that predicts likely interview questions from a candidate’s actual CV, target role, and job description.',
    stats: [{ v: 'Role + level', l: 'Question bank matched by seniority' }],
    tags: ['Flask', 'Google Gemini', 'RAG', 'Vector Search', 'PDF Parsing'],
    github: 'https://github.com/arslanrajpot/ai-question-predictor-rag',
    owned:
      'Built the CV-parsing and embedding pipeline: PDF text extraction, Gemini semantic embeddings, and a curated question bank segmented by role and experience level.',
    delivered:
      'Candidates get a targeted shortlist of interview questions matched to their real background and the job description, instead of a generic one-size-fits-all list.',
  },
  {
    id: 'reviewpulse',
    num: '05',
    kind: 'AI SAAS · REVIEW INTELLIGENCE',
    org: 'Personal Project',
    span: 12,
    variant: 'plain',
    name: 'ReviewPulse',
    headline: 'Real reviews in, grounded answers out — not AI guesswork.',
    desc: "A subscription SaaS platform that turns a restaurant's public reviews into a RAG-grounded Q&A assistant and analytics dashboard, with Stripe-metered billing engineered to survive upgrades, retries and cancellations.",
    stats: [
      { v: '50 × 5', l: 'Reviews collected per restaurant, across auto-discovered competitors' },
      { v: '0 overspend', l: 'Usage metering stays atomic under concurrent requests' },
    ],
    tags: ['FastAPI', 'LangChain', 'OpenAI GPT-4o', 'Pinecone', 'Stripe', 'Next.js 15', 'PostgreSQL'],
    github: 'https://github.com/arslanrajpot/restaurant-reviews',
    owned:
      "Architected the full platform: onboarding that auto-discovers a restaurant and its competitors via Google Maps, a LangChain RAG agent on GPT-4o grounded in real review data, Stripe subscription billing with prorated upgrades and webhook-driven tier sync, and atomic usage metering that can't be overspent by concurrent requests.",
    delivered:
      "A production-architected SaaS platform where answers stay grounded in a restaurant's real reviews, billing stays correct through every Stripe edge case, and usage limits hold even under concurrent load.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Projects: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ research: true });

  const toggle = (id: string) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <Container id="work">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <SectionHeader
            index={1}
            total={6}
            label="Selected work"
            title="Systems I have shipped."
            description="Five things I've built end-to-end — architecture, code, and results. Open any card to see exactly what I owned."
          />
        </motion.div>

        <Grid>
          {projects.map(project => {
            const isOpen = !!open[project.id];
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                style={{ gridColumn: `span ${project.span}`, display: 'flex' }}
              >
                <Card $variant={project.variant}>
                  <CardTop className="mono">
                    <span className="kind">
                      {project.num} / {project.kind}
                    </span>
                    <span className="org">{project.org}</span>
                  </CardTop>

                  <CardMain>
                    <span className="eyebrow">{project.name}</span>
                    <h3 className="disp">{project.headline}</h3>
                    <p>{project.desc}</p>
                  </CardMain>

                  <CardStats>
                    {project.stats.map(stat => (
                      <div key={stat.l}>
                        <div className="stat-value disp">{stat.v}</div>
                        <div className="stat-label">{stat.l}</div>
                      </div>
                    ))}
                  </CardStats>

                  <TechTags>
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </TechTags>

                  <div>
                    <ContributionToggle
                      aria-expanded={isOpen}
                      onClick={() => toggle(project.id)}
                    >
                      <span className="label">My contribution</span>
                      <SignBadge $variant={project.variant}>{isOpen ? '–' : '+'}</SignBadge>
                    </ContributionToggle>
                    {isOpen && (
                      <ContributionBody>
                        <p>
                          <strong>What I owned. </strong>
                          {project.owned}
                        </p>
                        <p>
                          <strong>What I delivered. </strong>
                          {project.delivered}
                        </p>
                        <p>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'underline', fontWeight: 600 }}
                          >
                            View source on GitHub →
                          </a>
                        </p>
                      </ContributionBody>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </Grid>

        <motion.div variants={itemVariants} style={{ marginTop: '24px' }}>
          <MoreCard href="https://github.com/arslanrajpot/" target="_blank" rel="noreferrer">
            <div>
              <strong>More on GitHub</strong>
              <br />
              <span className="sub">Additional production and learning projects across Python, JavaScript, and Java.</span>
            </div>
            <FaArrowRight />
          </MoreCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};
