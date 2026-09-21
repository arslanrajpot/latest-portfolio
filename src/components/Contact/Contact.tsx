import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Container, Panel, Main, CtaRow, InfoCol, InfoItem } from './styles';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={itemVariants}>
        <Panel>
          <Main>
            <span className="mono" style={{ fontSize: 13 }}>
              [07] Contact
            </span>
            <h2 className="disp">
              Building a backend or AI system that has to hold up in production?{' '}
              <span className="pill">Let&apos;s talk.</span>
            </h2>
            <CtaRow>
              <a className="btn-i" href="mailto:arslanarshad1018@gmail.com">
                Email me <HiOutlineArrowRight />
              </a>
              <a className="btn-o" href="/ARSLAN_ARSHAD.pdf" download="ARSLAN_ARSHAD.pdf">
                Download résumé
              </a>
            </CtaRow>
          </Main>

          <InfoCol>
            <InfoItem>
              <span className="label mono">Email</span>
              <a href="mailto:arslanarshad1018@gmail.com">arslanarshad1018@gmail.com</a>
            </InfoItem>
            <InfoItem>
              <span className="label mono">Phone</span>
              <a href="tel:+923097457394">+92 309 7457394</a>
            </InfoItem>
            <InfoItem>
              <span className="label mono">Location</span>
              <span className="value">Lahore, Pakistan · Fully Remote</span>
            </InfoItem>
          </InfoCol>
        </Panel>
      </motion.div>
    </Container>
  );
};
