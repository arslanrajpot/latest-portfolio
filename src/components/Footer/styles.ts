import styled from 'styled-components';

export const Container = styled.footer`
  padding: 3rem 2rem;
  background: ${props => props.theme.colors.background.primary};
  border-top: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    width: 45px;
    height: 45px;
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
`;

export const Copyright = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;

  p {
    margin: 0.25rem 0;

    strong {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
    }
  }
`;

