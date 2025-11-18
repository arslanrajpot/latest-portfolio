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

export const TextContent = styled.div`
  flex: 1;
  min-width: 300px;

  p {
    color: ${props => props.theme.colors.text.secondary};
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;

    strong {
      color: ${props => props.theme.colors.text.primary};
      font-weight: 600;
    }

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 300px;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.md};
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: 15px;
    left: 15px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.md};
  filter: grayscale(20%);
  transition: all 0.3s ease;

  ${ImageWrapper}:hover & {
    filter: grayscale(0%);
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.95rem;

  .arrow {
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
  }
`;

