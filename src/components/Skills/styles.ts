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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
`;

export const SkillCard = styled.div`
  background: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  }

  .skill-bar {
    width: 100%;
    height: 8px;
    background: ${props => props.theme.colors.background.secondary};
    border-radius: ${props => props.theme.borderRadius.sm};
    overflow: hidden;
    position: relative;
  }

  .skill-progress {
    height: 100%;
    border-radius: ${props => props.theme.borderRadius.sm};
    transition: width 1s ease;
  }

  .skill-level {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.text.secondary};
    font-weight: 600;
  }
`;

export const SkillIcon = styled.div<{ $color: string }>`
  font-size: 3rem;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  text-align: center;
`;

export const TechStack = styled.div`
  background: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    span {
      background: ${props => props.theme.colors.background.secondary};
      border: 1px solid ${props => props.theme.colors.border};
      padding: 0.75rem 1.5rem;
      border-radius: ${props => props.theme.borderRadius.md};
      color: ${props => props.theme.colors.text.secondary};
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        transform: translateY(-2px);
      }
    }
  }
`;

