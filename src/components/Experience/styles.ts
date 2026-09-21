import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 40px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 1.5rem 0;
  }
`;

export const RoleList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.colors.borderStrong};
`;

export const RoleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  padding: 40px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderStrong};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const RoleMeta = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  .dates {
    padding: 4px 12px;
    border-radius: ${props => props.theme.borderRadius.pill};
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onAccent};
    font-size: 11.5px;
  }

  .company {
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${props => props.theme.colors.text.primary};
  }

  .place {
    font-size: 13.5px;
    color: ${props => props.theme.colors.text.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

export const RoleContent = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 1;
  }
`;

export const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .item {
    display: flex;
    gap: 13px;
  }

  .dot {
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    margin-top: 8px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  span {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 11.5px;
    padding: 3px 12px;
    border-radius: ${props => props.theme.borderRadius.pill};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.secondary};
  }
`;

export const EducationBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  margin-top: 32px;
  padding: 32px;
  background: ${props => props.theme.colors.background.inverted};
  color: ${props => props.theme.colors.invertedText};
  border-radius: ${props => props.theme.borderRadius.lg};

  .label {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .heading {
    font-size: 12px;
    color: ${props => props.theme.colors.primary};
  }

  .title {
    font-size: 26px;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .body {
    grid-column: span 8;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .school {
    font-size: 16px;
    font-weight: 600;
  }

  .place {
    font-size: 13px;
    opacity: 0.8;
  }

  .coursework {
    font-size: 14px;
    opacity: 0.85;
    margin-top: 4px;
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    .label,
    .body {
      grid-column: span 1;
    }
  }
`;
