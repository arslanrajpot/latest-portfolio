import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 40px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 1.5rem 0;
  }
`;

export const Panel = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.theme.colors.background.card};
  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 60px minmax(0, 4fr) minmax(0, 4fr) minmax(0, 3fr);
  gap: 28px;
  align-items: start;
  padding: 28px 28px;
  border-bottom: 1px solid ${props => props.theme.colors.borderHair};
  transition: background 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(149, 204, 221, 0.06);
  }

  &:hover h3 {
    color: ${props => props.theme.colors.primary};
  }

  .num {
    padding-top: 6px;
    font-size: 12.5px;
    color: ${props => props.theme.colors.primary};
  }

  h3 {
    margin: 0;
    font-size: 26px;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: ${props => props.theme.colors.text.primary};
    transition: color 0.15s ease;
  }

  p {
    margin: 0;
    padding-top: 4px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${props => props.theme.colors.text.secondary};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-top: 4px;

    span {
      font-family: ${props => props.theme.fonts.mono};
      font-size: 11px;
      padding: 3px 10px;
      border-radius: ${props => props.theme.borderRadius.pill};
      border: 1px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text.secondary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 10px;

    .num {
      padding-top: 0;
    }
  }
`;
