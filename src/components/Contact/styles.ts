import styled from 'styled-components';

export const Container = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.theme.colors.background.secondary};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 4rem 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .number {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 400;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.border};
    margin-left: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: ${props => props.theme.colors.background.primary};
      border: 2px solid ${props => props.theme.colors.border};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.text.secondary};
      font-size: 1.25rem;
      transition: all 0.3s ease;

      &:hover {
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
      }
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  div {
    flex: 1;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: ${props => props.theme.colors.text.primary};
      margin-bottom: 0.5rem;
    }

    a, p {
      color: ${props => props.theme.colors.text.secondary};
      font-size: 0.95rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1rem;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`;

export const TextArea = styled.textarea`
  background: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1rem;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`;

export const SubmitButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StatusMessage = styled.div<{ $success?: boolean }>`
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props =>
    props.$success
      ? 'rgba(16, 185, 129, 0.1)'
      : 'rgba(239, 68, 68, 0.1)'};
  border: 1px solid
    ${props =>
      props.$success
        ? props.theme.colors.success
        : props.theme.colors.error};
  color: ${props =>
    props.$success
      ? props.theme.colors.success
      : props.theme.colors.error};
  font-size: 0.9rem;
  text-align: center;
`;

