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

export const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.border};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 1.5rem;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.background.secondary};
    z-index: 1;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 1.5rem;
    margin-bottom: 2.5rem;

    &::before {
      left: -1.75rem;
    }
  }
`;

export const TimelineHeader = styled.div`
  margin-bottom: 1rem;
`;

export const TimelineRole = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const TimelineCompany = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const TimelineDate = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

export const TimelineContent = styled.div`
  margin-top: 1rem;
`;

export const TimelineDescription = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: 1.5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
    }
  }
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

