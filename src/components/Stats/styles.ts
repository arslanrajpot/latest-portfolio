import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: ${props => props.theme.colors.borderHair};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Cell = styled.div<{ $featured?: boolean }>`
  padding: 30px 26px 34px;
  background: ${props => (props.$featured ? props.theme.colors.primary : props.theme.colors.background.card)};
  color: ${props => (props.$featured ? props.theme.colors.onAccent : props.theme.colors.text.primary)};
  display: flex;
  flex-direction: column;
  gap: 10px;

  .value {
    font-size: 52px;
    line-height: 0.95;
    letter-spacing: -0.04em;
  }

  .label {
    font-size: 13.5px;
    max-width: 200px;
    color: ${props => (props.$featured ? 'inherit' : props.theme.colors.text.secondary)};
    opacity: ${props => (props.$featured ? 0.85 : 1)};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    .value {
      font-size: 40px;
    }
  }
`;
