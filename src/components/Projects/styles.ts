import styled, { css } from 'styled-components';

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
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

type Variant = 'feat' | 'inv' | 'plain';

const variantStyles = {
  feat: css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onAccent};
    border-color: transparent;
  `,
  inv: css`
    background: ${props => props.theme.colors.background.inverted};
    color: ${props => props.theme.colors.invertedText};
    border-color: transparent;
  `,
  plain: css`
    background: ${props => props.theme.colors.background.card};
    color: ${props => props.theme.colors.text.primary};
    border-color: ${props => props.theme.colors.border};
  `,
};

export const Card = styled.article<{ $variant: Variant }>`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 1px solid;
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  ${props => variantStyles[props.$variant]}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 12px;

  .kind {
    opacity: 0.75;
  }

  .org {
    padding: 3px 12px;
    border-radius: ${props => props.theme.borderRadius.pill};
    border: 1px solid currentColor;
    opacity: 0.85;
  }
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .eyebrow {
    font-size: 15px;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    font-size: 30px;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.85;
  }
`;

export const CardStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 40px;
  padding: 16px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: inherit;
  opacity: 0.95;

  .stat-value {
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .stat-label {
    max-width: 170px;
    font-size: 12.5px;
    opacity: 0.8;
    margin-top: 5px;
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 11.5px;
    padding: 3px 12px;
    border-radius: ${props => props.theme.borderRadius.pill};
    background: rgba(127, 127, 127, 0.14);
  }
`;

export const ContributionToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;

  span.label {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

`;

export const SignBadge = styled.span<{ $variant: Variant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 18px;
  line-height: 1;
  flex-shrink: 0;
  background: ${props =>
    props.$variant === 'feat'
      ? props.theme.colors.onAccent
      : props.$variant === 'inv'
      ? props.theme.colors.invertedText
      : props.theme.colors.text.primary};
  color: ${props =>
    props.$variant === 'feat'
      ? props.theme.colors.primary
      : props.$variant === 'inv'
      ? props.theme.colors.background.inverted
      : props.theme.colors.background.card};
`;

export const ContributionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 4px;
  font-size: 14px;
  line-height: 1.65;
  opacity: 0.9;

  strong {
    opacity: 1;
    font-weight: 600;
  }
`;

export const MoreCard = styled.a`
  grid-column: span 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 28px 32px;
  border: 1.5px dashed ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text.secondary};
  transition: all 0.3s ease;

  strong {
    color: ${props => props.theme.colors.text.primary};
    font-size: 17px;
  }

  span.sub {
    font-size: 14px;
  }

  svg {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;
