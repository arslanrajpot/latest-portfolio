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
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: end;
  padding: 64px 56px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onAccent};
  border-radius: ${props => props.theme.borderRadius.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px 28px;
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 26px;

  h2 {
    margin: 0;
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.045em;
  }

  .pill {
    display: inline-block;
    margin-top: 8px;
    padding: 0 14px 6px;
    background: ${props => props.theme.colors.onAccent};
    color: ${props => props.theme.colors.primary};
    border-radius: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    h2 {
      font-size: 34px;
    }
  }
`;

export const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 0 24px;
    font-size: 14.5px;
    font-weight: 600;
    border-radius: ${props => props.theme.borderRadius.pill};
    transition: transform 0.18s ease;
  }

  a:hover {
    transform: translateY(-2px);
  }

  .btn-i {
    background: ${props => props.theme.colors.background.inverted};
    color: ${props => props.theme.colors.invertedText};
  }

  .btn-o {
    background: transparent;
    color: inherit;
    border: 1px solid rgba(15, 21, 56, 0.3);
  }
`;

export const InfoCol = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 12px;
  border-top: 1px solid rgba(15, 21, 56, 0.22);

  .label {
    font-size: 11.5px;
    opacity: 0.75;
  }

  a,
  span.value {
    font-size: 16.5px;
    font-weight: 600;
  }
`;
