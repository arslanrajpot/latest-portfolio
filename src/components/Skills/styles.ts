import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 40px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 1.5rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GroupCard = styled.div`
  padding: 26px;
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }

  .heading {
    font-size: 12px;
    color: ${props => props.theme.colors.primary};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tags span {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 11.5px;
    padding: 3px 12px;
    border-radius: ${props => props.theme.borderRadius.pill};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.secondary};
  }
`;
