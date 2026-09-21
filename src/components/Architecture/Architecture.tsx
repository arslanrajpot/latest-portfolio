import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineArrowLeft, HiOutlineArrowDown } from 'react-icons/hi';
import { SectionHeader } from '../shared/SectionHeader';
import {
  Container,
  TabBar,
  Tab,
  Layout,
  DiagramPanel,
  DiagramIntro,
  NodeGrid,
  Node,
  Sidebar,
  SideBox,
} from './styles';

interface NodeData {
  title: string;
  sub: string;
}

interface SystemData {
  id: string;
  label: string;
  kind: string;
  title: string;
  blurb: string;
  nodes: NodeData[];
  decisions: string[];
}

const layout = [
  { gc: 1, gr: 1, arr: 'r' },
  { gc: 2, gr: 1, arr: 'r' },
  { gc: 3, gr: 1, arr: 'd' },
  { gc: 3, gr: 2, arr: 'l' },
  { gc: 2, gr: 2, arr: 'l' },
  { gc: 1, gr: 2, arr: null },
] as const;

const systems: SystemData[] = [
  {
    id: 'ballogy',
    label: 'Ballogy Platform · microservices',
    kind: 'MICROSERVICES · BALLOGY PLATFORM',
    title: 'Four services, one identity.',
    blurb:
      'Four independently deployed services trust a single identity provider instead of re-authenticating on every call, with background work isolated into its own pods.',
    nodes: [
      { title: 'ballogy-users', sub: 'Django — identity, auth & profiles (source of truth)' },
      { title: 'JWT middleware', sub: 'Shared secret decoded by each service, no callback per request' },
      { title: 'ballogy-training / -tests', sub: 'FastAPI — drills, assessments, shot-tracking' },
      { title: 'ballogy-notification', sub: 'Django — push + in-app notifications' },
      { title: 'Celery / Redis / django-q', sub: 'Background workers in separate pods from the API' },
      { title: 'AWS EKS', sub: 'Bitbucket → ECR → kubectl, deployed independently per service' },
    ],
    decisions: [
      'Identity sits in one service: ballogy-users issues the JWT, the other three decode it with a shared secret instead of calling back on every request.',
      'API and background work never share a pod: Celery/django-q workers and beat schedulers run as separate Kubernetes deployments from the web API.',
      'A database connection-pool exhaustion incident on the training service was fixed by splitting API/worker/beat into separate deployments with tuned pool sizes — not by adding hardware.',
    ],
  },
  {
    id: 'ai-bridge',
    label: 'AI Coaching Bridge · Ballogy',
    kind: 'AI INTEGRATION · BALLOGY',
    title: 'Auth and context, not just a chat window.',
    blurb:
      'The platform doesn’t generate the AI response itself — it owns the identity, quota, and context assembly around a separate generative AI service.',
    nodes: [
      { title: 'Athlete opens chat', sub: 'From the daily training-report screen' },
      { title: 'Freemium gate', sub: 'Per-profile, per-sport quota — 3 free conversations/month' },
      { title: 'Context assembly', sub: 'Last 10 days of reports + conversation history' },
      { title: 'External AI agent', sub: 'Generates the grounded response' },
      { title: 'Response bridge', sub: 'Saved back to MongoDB via a wrapper service' },
      { title: 'Chat history API', sub: 'Session + history endpoints for the mobile app' },
    ],
    decisions: [
      'Quota is scoped per profile and sport, not pooled across a user’s whole account — fixed a real bug where limits leaked across profiles.',
      'Context sent to the AI agent is capped at the last 10 days of reports, so grounding stays relevant without an unbounded payload.',
      'ballogy-users owns identity, quota, and history — the LLM call itself lives in a separate service it bridges to over HTTP.',
    ],
  },
  {
    id: 'research-agent',
    label: 'AI Research Agent · LangGraph',
    kind: 'MULTI-AGENT RAG · RESEARCH PLATFORM',
    title: 'Plan, retrieve, generate — with a check.',
    blurb:
      'A LangGraph pipeline plans the research task, retrieves grounded context, generates a report, and rewrites the query automatically when confidence is low.',
    nodes: [
      { title: 'Research query', sub: 'Enterprise client request' },
      { title: 'Planner agent', sub: 'Breaks the request into research steps' },
      { title: 'Pinecone retrieval', sub: 'Semantic chunking + vector search' },
      { title: 'Confidence scoring', sub: 'Rewrites the query if retrieval is weak' },
      { title: 'Generator agent', sub: 'Produces the structured report' },
      { title: 'FastAPI + React', sub: 'Delivered to 8+ enterprise clients' },
    ],
    decisions: [
      'Confidence scoring sits between retrieval and generation: low-confidence context triggers an automatic query rewrite instead of a hallucinated answer.',
      'Agents are separated by responsibility (planner / researcher / generator) instead of one long prompt — easier to debug and extend.',
      'The workflow collapsed a 4-hour manual process into under 10 minutes, deployed across 8+ enterprise clients.',
    ],
  },
];

const principles = [
  'Own the architecture from database schema and API design through to production deployment.',
  'Keep API and background work in separate processes — never let one pod’s load affect the other.',
  'Design access control in from the start: JWT trust models, RBAC, and tenant isolation.',
  'Measure AI systems: confidence scoring and evaluation, not just a working demo.',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Arrow: React.FC<{ dir: 'r' | 'l' | 'd' }> = ({ dir }) => {
  if (dir === 'r') return <HiOutlineArrowRight className="arrow arrow-r" size={20} />;
  if (dir === 'l') return <HiOutlineArrowLeft className="arrow arrow-l" size={20} />;
  return <HiOutlineArrowDown className="arrow arrow-d" size={20} />;
};

export const Architecture: React.FC = () => {
  const [activeId, setActiveId] = useState(systems[0].id);
  const active = systems.find(s => s.id === activeId) ?? systems[0];

  return (
    <Container id="architecture">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <SectionHeader
            index={3}
            total={6}
            label="Architecture & system design"
            title="How the systems are shaped."
            description="Three production systems I've architected, from the data going in to the interface people use. Pick one to see its flow and key decisions."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TabBar>
            {systems.map(system => (
              <Tab key={system.id} $active={system.id === activeId} onClick={() => setActiveId(system.id)}>
                {system.label}
              </Tab>
            ))}
          </TabBar>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Layout>
            <DiagramPanel>
              <DiagramIntro>
                <span className="kind mono">{active.kind}</span>
                <h3 className="disp">{active.title}</h3>
                <p>{active.blurb}</p>
              </DiagramIntro>

              <NodeGrid>
                {active.nodes.map((node, i) => {
                  const pos = layout[i];
                  return (
                    <Node key={node.title} $gc={pos.gc} $gr={pos.gr}>
                      <span className="num monoc">{String(i + 1).padStart(2, '0')}</span>
                      <span className="title">{node.title}</span>
                      <span className="sub">{node.sub}</span>
                      {pos.arr && <Arrow dir={pos.arr} />}
                    </Node>
                  );
                })}
              </NodeGrid>
            </DiagramPanel>

            <Sidebar>
              <SideBox>
                <span className="heading mono">Key design decisions</span>
                {active.decisions.map(text => (
                  <div className="item" key={text}>
                    <span className="dot" />
                    <span>{text}</span>
                  </div>
                ))}
              </SideBox>

              <SideBox $accent>
                <span className="heading mono">How I approach architecture</span>
                {principles.map(text => (
                  <div className="item" key={text}>
                    <span className="dash" />
                    <span>{text}</span>
                  </div>
                ))}
              </SideBox>
            </Sidebar>
          </Layout>
        </motion.div>
      </motion.div>
    </Container>
  );
};
