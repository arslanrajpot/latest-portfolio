import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 40px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 1.5rem 0;
  }
`;

export const Kicker = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.borderStrong};
  font-size: 13px;

  .idx {
    color: ${props => props.theme.colors.primary};
  }

  .count {
    color: ${props => props.theme.colors.text.muted};
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
  padding-top: 40px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const Headline = styled.div`
  grid-column: span 6;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }

  h2 {
    margin: 0;
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.045em;
    color: ${props => props.theme.colors.text.primary};
  }

  .pill {
    display: inline-block;
    margin-top: 6px;
    padding: 0 14px 6px;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.onBright};
    border-radius: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    h2 {
      font-size: 38px;
    }
  }
`;

export const TextCol = styled.div`
  grid-column: 8 / span 5;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }

  p {
    margin: 0;
    font-size: 17px;
    line-height: 1.65;
    color: ${props => props.theme.colors.text.secondary};

    strong {
      color: ${props => props.theme.colors.text.primary};
      font-weight: 600;
    }
  }
`;

export const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 32px;
  padding-top: 12px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Fact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 12px;
  border-top: 1px solid ${props => props.theme.colors.borderStrong};

  .k {
    font-size: 11.5px;
    color: ${props => props.theme.colors.text.muted};
  }

  .v {
    font-size: 15.5px;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
  }
`;
