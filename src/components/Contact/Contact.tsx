import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Container, Content as StyledContent, SectionTitle, ContactWrapper, ContactInfo, InfoItem, ContactForm, FormGroup, Input, TextArea, SubmitButton, StatusMessage } from './styles';

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

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Using Formspree endpoint - replace with your own if needed
    try {
      const response = await fetch('https://formspree.io/f/xwkjzqyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Container id="contact">
      <Content
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle>
            <span className="number">05.</span>
            Get In Touch
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Open to fully remote Software Engineer, Senior Software Engineer, AI Engineer, Backend Engineer,
            and GenAI Engineer roles across the US, EU, UK, Middle East, and global teams — with 5+ hrs/day
            overlap with US Eastern / EU Central and immediate availability. If you want to discuss a role,
            collaboration, or product idea, feel free to reach out.
          </p>
        </motion.div>

        <ContactWrapper>
          <motion.div variants={itemVariants}>
            <ContactInfo>
              <InfoItem>
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:arslanarshad1018@gmail.com">arslanarshad1018@gmail.com</a>
                </div>
              </InfoItem>

              <InfoItem>
                <FaPhone />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+923097457394">(+92) 3097457394</a>
                </div>
              </InfoItem>

              <InfoItem>
                <FaMapMarkerAlt />
                <div>
                  <h4>Location</h4>
                  <p>Lahore, Pakistan · Fully Remote</p>
                </div>
              </InfoItem>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/arslanarshad-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/arslanrajpot/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=+923097457394&text=Hello+arslan" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com/arslan_arshad23" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </ContactInfo>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactForm onSubmit={onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <TextArea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </SubmitButton>

              {status === 'success' && (
                <StatusMessage $success>
                  Thank you! Your message has been sent successfully.
                </StatusMessage>
              )}

              {status === 'error' && (
                <StatusMessage>
                  Sorry, there was an error sending your message. Please try again.
                </StatusMessage>
              )}
            </ContactForm>
          </motion.div>
        </ContactWrapper>
      </Content>
    </Container>
  );
};

