import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 6rem 1.5rem 3rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 1;
`;

export const TextContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const CodeBlock = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  opacity: 0.8;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1<{ $secondary?: boolean }>`
  font-size: ${props => (props.$secondary ? '3.5rem' : '4.5rem')};
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${props => (props.$secondary ? '1.5rem' : '0.5rem')};
  color: ${props => props.theme.colors.text.primary};

  .highlight {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => (props.$secondary ? '2rem' : '2.5rem')};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => (props.$secondary ? '1.75rem' : '2rem')};
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  
  strong {
    color: ${props => props.theme.colors.text.primary};
    font-weight: 600;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  .primary-btn,
  .secondary-btn {
    padding: 1rem 2rem;
    border-radius: ${props => props.theme.borderRadius.md};
    font-weight: 600;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .primary-btn {
    background: ${props => props.theme.colors.primary};
    color: white;
    border: 2px solid ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => props.theme.colors.primaryDark};
      border-color: ${props => props.theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    }
  }

  .secondary-btn {
    background: transparent;
    color: ${props => props.theme.colors.text.primary};
    border: 2px solid ${props => props.theme.colors.border};

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;

    .primary-btn,
    .secondary-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${props => props.theme.colors.background.secondary};
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 1rem;

    a {
      width: 45px;
      height: 45px;
      font-size: 1.1rem;
    }
  }
`;

