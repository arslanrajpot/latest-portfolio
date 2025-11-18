import styled from 'styled-components';

export const Container = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  .folder-icon {
    color: ${props => props.theme.colors.primary};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const ExternalLink = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const ProjectBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 0.5rem;

    a {
      color: inherit;
      transition: color 0.3s ease;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

export const ProjectFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  span {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 0.8rem;
    color: ${props => props.theme.colors.text.secondary};
    padding: 0.25rem 0.75rem;
    background: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.sm};
    transition: all 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

